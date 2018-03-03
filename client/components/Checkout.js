import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {getOrders} from '../store/user'
 import { fetchAndSetCart } from '../store/cart'


/**
 * COMPONENT
 */
const Checkout = (props) => {
  const { name, displayName, handleSubmit } = props

  return (
    <div id="checkout-container">
      <h1 id="checkout-title">Checkout</h1>
      <form onSubmit={(evt) => {
        evt.preventDefault()
        axios.put(`/api/users/${props.userId}`, {shoppingCart: []})
        props.emptyCart()
        let totalPrice = props.order.reduce((total, productObj) => {
          return total + (productObj.product.price * productObj.count)
        }, 0)
      const order = { productsOrdered: props.order, totalPrice, userId: props.userId }

          axios.post('/api/orders', order)
          .then(()=>props.getOrders(props.userId))


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
  )
}



const mapState = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    order: state.cart,
    userId: state.user.id,

  }
}

const mapDispatch = (dispatch) => {
  return {

    handlePaymentSubmit(evt) {
      evt.preventDefault()
      let paymentInfo = {
        firstName: evt.target.firstName.value,
        lastName: evt.target.lastName.value,
        email: evt.target.email.value,
        password: evt.target.password.value
      }
      // dispatch(checkout(paymentInfo))
    },
    getOrders:(id)=>dispatch(getOrders(id)),
    emptyCart:()=> dispatch(fetchAndSetCart([]))

  }
}

export default connect(mapState, mapDispatch)(Checkout)

