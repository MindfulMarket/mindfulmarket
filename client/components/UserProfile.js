import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMe, getOrders, me } from '../store/user'
/* -----------------    COMPONENT     ------------------ */
let counter = 0;
class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
        frstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getUser()
    .then( ()=> this.props.getOrderHistory(this.props.user.id));
  }

  handleSubmit (evt) {
      evt.preventDefault()
      let id = this.props.user.id
      let firstName = evt.target.firstName.value || this.props.user.firstName;
      let lastName = evt.target.lastName.value || this.props.user.lastName;
      let email = evt.target.email.value || this.props.user.email;
      let password = evt.target.password.value || this.props.user.password;
      // console.log({id, firstName, lastName, email, password})
      this.props.updateMe({id, firstName, lastName, email, password})
      .then(() => this.props.history.push(`/profile`))
    }

    // handleSubmit (evt) {
    //   evt.preventDefault()
    //   let firstName = evt.target.firstName.value || this.state.user.firstName;
    //   let lastName = evt.target.lastName.value || this.state.user.lastName;
    //   let email = evt.target.email.value || this.state.user.email;
    //   let password = evt.target.password.value || this.state.user.password;
    //   dispatch(updateMe(firstName, lastName, email, password))
    // }

  render() {
    return (
      <div className="page">
      {
        !this.props.isLoggedIn ?
        (<h1>You are not logged in!</h1>)
          :
        (
          <div>
            <div><h1 id = "userName">{this.props.user.firstName} {this.props.user.lastName}</h1></div>
            <div className='profile'>
              <div className="editProfile" >
                <h2> Edit Profile </h2>
                <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column'}} name={name}>
                    <div>
                      <label htmlFor="firstName" style={{fontSize:'18px'}}>First Name</label>
                      <input name="firstName" placeholder={this.props.user.firstName} type="text" style={{width: '400px', height: '30px'}} />
                    </div>
                    <div>
                      <label htmlFor="lastName" style={{fontSize:'18px'}}>Last Name</label>
                      <input name="lastName" placeholder={this.props.user.lastName} type="text" style={{width: '400px', height: '30px'}}  />
                    </div>
                      <div>
                        <label htmlFor="email" style={{fontSize:'18px'}}>Email</label>
                        <input name="email" placeholder={this.props.user.email} type="text" style={{width: '400px', height: '30px'}} />
                      </div>
                      <div>
                        <label htmlFor="password" style={{fontSize:'18px'}}>Password</label>
                        <input name="password" type="password" style={{width: '400px', height: '30px'}}  />
                      </div>
                      <div>
                        <button type="submit">Submit</button>
                      </div>
                  </form>
              </div>
              <div className="orders" >
                <h1> Order History </h1>
                {
                  this.props.user.orders && this.props.user.orders.user.length && this.props.user.orders.user.map((order) => (
                    <div key={order.id} className="orderCard">

                        <h2> Order #{order.id} {order.createdAt.slice(5,7)+'/'+order.createdAt.slice(8,10)+'/'+order.createdAt.slice(0,)} </h2>
                        {order.productsOrdered.map((orderDetail) => (
                        <div key={counter++}>
                          <p style={{fontSize:'18px', marginRight:'10px'}}>Product: {orderDetail.product.name}          Quantity: {orderDetail.count} </p>
                        </div>
                      ))}
                      <h3> Total Price ${order.totalPrice} </h3>

                    </div>
                ))
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


const mapState = ({ products, product, brands, user}, ownProps) => {
  return { products, product, brands, user,
    isLoggedIn: !!user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateMe: (user) => dispatch(updateMe(user)),
    getUser: user => dispatch(me()),
    getOrderHistory: user => dispatch(getOrders(user)),
  }
}

export default connect(mapState, mapDispatch)(UserProfile);
