import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'
import AdminAddProduct from './AdminAddProduct'
import axios from 'axios'


/* -----------------    COMPONENT     ------------------ */
export class AdminOrders extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)

    return (
      <div>
        {!this.props.user.isAdmin
          ? <h1>Not Authorized</h1>
          :
          <div>
            <AdminNav />
            <h1>Orders</h1>
          </div>
        }
      </div>
    )


  }
}

const mapState = ({ orders, user }) => {
  return { orders, user }
}
export default connect(mapState)(AdminOrders)
