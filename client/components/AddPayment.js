// MyStoreCheckout.js
import React from 'react';
import {Elements} from 'react-stripe-elements';
import { sendPrice} from '../store/user'

import InjectedCheckoutForm from './PaymentForm';

class AddPayment extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm user={this.props.user} orderTotalPrice = {this.props.orderTotalPrice}  />
      </Elements>
    );
  }
}

export default AddPayment;