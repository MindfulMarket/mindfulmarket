import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'
import AdminAddProduct from './AdminAddProduct'


/* -----------------    COMPONENT     ------------------ */
export class AdminProducts extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
      let products = this.props.products.map(product =>{
         return ( <li key={product.id}><Link to={`/admin/products/${product.id}`}>{product.name}</Link></li>)
      })
      products.sort()
    return (
      <div>
      <AdminNav />
      <h1>Products</h1>
        <ul>
            {
             products
            }
        </ul>
        <AdminAddProduct />
        <hr />

        </div>
    )
    
    
  }
}

const mapState = ({ products }) => {
  return { products }
}
export default connect(mapState)(AdminProducts)