import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getOrders } from '../store/user'
import { fetchAndSetCart, loadAndUpdateLocalStorage, updateBackendCart } from '../store/cart'
import { Link } from 'react-router-dom'


/**
 * COMPONENT
 */
const Checkout = (props) => {
  const { name } = props

  let totalPrice = props.cartContents.reduce((total, productObj) => {
    return total + (productObj.product.price * productObj.count)
  }, 0).toFixed(2)


  return (
    <div className="page" id="checkout-container">
      <div id="checkout-form">
        <h1 id="checkout-title">Checkout</h1>
        <form
          onSubmit={(evt) => {
            evt.preventDefault()
            axios.put(`/api/users/${props.userId}`, { shoppingCart: [] })
            props.emptyCart(props.userId)
            let totalPrice = props.order.reduce((total, productObj) => {
              return total + (productObj.product.price * productObj.count)
            }, 0)
            const order = { productsOrdered: props.order, totalPrice, userId: props.userId } //this should be a thunk
            axios.post('/api/orders', order)
              .then(() => props.getOrders(props.userId))
            //clear the frontend cart on logout

            props.history.push('/thankyou/ordered')

          }} name={name}>
          <div>
            <label htmlFor="firstName"><small>First Name</small></label>
            <input name="firstName" type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="lastName"><small>Last Name</small></label>
            <input name="lastName" type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="billingAddress"><small>Billing address</small></label>
            <input name="email" type="text" />
          </div>
          <br />
          <div>
            <button type="submit">SUBMIT ORDER</button>
          </div>
        </form>
      </div>
      <div>
        <div className="cartContainer">
          {

            props.cartContents.map(
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
        </div>
      </div>
    </div>
  )
}


const mapState = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    order: state.cart,
    userId: state.user.id,
    cartContents: state.cart

  }
}

const mapDispatch = (dispatch) => {
  return {

    handlePaymentSubmit(evt) {
      evt.preventDefault()
      // let paymentInfo = {
      //   firstName: evt.target.firstName.value,
      //   lastName: evt.target.lastName.value,
      //   email: evt.target.email.value,
      //   password: evt.target.password.value
      // }
      // dispatch(checkout(paymentInfo))
    },
    getOrders: (id) => dispatch(getOrders(id)),
    emptyCart: (id) => {
      dispatch(fetchAndSetCart([]))
      loadAndUpdateLocalStorage([])
      updateBackendCart([],id)
    }
  }
}

export default connect(mapState, mapDispatch)(Checkout)
