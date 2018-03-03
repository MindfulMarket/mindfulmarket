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
      <Link id = "profileLink" to="/profile">Your Account</Link>

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
                <Link to="/products">All Products</Link>                <Link to="/categories">All Categories</Link>
                <Link to="/causes">All Causes</Link>
<<<<<<< HEAD
                <Link to="/">Home</Link>
=======


>>>>>>> master
                <Link to="/cart" ><img id="cartImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-metallic-orbs-icons-business/082438-green-metallic-orb-icon-business-basket.png" /></Link>
              </div>
            </div>
          ) : (
              <div className="navbar">
                {/* Links for main page components for navigation, NOT for presentational use*/}
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
      </div>
      <hr />
  </div>
)

    // <div className="navbar2">
    //   <p>Top Deals</p>
    // </div>
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

// import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { logout } from '../store'

// const Navbar = ({ handleClick, isLoggedIn }) => (
//   <div className="doubleNavbar">

//     <div className="topnavbar">
//       <p>Top Deals</p>
//     </div>

//     <div className="bottomnavbar" style={{flexDirection: 'row'}}>
//       <div className="titlebar">
//         <a href="/" id="title"><p id="title" >THE MINDFUL MARKET</p></a>
//         <p id="subtitle">Shopping, for those who care</p>
//       </div>

//       <div className="nav">
//         <nav className="nav">
//           {isLoggedIn ? (
//             <div>
//               {/* The navbar will show these links after you log in */}
//               <Link to="/home">Home</Link>
//               <a href="#" onClick={handleClick}>
//                 Logout
//             </a>
//             </div>
//           ) : (
//             <div style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//               <div >
//               <ul className='menu'>
//                 <li className='dropdown'><span>Causes</span>
//                   <ul className='features-menu'>
//                     <li><a href='#'>Environment</a></li>
//                     <li><a href='#'>Homelessness</a></li>
//                     <li><a href='#'>Fair Wages</a></li>
//                     <li><a href='#'>Stronger</a></li>
//                   </ul>
//                 </li>
//                 <li><a href='#'>Products</a></li>
//                 <li><a href='#'>About Mindful Market</a></li>
//                 </ul>
//               </div>

//               <div>
//                 <Link to="/login">Login</Link>
//                 <Link to="/signup">Sign Up</Link>
//                 <Link to="/cart" ><img id="cartImg" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-metallic-orbs-icons-business/082438-green-metallic-orb-icon-business-basket.png" /></Link>
//               </div>
//             </div>
//             )}
//         </nav>
//       </div>
//       <hr />
//     </div>
//   </div>
// )

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)

// /**
//  * PROP TYPES
//  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
