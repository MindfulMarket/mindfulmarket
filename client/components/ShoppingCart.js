import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'

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
<<<<<<< HEAD
<h1>SHOPPING CART</h1>
          <div className="cartContainer">
<ul>
                {

                  this.props.cartContents.map(
                    product =>  <li className = "cartItem" key={product.id}>{product.name}</li>
                  )
              }
              </ul>
           </div>
=======
        <h1>SHOPPING CART</h1>
        <div className="cartContainer">
          <ul>
            {

              this.props.cartContents.map(
                product => <li className="cartItem" >{product.name}</li>
              )
            }
          </ul>
        </div>
>>>>>>> 46f90fbdcf13bc55067564fc327b1eb0b18b802a
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
