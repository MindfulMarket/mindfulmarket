import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Login, Signup, UserHome, AllBrands, AllProducts, ShoppingCart, SingleProduct, AllCauses, AllCategories, SingleBrand, SingleCause, Checkout, ThankYou, About, UserProfile, SingleCategory } from './components'

import { me } from './store'
// import { fetchAndSetCart } from './store/cart' //WHERE
import { fetchProducts } from './store/products'
import { fetchAllBrands } from './store/brands'

import { fetchAllCauses } from './store/causes';
import axios from 'axios' //wast throwing as error without import......WHY

/**
 * COMPONENT
 */
class Routes extends Component {

  componentDidMount() {
    this.props.loadInitialData()

   //this.props.fetchCart(this.props.initialCart)
    window.addEventListener('beforeunload', () => {
    axios.put(`/api/users/${this.props.initial.id}`, {shoppingCart: this.props.cartContents})
  })
  }


  render() {
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
        <Route path="/checkout" component={Checkout} />


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
      dispatch(fetchAllCauses())
      dispatch(fetchAllBrands())

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

