import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="doubleNavbar">

    <div className="navbar2">
      <p>Top Deals</p>
    </div>

    <div className="navbar">
      <div className="titlebar">
        <a href="/" id="title"><p id="title" >THE MINDFUL MARKET</p></a>
        <p>Shopping, for those who care</p>
      </div>

      <div className="nav">
        <nav className="nav">
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>
                Logout
            </a>
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
    isLoggedIn: !!state.user.id
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
