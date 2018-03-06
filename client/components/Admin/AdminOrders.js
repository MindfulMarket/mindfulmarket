import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'
import { deleteOrderThunk } from '../../store';


/* -----------------    COMPONENT     ------------------ */
export class AdminOrders extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    event.preventDefault();
    this.props.deleteOrder(id)
  }

  render() {
    console.log(this.props)
    return (
      <div className="page">
        {!this.props.user.isAdmin
          ? <h1>Not Authorized</h1>
          :
          <div>
            <AdminNav />
            <h1>Orders</h1>
            <table className="page" style={{ fontSize: '22px', marginBottom: '10px' }}>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Order Date</th>
                  <th>UserId</th>
                  <th>Details</th>
                  <th>Delete Order</th>
                </tr>
                {
                  !this.props.orders
                    ? <h1>There are no orders</h1>
                    :
                    this.props.orders.map(order => {
                      return (
                        <tr key={order.id}>
                          <th>{order.id}</th>
                          <th>{order.productsOrdered.length} items</th>
                          <th>{`$${order.totalPrice.toFixed(2)}`}</th>
                          <th>{order.createdAt.slice(0, 10)}</th>
                          <th>{order.userId}</th>
                          <th>
                          <Link to={`/admin/orders/${order.id}`}>
                            <button>Show</button></Link>
                            </th>
                          <th>
                            <button onClick={() => this.handleDelete(order.id)}>Delete Order</button>
                            </th>
                        </tr>
                      )
                    })
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    deleteOrder: (id) => dispatch(deleteOrderThunk(id))
  }
};

const mapState = ({ orders, user, users }) => {
  return { orders, user, users }
}
export default connect(mapState, mapDispatch)(AdminOrders)
