import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCauses } from '../store/causes'
import AddPayment from './AddPayment'

/* -----------------    COMPONENT     ------------------ */
class Payment extends Component {

  render() {
    console.log(this.props.totalOrderPrice)
  

    return (
      <div id = "thanksContainer">
        <AddPayment orderTotalPrice ={this.props.totalOrderPrice} user={this.props.userName} />
      </div>
    )
  }
}

const mapState = ({ user,order}) => {
  return {
     userName: user.firstName ,
     order,
     totalOrderPrice: user.orderPriceTotal
     
    }
}

const mapDispatch = dispatch => ({
  fetchCauseData: () => dispatch(fetchAllCauses())
});

export default connect(mapState, mapDispatch)(Payment);

  /* -----------------    CONTAINER     ------------------ */

  // const mapState = ;

  // const mapDispatch = ;

  // export default connect(mapState, mapDispatch)(SingleBrand);
