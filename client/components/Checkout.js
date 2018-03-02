import React from 'react'
import { connect } from 'react-redux'
import {checkout} from '../store/cart'


/**
 * COMPONENT
 */
const Checkout = (props) => {
  const { name, displayName, handleSubmit } = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="firstName"><small>First Name</small></label>
          <input name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName"><small>Last Name</small></label>
          <input name="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="billingAddress"><small>Billing address</small></label>
          <input name="email" type="text" />
        </div>

        <div>
          <button type="submit"> </button>
        </div>
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
}



const mapState = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName

  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      let paymentInfo = {
        firstName: evt.target.firstName.value,
        lastName: evt.target.lastName.value,
        email: evt.target.email.value,
        password: evt.target.password.value
      }
      dispatch(checkout(paymentInfo))
    }
  }
}

export const Checkout = connect(mapLogin, mapDispatch)(Checkout)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
