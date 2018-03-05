import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import axios from 'axios'


const Footer = (props, {isLoggedIn, handleClick}) => (

  <div className="footer">

      <div className="footerLinks">
        <nav >
             {<div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px'}}>
                {/* Links for main page components for navigation, NOT for presentational use*/}

            <Link to="/causes" style={{color: 'black'}}>Causes</Link>
            <Link to="/categories" style={{color: 'black'}}>Categories</Link>
            <Link to="/products" style={{color: 'black'}}>Products</Link>
            <Link to="/brands" style={{color: 'black'}}>Brands</Link>

            </div>}

          </nav>
        </div>
      {isLoggedIn ? (
              <Link
id = "logout" style={{marginRight: '20px'}}   onClick={() => {
              handleClick()
              axios.put(`/api/users/${this.props.initial.id}`, { shoppingCart: this.props.cart })
            }} to="/">Logout</Link>
              ) : (
              <div style={{marginRight: '20px' }}>
                <Link to="/login" style={{marginRight: '20px'}}>Login</Link>
                <Link to="/signup" style={{marginRight: '20px'}}>Sign Up</Link>
                <a href="/about" style={{marginRight: '20px'}}>About Mindful Market</a>
                <Link to="/cart" ><img id="cartImg" style={{height: '55px', width: '45px', marginTop: '-15px'}} src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-metallic-orbs-icons-business/082438-green-metallic-orb-icon-business-basket.png" /></Link>
              </div>
            )}


      <hr />
    </div>
)


/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart || [],
    causes: state.causes || [],
    categories: state.categories || [],

    // categories: state.categories || [],
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())

    }
  }
}

export default connect(mapState, mapDispatch)(Footer)

/**
 * PROP TYPES
 */
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
