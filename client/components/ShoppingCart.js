import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* -----------------    COMPONENT     ------------------ */

class ShoppingCart extends Component {

  // componentDidMount() {
  //   this.props.fetchCart();
  // }


  render() {
    return (
      <div className="page">
        <h1>SHOPPING CART</h1>
        <div className="cartContainer">
          <ul>
            {

              this.props.cartContents.map(
                product => (
                <div className="cartItem" key={product.product.id}>
                  <div >
                    <Link className="cartItem" to={`/products/${product.product.id}`} >
                      <img className="cartThumbnail" src={product.product.imageUrl} />
                    </Link>
                  </div>
                  <div className="cartDetails">
                    {product.product.name}
                    <br />
                    Quantity:  {product.count}
                  </div>
                </div>
              ))
              }
          </ul>
        </div>
        <button onClick = {() => this.props.history.push('/checkout')}>Checkout</button>
      </div>
    )
  }
}

// export {ShoppingCart}
/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({
  cartContents: state.cart
})

const mapDispatch = null


export default connect(mapState, mapDispatch)(ShoppingCart);
