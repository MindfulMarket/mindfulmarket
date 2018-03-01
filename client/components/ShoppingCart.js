import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

/* -----------------    COMPONENT     ------------------ */

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchCart();
  // }


  render() {
    return (
      <div id="cart">
<h1>SHOPPING CART</h1>
          <div className="cartContainer">
<ul>
                {

                  this.props.cartContents.map(
                    product =>  <li className = "cartItem" key={product.product.id}>
                    <Link to = {`/products/${product.product.id}`} >
                    <img className = 'cartThumbnail' src = {product.product.imageUrl} />
                    Name: {product.product.name}
                    </Link><div className = "quantDiv">Quantity:  {product.count}</div></li>

                  )
              }
              </ul>
           </div>


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
// dispatch => ({
//   fetchCart: () =>
//   dispatch(())
// });

export default connect(mapState, mapDispatch)(ShoppingCart);
