import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'


/* -----------------    COMPONENT     ------------------ */

export class AdminHome extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="page">
        {
          this.props.user.isAdmin
            ?
            <div>
              <h1>Welcome Admin {`${this.props.user.firstName}!`}</h1>
              <AdminNav id="AdminNav" />
            </div>
            :
            'Not Authorized'
        }
      </div>
    )
  }
}


const mapState = ({ user }) => {
  return { user }
}
export default connect(mapState)(AdminHome)
