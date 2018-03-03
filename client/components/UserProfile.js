import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {getOrders} from '../store/user'
/* -----------------    COMPONENT     ------------------ */
let orders = [];

class UserProfile extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    //this.props.getUserOrders(this.props.user.id)
  }

  render() {
    //console.log('PROPS INSIDE ALL PROFILE',this.props)
    return (
      <div className="profile-container">
      {
        this.props.isLoggedIn ?

        (
          <div>
            <h1 id = "userName">{this.props.user.firstName}</h1>
        {
           this.props.user.orders.map((order)=>{
          return(
            <div className = 'orderDiv'>
            {order.productsOrdered.map((product)=><div>{product.product.name}</div>)}
            </div>
          )
      })}
    </div>
  ):
  (<h1>You are not currently logged in!</h1>)

  }
      </div>

    )
  }
}


const mapState = ({ products, product, brands ,user}) => {
  return { products, product, brands , user,
    isLoggedIn: !!user.id,

  }
}

const mapDispatch = dispatch => ({
  fetchBrandData: () => dispatch(fetchAllBrands()),
  // getUserOrders:(id)=>dispatch(getOrders(id))
});

export default connect(mapState, mapDispatch)(UserProfile);
