import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


/* -----------------    COMPONENT     ------------------ */

const AdminNav = () => {

    return (
        <div>
<<<<<<< HEAD
            <ul>
            <li><Link to="/admin/products">Products</Link></li>
            <li><Link to="/admin/brands">Brands</Link></li>
            <li><Link to="/admin/causes">Causes</Link></li>
            <li><Link to="/admin/categories">Categories</Link></li>
            <li><Link to="/admin/orders">Order</Link></li>
            <li><Link to="/admin/users">Usergit status]</Link></li>
=======
            <ul style={{fontSize: '22px', marginBottom: '10px'}} >
              <li><Link to="/admin/products">Products</Link></li>
              <li><Link to="/admin/brands">Brands</Link></li>
              <li><Link to="/admin/causes">Causes</Link></li>
              <li><Link to="/admin/categories">Categories</Link></li>
              <li><Link to="/admin/orders">Orders</Link></li>
              <li><Link to="/admin/users">Users</Link></li>
>>>>>>> 93f627e8d43c7eaffb4aa560a746447f513df1b5
            </ul>
        </div>
    )
}


const mapState = ({ user }) => {
  return { user }
}
export default connect(mapState)(AdminNav)
