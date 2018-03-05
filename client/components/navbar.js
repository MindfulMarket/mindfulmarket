import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import {Search} from './index'
import axios from 'axios'


const Navbar = (props) => (

  <div className="doubleNavbar">
    <div className="topNavbar">
      <p id="topDeal" >Top Deals</p>

      {props.isLoggedIn ? (
        <div>
          <Link
            id="logout" style={{ marginRight: '20px' }} onClick={() => {
                        props.handleClick()
                        axios.put(`/api/users/${this.props.initial.id}`, { shoppingCart: this.props.cart })
                      }} to="/">Logout</Link>
                      <Link id="profileLink" to="/profile">Your Account</Link>
                      <a href="/about" style={{ marginRight: '20px' }}>About Mindful Market</a>

                    </div>
                  ) : <div>
                      <Link to="/login" style={{ marginRight: '20px' }}>Login</Link>
                      <Link to="/signup" style={{ marginRight: '20px' }}>Sign Up</Link>
                      <a href="/about" style={{ marginRight: '20px' }}>About Mindful Market</a></div>
                  }


                </div>

                <div className="bottomNavbar">
                  <div className="titlebar">
                    <a href="/" id="title"><p>MINDFUL MARKET</p></a>
                    <p id="snootyCaption"> redefining shopping, for those who care</p>
                  </div>

                  <div className="links-container">
                    <nav >
                      {

                        <div className="dropdown">
                          {/* Links for main page components for navigation, NOT for presentational use*/}
                          <ul className="menu">


                            <li className="dropdown2 mainNavLink" ><Link
            style={{ color: 'rgb(18, 108, 119)' }} className="active" to="/causes">Causes</Link>
                              <ul
            className="features-menu" style={{
                    color: 'rgb(255 , 255, 255)'
                  }}>
                    {props.causes.map(cause => (
                      <li
                        className="navDropLabel" key={cause.id}><a
style={{
                          color: 'rgb(255,255,255)'
                        }} href={`/causes/${cause.id}`}>{cause.name}</a></li>

                      //  <li><a href='#'>Homelessness</a></li>
                      //  <li><a href='#'>Fair Wages</a></li>
                    ))
                    }
                  </ul>
                </li>


                <li className="dropdown3 mainNavLink"><Link to="/categories" style={{ color: 'rgb(18, 108, 119)' }}>Categories</Link>
                  <ul
className="features-menu2" style={{
                    color: 'rgb(255 , 255, 255)'
                  }}>
                    {props.categories.map(category => (
                      <li
style={{
                        color: 'rgb(255,255,255)'
                      }} className="navDropLabel" key={category.id}><a
style={{
                        color: 'rgb(255 , 255, 255)'
                      }} href={`/categories/${category.id}`}>{category.name}</a></li>
                    ))
                    }
                  </ul>
                </li>


                <li className="dropdown4 mainNavLink"><Link to="/brands" style={{ color: 'rgb(18, 108, 119)' }}>Brands</Link>
                  <ul className="features-menu3">
                    {
                      props.brands.map(brand => {
                        return (<li
style={{
                          color: 'rgb(255,255,255)'
                        }} className="navDropLabel" key={brand.id}><a
style={{
                          color: 'rgb(255 , 255, 255)'
                        }} href={`/brands/${brand.id}`}>{brand.name}</a></li>)
                      }
                      )
                    }
                  </ul>
                </li>
                <Link to="/products" >Products</Link>

              </ul>
              <div style={{ paddingTop: '13px' }}>
                <Search />
              </div>
              <Link to="/cart" ><img id="cartImg" style={{ height: '55px', width: '45px', marginTop: '-15px' }} src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-metallic-orbs-icons-business/082438-green-metallic-orb-icon-business-basket.png" /></Link>
            </div>}

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
    cart: state.cart || [],
    causes: state.causes || [],
    categories: state.categories || [],
    brands: state.brands || []

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

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

