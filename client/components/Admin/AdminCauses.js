import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'
import AdminAddCause from './AdminAddCause'


/* -----------------    COMPONENT     ------------------ */
export class AdminCauses extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
      let causes = this.props.causes.map(cause => {
         return ( <li key={cause.id}><Link to={`/admin/causes/${cause.id}`}>{cause.name}</Link></li>)
      })
      causes.sort()
    return (
      <div>
      <AdminNav />
      <h1>Causes</h1>
        <ul>
            {
             causes
            }
        </ul>
        <hr />
        <AdminAddCause />
        </div>
    )
    
    
  }
}


const mapState = ({ causes }) => {
  return { causes }
}
export default connect(mapState)(AdminCauses)