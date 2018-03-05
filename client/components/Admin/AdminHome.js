import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'


/* -----------------    COMPONENT     ------------------ */

export class AdminHome extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)

    return (
      <div>
      <AdminNav  id = "AdminNav" />
        {
          this.props.user.isAdmin
          ?
          <div>
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
