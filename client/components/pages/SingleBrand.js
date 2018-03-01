import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products';
import { fetchAllBrands } from '../../store/brands';
import { addToCart } from '../../store/cart';
import Card from '../common/Card';

/* -----------------    COMPONENT     ------------------ */

class SingleBrand extends Component {

  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let singleBrand = this.props.brands.filter(brand => brand.id === Number(this.props.match.params.id))[0];

    let singleBrandProducts = this.props.products.filter(product => product.brandId === Number(this.props.match.params.id));
    return (
      <div>
        <div>
          <br />
          {
            (singleBrand === undefined)
              ? <h1>''</h1>
              :
              <div>
                <img width="300px" height="auto" src={singleBrand.imageUrl} />
                <p>{singleBrand.description}</p>
              </div>
          }
        </div>
        <div>
          {
            (singleBrandProducts === undefined)
              ? ''
              : singleBrandProducts.map(product =>
                <Card key={product.name} category="product" product={product} name={product.name} imageUrl={product.imageUrl} id={product.id} price={product.price} addToCart = {this.props.addToCart} />
              )
          }
        </div>
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ products, brands }) => {
  return {
    products, brands
  }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchProducts())
    dispatch(fetchAllBrands())
  },
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapState, mapDispatch)(SingleBrand);
