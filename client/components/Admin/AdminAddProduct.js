import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */

class AdminAddProduct extends Component {
    constructor(props){
        super(props)
        this.addItem = this.addItem.bind(this)
    }

    addItem(e){
        e.preventDefault()
        let body = {}
        console.log(e.target.name)
        if (e.target.name.value !== '') body.name = e.target.name.value
        if (e.target.description.value !== '') body.description = e.target.description.value
        if (e.target.brand.value !== '') body.brand = e.target.brand.value
        if (e.target.image.value !== '') body.imageUrl = e.target.image.value
        if (e.target.category.value !== '') body.categoryId = e.target.category.value
        if (e.target.price.value !== '') body.price = e.target.price.value
        console.log(body)
        axios.post(`/api/products/`, body)
           .then(data => console.log(data))
   }

  render() {


    let brands = this.props.brands.map(brand => {
       return (<option key={brand.id} value={brand.id}>{brand.name}</option>)
    }) 
    brands.unshift(<option value="remove">Remove Brand</option>)
    brands.unshift(<option value="">-</option>)

    let causes = this.props.causes.map(cause => {
      return (<option key={cause.id} value={cause.id}>{cause.name}</option>)
    }) 
    causes.unshift(<option value="remove">Remove Cause</option>)
    causes.unshift(<option value="">-</option>)

    let categories = this.props.categories.map(category => {
      return (<option key={category.id} value={category.id}>{category.name}</option>)
    }) 
    categories.unshift(<option value="remove">Remove Category</option>)
    categories.unshift(<option value="">-</option>)


    return (

      <div>
          <h1>Add Product</h1>
          <hr />
      <form onSubmit={this.addItem}>
        <p>Name:</p> <input name="name" id="name" type="text" /> <br /> <br />
        <p>Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />
        <p>Brand:</p>  <select name="brand">{brands}</select> <br /> <br />
        <p>Cause:</p>  <select name="cause">{causes}</select> <br /> <br />
        <p>Category:</p>  <select name="category">{categories}</select> <br /> <br />
        <p>Price:</p>  <input name="price" id="price" /> <br /> <br />
        <p>Edit Image:</p> <input name="image" id="image" type="text" /> <br /> <br />
        <button type="submit" >Add</button>
      </form>
      </div>
    )
  }
}

const mapState = ({ causes, brands, categories}) => {
  return {
    causes,
    brands,
    categories
  }
}
const mapDispatch = dispatch => ({
  
});
export default connect(mapState, mapDispatch)(AdminAddProduct);