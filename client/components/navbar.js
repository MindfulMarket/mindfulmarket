import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import axios from 'axios'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="doubleNavbar">

    <div className="topNavbar">
      <p id = "topDeal" >Top Deals</p>

            {isLoggedIn ? (
              <Link id = "logout" style={{marginRight:"20px"}}   onClick={() => {
              handleClick()
              axios.put(`/api/users/${this.props.initial.id}`, { shoppingCart: this.props.cart })
            }} to='/'>Logout</Link>
              ) : (
              <div style={{marginRight:"20px" }}>
                <Link to="/login" style={{marginRight:"20px"}}>Login</Link>
                <Link to="/signup" style={{marginRight:"20px"}}>Sign Up</Link>
                <a href='/about' style={{marginRight:"20px"}}>About Mindful Market</a>
              </div>
            )}

    </div>

    <div className="bottomNavbar">
      <div className="titlebar">
        <a href="/" id="title"><p>THE MINDFUL MARKET</p></a>
        <p id='snootyCaption'> redefining shopping, for those who care</p>
      </div>

      <div className="links-container">
        <nav >
             {<div className='dropdown'>
                {/* Links for main page components for navigation, NOT for presentational use*/}
                <ul className='menu'>
                 <li className='dropdown2' ><Link to="/causes" style={{color:'black'}}>Causes</Link>
                   <ul className='features-menu'>
                     <li><a href='#'>Environment</a></li>
                     <li><a href='#'>Homelessness</a></li>
                     <li><a href='#'>Fair Wages</a></li>
                   </ul>
                 </li>
                 <li className='dropdown3'><Link to="/categories" style={{color:'black'}}>Categories</Link>
                   <ul className='features-menu2'>
                { /* this.props.categories.map( category => (
                      <li><a href=`/categories/${caegory.name}`>{category.name}</a></li>
                ))
                */ }
                      <li><a href='#'>Clothing</a></li>
                     <li><a href='#'>Beauty</a></li>
                     <li><a href='#'>Cleaning Supplies</a></li>
                   </ul>
                 </li>
                <li ><Link to="/products" style={{color:'black'}}>Products</Link></li>
                <li><Link to="/brands" style={{color:'black'}}>Brands</Link></li>
                </ul>
                <Link to="/cart" ><img id="cartImg" style={{height:"55px", width:'45px', marginTop: '-15px'}} src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/green-metallic-orbs-icons-business/082438-green-metallic-orb-icon-business-basket.png" /></Link>
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
    categories: state.categories || [],
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
