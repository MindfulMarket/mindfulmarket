import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AdminBrands, SingleAdminBrand, SingleAdminCause, AdminCauses, AdminCategories, SingleAdminCategory, SingleAdminProduct, AdminProducts, AdminOrders, AdminHome, Login, Signup, UserHome, AllBrands, AllProducts, ShoppingCart, SingleProduct, AllCauses, AllCategories, SingleBrand, SingleCause, Checkout, ThankYou, About, UserProfile, SingleCategory, SingleAdminOrder } from './components'
import {me, fetchProducts, fetchAllBrands, fetchAllCauses, fetchAllCategories, fetchAllOrders} from './store'

// import { fetchAndSetCart } from './store/cart' //WHERE

import axios from 'axios' //wast throwing as error without import......WHY

/**
 * COMPONENT
 */
class Routes extends Component {

  componentDidMount() {
    this.props.loadInitialData()

    window.addEventListener('beforeunload', () => {
    axios.put(`/api/users/${this.props.initial.id}`, {shoppingCart: this.props.cartContents})
  })
  }


  render() {
    const { isLoggedIn } = this.props
    return (

      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={UserHome} />

        <Route exact path="/cart" component={ShoppingCart} />
        <Route path="/thankyou/:action" component={ThankYou} />
        <Route path="/profile" component={UserProfile} />
       {/* <Route exact path="/" component={UserHome} />*/}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/brands" component={AllBrands} />
        <Route path="/brands/:id" component={SingleBrand} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/causes" component={AllCauses} />
        <Route path="/causes/:id" component={SingleCause} />
        <Route exact path="/categories" component={AllCategories} />
        <Route path="/products" component={SingleProduct} />
        <Route path="/brands/:id" component={SingleBrand} />

        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/orders" component={AdminOrders} />
        <Route exact path="/admin/orders/:id" component={SingleAdminOrder} />

        <Route exact path="/admin/products" component={AdminProducts} />
        <Route path="/admin/products/:id" component={SingleAdminProduct} />

        <Route exact path="/admin/causes" component={AdminCauses} />
        <Route path="/admin/causes/:id" component={SingleAdminCause} />

        <Route exact path="/admin/categories" component={AdminCategories} />
        <Route path="/admin/categories/:id" component={SingleAdminCategory} />

        <Route exact path="/admin/brands" component={AdminBrands} />
        <Route path="/admin/brands/:id" component={SingleAdminBrand} />
        <Route path="/checkout" component={Checkout} />

        {
          isLoggedIn &&
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />


        <Route path="/categories/:id" component={SingleCategory} />

      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    cartContents: state.cart,
    initial: state.user || [],
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => {
      dispatch(me())
      dispatch(fetchProducts())
      dispatch(fetchAllBrands())
      dispatch(fetchAllCauses())
      dispatch(fetchAllCategories())
      dispatch(fetchAllOrders())
    }
  }
    //fetchCart: (cart) => dispatch(fetchAndSetCart(cart))
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
