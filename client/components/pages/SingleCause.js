import React, { Component } from 'react';
import Card from '../common/Card';
import { connect } from 'react-redux'
import { fetchAllCauses } from '../../store/causes';
import { fetchAllBrands } from '../../store/brands';
import { addToCart } from '../../store/cart'
import { fetchProducts } from '../../store/products';
import AllBrands from './AllBrands'
import AllProducts from './AllProducts';


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
    let singleCause, filteredCauseProducts, filteredCauseBrands;

    if (this.props.causes.length) {
      singleCause = this.props.causes.find(cause => cause.id === Number(this.props.match.params.id));
      filteredCauseBrands = singleCause.brands;

      if (this.props.products.length) {
        filteredCauseProducts = this.props.products.filter(product => product.causeId === singleCause.id);
      }

    }


    return (
      <div className="page">
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
                  <AllBrands filteredBrands={filteredCauseBrands} />
                </div>
              }
              <h3>Want to get involved? Check out the products that believe in this cause too.</h3>
              <button onClick={() => { this.setState({ showCauseProducts: !this.state.showCauseProducts }) }}>Products</button>
              {
                this.state.showCauseProducts &&
                <div>
                  <AllProducts filteredProducts={filteredCauseProducts} />
                </div>
              }
            </div>
        }
      </div>
    )
  }
}


// {
//   this.props.products.filter(product => product.causeId === singleCause.id).map(causeProduct => {
//     return (
//       <div key={causeProduct.id}>
//       <Card category="product" type="brands" product={causeProduct} id={causeProduct.id} brand={causeProduct.brand} name={causeProduct.name} price={causeProduct.price} button="Add to cart" imageUrl={causeProduct.imageUrl} addToCart={this.props.addToCart} />
//     </div>
//     )
//   })
// }

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

