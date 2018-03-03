import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products';

/* -----------------    COMPONENT     ------------------ */

class SingleProduct extends Component {

  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let singleProduct = this.props.products.find(product => product.id === Number(this.props.match.params.id))
    return (
      <div>
      {
        singleProduct
        ?
        <div>
        <h2>{singleProduct.name}</h2>
        <img width="300px" height="auto" src={singleProduct.imageUrl} />
        <p>Description: {singleProduct.description}</p>
        <p>Price: ${singleProduct.price}</p>
        <div>
        <h1>Checkout reviews on the {singleProduct.name}</h1>
        {
          singleProduct.Reviews.map(review => {
            return (
              <div key={review.id}>
              <h2>Title: {review.title}</h2>
              <h2>Description: {review.content}</h2>
              <h2>Rating: {review.rating}</h2>
              <br />
              </div>
            )
          })
        }
        </div>
        </div>
        :
        <h1>This Item is No Longer Available</h1>
      }
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ products }) => {
  return {
    products
  }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchProducts())
  }
});

export default connect(mapState, mapDispatch)(SingleProduct);
