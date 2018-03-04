import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products';

/* -----------------    COMPONENT     ------------------ */

class SingleProduct extends Component {

  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let singleProduct = this.props.products.filter(product => product.id === Number(this.props.match.params.id))[0]

    return (
      <div className="page">
      {
        singleProduct
        ?
        <div>
        <h2>{singleProduct.name}</h2>
        <img width="300px" height="auto" src={singleProduct.imageUrl} />
        <p>Description: {singleProduct.description}</p>
        <p>Price: ${singleProduct.price}</p>
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
