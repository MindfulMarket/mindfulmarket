import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = (props) => {
        const { name, displayName, handleSubmit, error } = props
        console.log(displayName)

    return (
    <div className="page">
        { displayName === 'Sign Up' ?
          <h2> Haven't joined the revolution yet? Now is the time to sign up</h2>
          : ''
        }
          <form onSubmit={handleSubmit} name={name}>
          { displayName === 'Sign Up' ?
          <div>
            <div>
              <label  style = {{ fontSize: '18px' }} htmlFor="firstName">First Name</label>
              <input style = {{ width: '240', height: '20px' }} name="firstName" type="text" />
            </div>
            <div>
              <label  style = {{ fontSize: '18px' }} htmlFor="lastName">Last Name</label>
              <input style = {{ width: '240', height: '20px' }} name="lastName" type="text" />
            </div>
          </div>
          : ''
          }
        <div>
          <label  style = {{ fontSize: '18px' }}htmlFor="email">Email</label>
          <input style = {{ width: '240', height: '20px' }} name="email"  type="text" />
        </div>
        <div>
          <label  style = {{ fontSize: '18px' }} htmlFor="password">Password</label>
          <input style = {{ width: '240', height: '20px' }}name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google"><img style={{maxHeight: '250px', maxWidth: '250px'}} src="https://hhs.htps.us/UserFiles/Servers/Server_791028/Templates/login-google.png" /></a>
    </div>
  )
}

        /**
         * CONTAINER
         *   Note that we have two different sets of 'mapStateToProps' functions -
         *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
         *   function, and share the same Component. This is a good example of how we
         *   can stay DRY with interfaces that are very similar to each other!
         */
        const mapLogin = (state) => {
            return {
                name: 'login',
                displayName: 'Login',
                error: state.user.error
            }
        }

        const mapSignup = (state) => {
            return {
                name: 'signup',
                displayName: 'Sign Up',
                error: state.user.error
            }
        }

        const mapDispatch = (dispatch) => {
            return {
                handleSubmit(evt) {
                    evt.preventDefault()
                    const formName = evt.target.name
                    const firstName = evt.target.firstName.value
                    const lastName = evt.target.lastName.value
                    const email = evt.target.email.value
                    const password = evt.target.password.value
                    dispatch(auth(firstName, lastName, email, password, formName))
                }
            }
        }

        export const Login = connect(mapLogin, mapDispatch)(AuthForm)
        export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

        /**
         * PROP TYPES
         */
        AuthForm.propTypes = {
            name: PropTypes.string.isRequired,
            displayName: PropTypes.string.isRequired,
            handleSubmit: PropTypes.func.isRequired,
            error: PropTypes.object
        }
