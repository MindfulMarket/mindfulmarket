import React from 'react'
import { connect } from 'react-redux'
import { Navbar } from './components'
import Routes from './routes'


const App = (props) => {
  console.log(props)
  return (
    <div>
     <Navbar /> 
     <Routes />
    </div>
  )
}


const mapState = ({ user }) => {
  return { user }
}
export default connect(mapState)(App)
