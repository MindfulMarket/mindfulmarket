import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCauses } from '../store/causes'

/* -----------------    COMPONENT     ------------------ */
class ThankYou extends Component {

  render() {
    return (
      <div id = "thanksContainer">
      <h1>Thank you for {this.props.match.params.action === 'ordered' ? 'your order' : 'signing up'} {this.props.userName}!</h1>
      </div>
    )
  }
}

const mapState = ({ user}) => {
  return { userName: user.firstName }
}

const mapDispatch = dispatch => ({
  fetchCauseData: () => dispatch(fetchAllCauses())
});

export default connect(mapState, mapDispatch)(ThankYou);

  /* -----------------    CONTAINER     ------------------ */

  // const mapState = ;

  // const mapDispatch = ;

  // export default connect(mapState, mapDispatch)(SingleBrand);
