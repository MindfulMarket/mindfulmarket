// CheckoutForm.js
import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection';
import axios from 'axios'

class PayementForm extends React.Component {
  
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    this.props.history.push('/thankyou/ordered')
   
    //clear the frontend cart on logout
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: this.props.user}).then(({token}) => {
        axios.post(`/payment`, {token: token.id, amount: parseInt(this.props.orderTotalPrice) }) 
    })
    .catch((err) => { 
        console.log(err)
    });

  

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }
  render() {
     
    return (
      <form onSubmit={this.handleSubmit} style={{width: '600px', backgroundColor: 'white', borderRadius: '10px'}}>
        <CardSection style={{base: {fontSize: '18px'}}} />
        <button>Pay</button>
      </form>
    );
  }
}


export default injectStripe(PayementForm);