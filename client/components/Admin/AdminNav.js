import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


/* -----------------    COMPONENT     ------------------ */

export class AdminNav extends Component {
  constructor(props){
    super(props)
  }
  render() {


    return (
        <div>
            <ul>
            <li><Link to="/admin/products">Products</Link></li>
            <li><Link to="/admin/brands">Brands</Link></li>
            <li><Link to="/admin/causes">Causes</Link></li>
            <li><Link to="/admin/categories">Categories</Link></li>
            <li><Link to="/admin/orders">Order</Link></li>
            <li><Link to="/admin/users">Usergit status]</Link></li>
            </ul>
        </div>
    )
  }
}


const mapState = ({ user }) => {
  return { user }
}
export default connect(mapState)(AdminNav)
