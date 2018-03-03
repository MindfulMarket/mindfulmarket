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

  render () {
    return(
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}
}
const mapState = null
const mapDispatch = null


export default withRouter(connect(mapState, mapDispatch)(App));

