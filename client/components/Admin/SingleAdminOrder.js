import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteOrderThunk } from '../../store';
import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class SingleAdminOrder extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = Number(this.props.match.params.id)
    const orderEdited = {};
    for (let field of event.target) {
      if (field.value) orderEdited[field.name] = field.value
    }
    this.props.editOrder(orderEdited, id)
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteOrder(Number(this.props.match.params.id))
    this.props.history.push('/admin/orders')
  }

  render() {
    let orders, orderedProducts;
    if (this.props.order) {
      orders = this.props.order
      orderedProducts = this.props.order.productsOrdered
    }
    return (
      <div>
      {
        !orders
          ? ''
          :
          <div>
            {
              !this.props.user.isAdmin
                ? <h1>Not Authorized</h1>
                :
                <div>
                  <div className="page">
                    <Link to={'/admin/orders'}><h1>Return to Orders</h1></Link>
                    <h1>Current Order: #{orders.id}</h1>
                    <table className="page" style={{ fontSize: '22px', marginBottom: '10px' }}>
                      <tbody>
                        <tr>
                          <th>Product ID: </th>
                          <th>Name: </th>
                          <th>Price: </th>
                        </tr>
                        { !orderedProducts
                          ? <h1>NOTHING TO SHOEW</h1>
                          :
                          orderedProducts.map(product => {
                            return (
                              <tr key={product.product.id}>
                              <th>{product.product.id}</th>
                              <th>{product.product.name}</th>
                              <th>{`$${product.product.price}`}</th>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                    <div className="page">
                      <h3>Need to delete this order?</h3>
                      <button
                        onClick={this.handleDelete}
                      >Delete</button>
                    </div>
                  </div>
                </div>
            }
          </div>
      }
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatch = dispatch => {
  return {
    deleteOrder: (id) => dispatch(deleteOrderThunk(id))
  }
};
const mapState = ({ orders, users, user }, ownProps) => {
  return { order: orders.find(order => order.id === Number(ownProps.match.params.id)), users, user }
}

export default connect(mapState, mapDispatch)(SingleAdminOrder);
