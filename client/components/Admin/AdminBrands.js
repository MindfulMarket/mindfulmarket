import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'


/* -----------------    COMPONENT     ------------------ */
export class AdminBrands extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
      let brands = this.props.brands.map(brand =>{
         return ( <li key={brand.id}><Link to={`/admin/brands/${brand.id}`}>{brand.name}</Link></li>)
      })
      brands.sort()
    return (
      <div>
      <AdminNav />
      <h1>brands</h1>
        <ul>
            {
             brands
            }
        </ul>
        </div>
    )
    
    
  }
}


const mapState = ({ brands }) => {
  return { brands }
}
export default connect(mapState)(AdminBrands)