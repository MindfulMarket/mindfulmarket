import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from './index'
/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email } = props
  return (
    <div className="page">
      <h3>Welcome, {email}!</h3>
      <div className="carousel">
        <h1 id = "reccommendationHeader" >BRUCE RECOMMENDS ....</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Card type = 'frontPageCard' name="$10 or less" imageUrl="https://comps.canstockphoto.com/cheap-grunge-red-round-stamp-drawings_csp16503597.jpg" button='see more'  brand={{}} category="home" />
        <Card type = 'frontPageCard' name="Spring Cleaning" imageUrl="http://www.sustainablebabysteps.com/images/xspring-cleaning-tips.jpg.pagespeed.ic.09GQFP7PeA.jpg" button='see more'  brand={{}} category="home" />
        <Card type = 'frontPageCard' name="Helping Homelessness" imageUrl="https://madride.net/wp-content/uploads/2016/11/1673225-inline-750-homeless3-480x270.jpg" button='see more'  brand={{}} category="home" />
        <Card type = 'frontPageCard' name="T-shirts for the Earth" imageUrl="https://jetimages.jetcdn.net/md5/540b1ee11353bf3a8d1676882528079e.500" button='see more' brand={{}} category="home" />
      </div>
    </div>
  )
}

// <div className="page">
//         <p> This is the story about 4 guys who wanted to make a difference </p>
//       </div>

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: (state.user.email||'guest'),
    brands: state.brands
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
