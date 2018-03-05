import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'
import AdminAddProduct from './AdminAddProduct'
import axios from 'axios'


/* -----------------    COMPONENT     ------------------ */
export class AdminProducts extends Component {
  constructor(props){
    super(props)
  }

  deleteItem(e){
    e.preventDefault()
    if (e.target.product.value !== ''){ 
      axios.delete(`/api/products/${e.target.product.value}`)
      .then(data => console.log(data))
    }
  }
  
  render() {
    console.log(this.props)
      let products = this.props.products.map(product =>{
         return ( <li key={product.id}><Link to={`/admin/products/${product.id}`}>{product.name}</Link></li>)
      })
      let productsSelect = this.props.products.map(product => {
        return (<option key={product.id} value={product.id}>{product.name}</option>)
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
        <AdminAddProduct id={this.props.match.params.id}/>
        <hr />
        <form onSubmit={this.deleteItem}>
        <h1>Delete a product</h1>
        <p>Products:</p>  <select name="product">{productsSelect}</select> <br /> <br />
       
        <button type="submit" >Delete</button>
      </form>


        </div>
    )
    
    
  }
}

const mapState = ({ products }) => {
  return { products: products.all }
}
export default connect(mapState)(AdminProducts)