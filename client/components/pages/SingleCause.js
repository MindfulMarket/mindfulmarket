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
    this.showCause = this.showCause.bind(this)
  }

  componentDidMount() {
    this.props.fetchData()
  }


  render() {
    let singleCause = this.props.causes.find(cause => cause.id === Number(this.props.match.params.id))
    return (
      <div>
        {
          !singleCause
            ? <h1>hi</h1>
            :
            <div>
              <h2>{singleCause.name}</h2>
              <img width="300px" height="auto" src={singleCause.imageUrl} />
              <p>Description: {singleCause.description}</p>
              <p>Want to get involved? Check out the brands that believe in this cause too.</p>
              <button onClick={this.showCause}>Brands</button>
            </div>
        }
      </div>
    )
  }

  showCause() {
      return (
          <div>
          <h1>HElloooasodofa</h1>
          </div>
        );
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

// <div>
// {
//   singleCause.brands.map(brand => {
//     return (
//     <div key={brand.id}>
//     <Card category="brands" type="brand" id={brand.id} brand={brand} name={brand.name} button="explore" imageUrl={brand.imageUrl} />
//     {
//       this.props.products.filter(product => product.brandId === brand.id).map(product => {
//         return (
//           <Card key={product.id} category="products" type="product" product={product} name={product.name} imageUrl={product.imageUrl} id={product.id} price={product.price} addToCart={this.props.addToCart} />
//         )
//       })
//     }
//    </div>
//   )
//   }
//   )
// }
// </div>


