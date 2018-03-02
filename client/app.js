import React, {Component} from 'react'
import {fetchAndSetCart} from './store/cart' //WHERE
import { Navbar } from './components'
import Routes from './routes'
import axios from 'axios'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
  }

  // componentWillUnmount(){
  //   //axios.put('/api/users/')
  //   console.log('APP EXITED')
   //axios.put('/api/users/2', {shoppingCart:[{hellow:'world'}]})
  //   axios.get('/api/brands')
  // }

  // componentDidMount(){
  //   console.log('THE USER IS', this.props.initialCart)
  //   console.log('APP STARTED')
  //   this.props.fetchCart(this.props.initialCart)
  //   window.addEventListener("beforeunload", () => {axios.put(`/api/users/${2}`, {shoppingCart: this.props.cartContents})
  // })
  // }

  render () {
    return(
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}
}
const mapState = (state) => ({
  cartContents: state.cart,
  initialCart: state || []

})
const mapDispatch = (dispatch) => ({
  fetchCart: (cart) => dispatch(fetchAndSetCart(cart))
})


export default withRouter(connect(mapState, mapDispatch)(App));

