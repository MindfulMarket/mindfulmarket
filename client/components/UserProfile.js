import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import {getOrders} from '../store/user'
import { fetchAllBrands } from '../store/brands'
import AddPayment from './AddPayment'
=======
import { updateMe, getOrders, getUser } from '../store/user'
>>>>>>> 93f627e8d43c7eaffb4aa560a746447f513df1b5
/* -----------------    COMPONENT     ------------------ */
let counter = 0;
class UserProfile extends Component {
  constructor(props){
    super(props)


  }

  constructor() {
    super();
    this.state = {
      showEdit: false,
      showOrderHistory: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.getUser()
    // .then( ()=> this.props.getOrderHistory(this.props.user.id));
  }

  handleSubmit (evt) {
      evt.preventDefault()
      let id = this.props.user.id
      let firstName = evt.target.firstName.value || this.props.user.firstName;
      let lastName = evt.target.lastName.value || this.props.user.lastName;
      let email = evt.target.email.value || this.props.user.email;
      let password = evt.target.password.value || this.props.user.password;
      let shippingAddress = evt.target.shippingAddress.value || this.props.user.shippingAddress;
      // console.log({id, firstName, lastName, email, password})
      this.props.updateMe({id, firstName, lastName, email, password, shippingAddress})
      .then(() => this.props.history.push(`/profile`))
    }


  render() {
    return (
      <div className="page" >
      {
        !this.props.isLoggedIn ?
        (<h1>You are not logged in!</h1>)
          :
        (
          <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'spaceBetween'}}>
            <div ><h1 id = "userName">{this.props.user.firstName} {this.props.user.lastName}</h1></div>
            <div className="profile">


              <div className="editProfile">
              <button onClick={() => { this.setState({ showEdit: !this.state.showEdit }) }}>EditProfile</button>
              { this.state.showEdit &&
                <div>
                  <h2> Edit Profile </h2>
                  <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}} name={name}>
                      <div>
                        <label htmlFor="firstName" style={{fontSize: '18px'}}>First Name</label>
                        <input name="firstName" placeholder={this.props.user.firstName} type="text" style={{width: '400px', height: '30px'}} />
                      </div>
                      <div>
                        <label htmlFor="lastName" style={{fontSize: '18px'}}>Last Name</label>
                        <input name="lastName" placeholder={this.props.user.lastName} type="text" style={{width: '400px', height: '30px'}}  />
                      </div>
                        <div>
                          <label htmlFor="email" style={{fontSize: '18px'}}>Email</label>
                          <input name="email" placeholder={this.props.user.email} type="text" style={{width: '400px', height: '30px'}} />
                        </div>
                        <div>
                          <label htmlFor="password" style={{fontSize: '18px'}}>Password</label>
                          <input name="password" type="password" style={{width: '400px', height: '30px'}}  />
                        </div>
                        <div>
                          <label htmlFor="shippingAddress" style={{fontSize: '18px'}}>Shipping Address</label>
                          <input name="shippingAddress" type="text" style={{width: '400px', height: '30px'}}  />
                        </div>
                        <div>
                          <button type="submit">Submit</button>
                        </div>
                    </form>
                  </div>
                }
              </div>
              <div className="orders" >
                <button onClick={() => { this.setState({ showOrderHistory: !this.state.showOrderHistory }) }}>Order History</button>
                { this.state.showOrderHistory &&
                <div>
                  <h1> Order History </h1>
                    { this.props.user.orders && this.props.user.orders.user.length ? this.props.user.orders.user.map((order) => (
                      <div key={order.id} className="orderCard">

                          <h2> Order #{order.id} Date: {order.createdAt.slice(5, 7) + '/' + order.createdAt.slice(8, 10) + '/' + order.createdAt.slice(0, 4)} </h2>
                          {order.productsOrdered.map((orderDetail) => (
                          <div key={counter++}>
                            <p style={{fontSize: '18px', marginRight: '10px'}}>Product:   {orderDetail.product.name} <br />Price:    {orderDetail.product.price}  <br /> Quantity:    {orderDetail.count}<br /> </p>
                          </div>
                        ))}
                        <h3> Total Price ${order.totalPrice} </h3>

                      </div>
                  ))
                : " "}
                </div>
                }
              </div>
          </div>
        </div>
          )
        }
      </div>

    )
  }
}


const mapState = ({ products, product, brands, user}) => {
  return { products, product, brands, user,
    isLoggedIn: !!user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateMe: (user) => dispatch(updateMe(user)),
    getOrderHistory: user => dispatch(getOrders(user)),
    getUserInfo: user => dispatch(getUser(user)),
  }
}

export default connect(mapState, mapDispatch)(UserProfile);
