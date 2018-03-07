import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateQuant, deleteProduct, loadAndUpdateLocalStorage, updateBackendCart } from '../store/cart'

/* -----------------    COMPONENT     ------------------ */

class ShoppingCart extends Component {

  // componentDidMount() {
  //   this.props.fetchCart();
  // }


  render() {
    let totalPrice
    if (this.props.cartContents) {
      if (this.props.cartContents.length) {
         totalPrice = this.props.cartContents.reduce((total, productObj) => {
          return total + (productObj.product.price * productObj.count)
        }, 0)
      }
    }
    return (

      <div className="page">
        <h1>SHOPPING CART <i className="fas fa-shopping-cart"></i>



        </h1>
        <div className="cartContainer">
          <ul>
            {
              this.props.cartContents.length ?

                (
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
                          Quantity:
                          <form onSubmit={(evt) => {
                            evt.preventDefault()
                            this.props.updateQuant(product.product, parseInt(evt.target.howMany.value))
                            this.props.updateLocal(this.props.cartContents)

                            this.props.updateBackendCart(this.props.cartContents, this.props.id)



                          }} >
                            <input type='text' name='howMany' className='quantityInput' placeholder={product.count} />
                            <button type='submit'>save changes</button>
                          </form>
                          <button className="cartDelete" onClick={
                            () => {
                              this.props.delete(product)
                                .then(() => {
                                  this.props.updateLocal(this.props.cartContents)
                                  this.props.updateBackendCart(this.props.cartContents, this.props.id)
                                })

                            }
                          }> - </button>
                        </div>
                      </div>
                    ))
                ) : <div id='emptyCartMsg' >Your shopping cart is empty</div>
            }
          </ul>
        </div>
        <div id='currentTotal'>${totalPrice || ''}</div>
        <button onClick={() => this.props.history.push('/checkout')}>Checkout</button>
      </div>
    )
  }
}

// export {ShoppingCart}
/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({
  cartContents: state.cart,
  id: state.user.id

})

const mapDispatch = (dispatch) => (
  {
    delete: (prod) => {
      dispatch(deleteProduct(prod))
      return Promise.resolve()
    },
    updateQuant: (prod, newQuantity) => {
      dispatch(updateQuant(prod, newQuantity))
      return Promise.resolve()
    },
    updateLocal: (cart) => loadAndUpdateLocalStorage(cart),
    updateBackendCart: (cart, id) => updateBackendCart(cart)

  }
)
export default connect(mapState, mapDispatch)(ShoppingCart);
