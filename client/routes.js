import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Login, Signup, UserHome, AllBrands, AllProducts, ShoppingCart, SingleProduct, AllCauses, AllCategories, SingleBrand, SingleCause, SingleCategory, About } from './components'
import {me} from './store'
import {fetchAndSetCart} from './store/cart' //WHERE
import axios from 'axios' //wast throwing as error without import......WHY

/**
 * COMPONENT
 */
class Routes extends Component {

  componentDidMount(){
    this.props.loadInitialData()

    console.log('THE USER IS', this.props.initial.shoppingCart)
    console.log('APP STARTED')
   //this.props.fetchCart(this.props.initialCart)
    window.addEventListener("beforeunload", () =>{
    axios.put(`/api/users/${this.props.initial.id}`, {shoppingCart: this.props.cartContents})
  })
  }


  render () {
    const {isLoggedIn} = this.props
    return (

      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/" component={UserHome} />
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
        <Route  path="/categories/:id" component={SingleCategory} />

        {
          isLoggedIn &&
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route path="/home" component={UserHome} />
            </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
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
    initial: state.user|| [],
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    },
    //fetchCart: (cart) => dispatch(fetchAndSetCart(cart))


  }
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

