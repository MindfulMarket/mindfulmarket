import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import { me } from './store'
import { fetchProducts } from './store/products'
import { fetchAllCauses } from './store/causes';
import { fetchAllCategories } from './store/categories';
import {fetchAndSetCart} from './store/cart' //WHERE
import { Navbar, Footer } from './components'
import Routes from './routes'


class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.loadInitialData()
  }

  render () {
    return(
    <div>
      <Navbar component={this.props} />
      <Routes />
      <Footer component={this.props} />
    </div>
  )
}
}
// const mapState = null
// const mapDispatch = null

const mapState = (state) => {
  return {
    cartContents: state.cart,
    initial: state.user || [],
    isLoggedIn: !!state.user.id,
    causes: state.causes || [],
    products: state.products || [],
    categories: state.categories || [],
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => {
      dispatch(me())
      dispatch(fetchProducts())
      dispatch(fetchAllCauses())
      dispatch(fetchAllCategories())

    }
  }
    //fetchCart: (cart) => dispatch(fetchAndSetCart(cart))
}

export default withRouter(connect(mapState, mapDispatch)(App));

