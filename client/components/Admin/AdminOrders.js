import React, { Component } from 'react';
import { connect } from 'react-redux'
// import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'
import AdminAddProduct from './AdminAddProduct'
import axios from 'axios'


/* -----------------    COMPONENT     ------------------ */
export class AdminOrders extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)

    return (
      <div>
      <h1>Orders</h1>

        </div>
    )


  }
}

const mapState = ({ orders }) => {
  return { orders: ''}
}
export default connect(mapState)(AdminOrders)

// <AdminNav />
