import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */

class SingleAdminProduct extends Component {
    constructor(props){
        super(props)
        this.editItem = this.editItem.bind(this)
    }

 

    editItem(e){
        e.preventDefault()
        let body = {}
        if (e.target.name.value !== '') body.name = e.target.name.value
        if (e.target.cause.value !== '') body.cause = e.target.cause.value
        if (e.target.price.value !== '') body.price = e.target.price.value
        if (e.target.brand.value !== '') body.brandId = e.target.brand.value
        if (e.target.category.value !== '') body.category = e.target.category.value
        if (e.target.description.value !== '') body.description = e.target.description.value
     
        axios.put(`/api/products/${this.props.match.params.id}`, body)
           .then(data => console.log(data))
   }
  render() {

   
   let singleProduct = this.props.products.filter(product => product.id === Number(this.props.match.params.id))[0]
  
   let brands = this.props.brands.map(brand => {
        return (<option key={brand.id} value={brand.id}>{brand.name}</option>)
   }) 

   let causes = this.props.causes.map(cause => {
    return (<option key={cause.id} value={cause.id}>{cause.name}</option>)
    }) 


    return (
      <div>
          <h1>Single Product</h1>
      {
        (singleProduct === undefined)
        ? <h1>hi</h1>
        :
        <div>
        <h2>{singleProduct.name}</h2>
        <img width="300px" height="auto" src={singleProduct.imageUrl} />
        <p>Description: {singleProduct.description}</p>
        <p>Price: ${singleProduct.price}</p>
        </div>
      }

    <hr />
      <form onSubmit={this.editItem}>
       <p>Edit Name:</p> <input name="name" id="name" type="text"/> <br /> <br />
       <p>Edit Brand:</p>  <select name="brand">{brands}</select> <br /> <br />
       <p>Edit Cause:</p>  <select name="cause">{causes}</select> <br /> <br />
       <p>Edit Category:</p>  <input name="category" id="category" /> <br /> <br />
       <p>Edit Price:</p>  <input name="price" id="price" /> <br /> <br />
       <p>Edit Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />

       <button type="submit" >Change</button>
      </form>
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ products, brands, causes }) => {
  return {
    products,
    brands,
    causes
  }
}

const mapDispatch = dispatch => ({
  
});

export default connect(mapState, mapDispatch)(SingleAdminProduct);
