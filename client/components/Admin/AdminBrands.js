import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'
import AdminAddBrand from './AdminAddBrand'
import axios from 'axios'


/* -----------------    COMPONENT     ------------------ */
export class AdminBrands extends Component {
  constructor(props){
    super(props)
  }

  deleteItem(e){
    e.preventDefault()
    if (e.target.brand.value !== ''){
      axios.delete(`/api/brands/${e.target.brand.value}`)
      .then(data => console.log(data))
    }
  }
  render() {
    console.log(this.props)
      let brands = this.props.brands.map(brand => {
         return ( <li key={brand.id}><Link to={`/admin/brands/${brand.id}`}>{brand.name}</Link></li>)
      })
      let brandsSelect = this.props.brands.map(brand => {
        return (<option key={brand.id} value={brand.id}>{brand.name}</option>)
    })
      brands.sort()
    return (
      <div>
      <AdminNav className="page" />
      <h1>brands</h1>
      <ul>
      {
        brands
      }
      </ul>
      <AdminAddBrand />
      <hr />
      <form onSubmit={this.deleteItem}>
      <h1>Delete a product</h1>
      <p>Brands:</p>  <select name="brand">{brandsSelect}</select> <br /> <br />

      <button type="submit" >Delete</button>
      </form>
      </div>

    )


  }
}

const mapState = ({ brands }) => {
  return { brands }
}
export default connect(mapState)(AdminBrands)
