import React, { Component } from 'react';
import Card from '../common/Card';
import { connect } from 'react-redux'
import { fetchAllCauses } from '../../store/causes';
import { fetchAllBrands } from '../../store/brands';
import { addToCart } from '../../store/cart'
import { fetchProducts } from '../../store/products';
import AllBrands from './AllBrands'


/* -----------------    COMPONENT     ------------------ */

class SingleCause extends Component {
  constructor() {
    super();
    this.state = {
      showCauseBrands: false,
      showCauseProducts: false
    }
  }

  componentDidMount() {
    this.props.fetchData()
  }


  render() {
    let singleCause = this.props.causes.find(cause => cause.id === Number(this.props.match.params.id))
    console.log(this.props, ' cause props')
    return (
      <div>
        {
          !singleCause
            ? ''
            :
            <div>
              <h1>{singleCause.name}</h1>
              <img width="300px" height="auto" src={singleCause.imageUrl} />
              <h2>Description: {singleCause.description}</h2>
              <h3>Want to get involved? Check out the brands that believe in this cause too.</h3>
              <button onClick={() => { this.setState({ showCauseBrands: !this.state.showCauseBrands }) }}>Brands</button>
              {
                this.state.showCauseBrands &&
                <div>
                  {
                    singleCause.brands.map(brand => {
                      return (
                        <div key={brand.id}>
                        <Card key={brand.name} category="brands" type="brand" id={brand.id} brand={brand} name={brand.name} button="explore" imageUrl={brand.imageUrl} />
                        </div>
                      )
                    }
                    )
                  }
                </div>
              }
                <h3>Want to get involved? Check out the products that believe in this cause too.</h3>
              <button onClick={() => { this.setState({ showCauseProducts: !this.state.showCauseProducts }) }}>Products</button>
              {
                this.state.showCauseProducts &&
                <div>
                {
                  this.props.products.filter(product => product.causeId === singleCause.id).map(causeProduct => {
                    return (
                      <div key={causeProduct.id}>
                      <Card category="products" type="brand" product={causeProduct} id={causeProduct.id} brand={causeProduct.brand} name={causeProduct.name} price={causeProduct.price} button="Add to cart" imageUrl={causeProduct.imageUrl} addToCart={this.props.addToCart} />
                    </div>
                    )
                  })
                }
                </div>
              }
            </div>
        }
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = ({ products, causes, brands }) => {
  return {
    products, causes, brands
  }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchAllCauses())
    dispatch(fetchAllBrands())
    dispatch(fetchProducts())
  },
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapState, mapDispatch)(SingleCause);

// {
//   this.props.products.filter(product => product.brandId === brand.id).map(product => {
//     return (
//       <Card key={product.id} category="products" type="product" product={product} name={product.name} imageUrl={product.imageUrl} id={product.id} price={product.price} addToCart={this.props.addToCart} />
//     )
//   })
// }
