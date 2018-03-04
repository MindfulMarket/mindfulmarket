import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products';
import { fetchAllBrands } from '../../store/brands';
import { addToCart } from '../../store/cart';
import Card from '../common/Card';
import AllProducts from './AllProducts';

/* -----------------    COMPONENT     ------------------ */

class SingleBrand extends Component {

  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let singleBrand, singleBrandProducts;

    if (this.props.brands) {
      singleBrand = this.props.brands.filter(brand => brand.id === Number(this.props.match.params.id))[0];
    }
    if (this.props.products) {
      singleBrandProducts = this.props.products.filter(product => product.brandId === Number(this.props.match.params.id));
    }

    return (
      <div className='page'>
        <div>
          <br />
          {
            !singleBrand
              ? ''
              :
              <div>
                <img width="300px" height="auto" src={singleBrand.imageUrl} />
                <p>{singleBrand.description}</p>
              </div>
          }
        </div>
        <div>
          {
            !singleBrandProducts
              ? ''
              : <AllProducts filteredProducts={singleBrandProducts} />
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
