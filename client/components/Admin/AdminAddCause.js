import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */

class AdminAddCause extends Component {
    constructor(props){
        super(props)
        this.addItem = this.addItem.bind(this)
    }

    addItem(e){
        e.preventDefault()
        let body = {}
        if (e.target.name.value !== '') body.name = e.target.name.value
        if (e.target.description.value !== '') body.description = e.target.description.value
        if (e.target.brand.value !== '') body.addBrand = e.target.brand.value
        if (e.target.product.value !== '') body.addProduct = e.target.product.value
        if (e.target.imageUrl.value !== '') body.imageUrl = e.target.imageUrl.value
        axios.post(`/api/causes/`, body)
           .then(data => console.log(data))
   }

  render() {
   let products = this.props.products.map(product => {
      return (<option key={product.id} value={product.id}>{product.name}</option>)
  }) 
  //set first element to empty string so that editItem dosent auto grab first item
  products.push(<option key="" value="">None</option>)

  let brands = this.props.brands.map(brand => {
      return (<option key={brand.id} value={brand.id}>{brand.name}</option>)
  }) 
  //set first element to empty string so that editItem dosent auto grab first item
  brands.push(<option key="" value="">None</option>)

    return (

      <div>
          <h1>Add cause</h1>
      <form onSubmit={this.addItem}>
      <p>Name:</p> <input name="name" id="name" type="text"/> <br /> <br />
      <p>Image:</p> <input name="imageUrl" id="imageUrl" type="text"/> <br /> <br />
      <p>Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />
      <p>Product:</p>  <select name="product" id="product">{products}</select> <br /> <br />
      <p>Brand:</p>  <select name="brand" id="bran">{brands}</select> <br /> <br />
        <button type="submit" >Add</button>
      </form>
      </div>
    )
  }
}


const mapState = ({ causes, brands, products, services }) => {
  return {
    causes,
    brands,
    products: products.all
  }
}

const mapDispatch = dispatch => ({
  
});

export default connect(mapState, mapDispatch)(AdminAddCause);

