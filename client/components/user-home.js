import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from './index'
/**
 * COMPONENT
 */
export const UserHome = (props) => {
    const { email } = props
    return ( <
        div className = "page" >
        <
        h3 > Welcome, { email } < /h3> <
        div className = "carousel" >
        <
        h1 > BRUCE RECOMMENDS....BECAUSE THEY GIVE 10 % OF THEIR CAUSES < /h1> <
        /div> <
        div style = {
            { display: 'flex', flexDirection: 'row' } } >
        <
        Card style = {
            { display: 'flex', flex: 1, width: '400' } }
        name = "$10 or less"
        imageUrl = "https://comps.canstockphoto.com/cheap-grunge-red-round-stamp-drawings_csp16503597.jpg"
        button = "Explore"
        brand = {
            {} }
        category = "home" / >
        <
        Card style = {
            { display: 'flex', flex: 1 } }
        name = "Sping Cleaning Items"
        imageUrl = "http://www.sustainablebabysteps.com/images/xspring-cleaning-tips.jpg.pagespeed.ic.09GQFP7PeA.jpg"
        button = "Explore"
        brand = {
            {} }
        category = "home" / >
        <
        Card style = {
            { flex: 1 } }
        name = "Helping Homelessness"
        imageUrl = "https://madride.net/wp-content/uploads/2016/11/1673225-inline-750-homeless3-480x270.jpg"
        button = "Explore"
        brand = {
            {} }
        category = "home" / >
        <
        Card style = {
            { flex: 1 } }
        name = "Top Shirts That Help The Environment"
        imageUrl = "https://jetimages.jetcdn.net/md5/540b1ee11353bf3a8d1676882528079e.500"
        button = "Explore"
        brand = {
            {} }
        category = "home" / >
        <
        /div> <
        div >
        Here we Display <
        /div> <
        /div>
    )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        email: state.user.email,
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