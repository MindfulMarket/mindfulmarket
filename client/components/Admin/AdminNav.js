import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


/* -----------------    COMPONENT     ------------------ */

const AdminNav = () => {

    return (
        <div>
            <ul style={{fontSize: '22px', marginBottom: '10px'}} >
              <li><Link to="/admin/products">Products</Link></li>
              <li><Link to="/admin/brands">Brands</Link></li>
              <li><Link to="/admin/causes">Causes</Link></li>
              <li><Link to="/admin/categories">Categories</Link></li>
              <li><Link to="/admin/orders">Orders</Link></li>
              <li><Link to="/admin/users">Users</Link></li>
            </ul>
        </div>
    )
}


const mapState = ({ user }) => {
  return { user }
}
export default connect(mapState)(AdminNav)
