import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import axios from 'axios'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="doubleNavbar">
    <div className="navbar2">
      <p id = "topDeal" >Top Deals</p>
      <Link id = "logout" onClick={() => {
        handleClick()
        axios.put(`/api/users/${this.props.initial.id}`, { shoppingCart: this.props.cart })
      }} to='/'>Logout</Link>
    </div>

    <div className="navbar">
      <div className="titlebar">
        <a href="/" id="title"><p>MINDFUL MARKET</p></a>
        <p id='snootyCaption'>...shopping, for those who care</p>
      </div>

      <div className="links-container">
        <nav >
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}

              <div >
                {/* Links for main page components for navigation, NOT for presentational use*/}
                <Link to="/products">All Products</Link>
                <Link to="/brands">All Brands</Link>
                <Link to="/categories">All Categories</Link>
                <Link to="/causes">All Causes</Link>
                <Link to="/">Home</Link>

                <Link to="/cart" ><img id="cartImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-metallic-orbs-icons-business/082438-green-metallic-orb-icon-business-basket.png" /></Link>
              </div>
            </div>
          ) : (
              <div className="Navbar-container">
                {/* Links for main page components for navigation, NOT for presentational use*/}
                <Link to="/products">All Products</Link>
                <Link to="/brands">All Brands</Link>
                <Link to="/categories">All Categories</Link>
                <Link to="/causes">All Causes</Link>
                <Link to="/">Home</Link>

                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart" ><img id="cartImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-metallic-orbs-icons-business/082438-green-metallic-orb-icon-business-basket.png" /></Link>
              </div>
            )}
        </nav>
      </div>
      <hr />
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart || []
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {

      dispatch(logout())

    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
