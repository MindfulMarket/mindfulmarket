import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */

class SingleAdminCause extends Component {
    constructor(props){
        super(props)
        this.editItem = this.editItem.bind(this)
    }
 

    editItem(e){
        e.preventDefault()
        let body = {}
        if (e.target.name.value !== '') body.name = e.target.name.value
        if (e.target.description.value !== '') body.description = e.target.description.value
        if (e.target.addBrand.value !== '') body.addBrand = e.target.addBrand.value
        if (e.target.removeBrand.value !== '') body.removeBrand = e.target.removeBrand.value
        if (e.target.addProduct.value !== '') body.addProduct = e.target.addProduct.value
        if (e.target.removeProduct.value !== '') body.removeProduct = e.target.removeProduct.value

        console.log(body)
       
        axios.put(`/api/causes/${this.props.match.params.id}`, body)
           .then(data => console.log(data))
   }
  render() {

   
   let singleCause = this.props.causes.filter(cause => cause.id === Number(this.props.match.params.id))[0]

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

    let causeBrands = this.props.brands
    .filter(brand => brand.causeId === Number(this.props.match.params.id))
    .map(brand => {
         return (<option key={brand.id} value={brand.id}>{brand.name}</option>)
     }) 
     causeBrands.unshift(<option value=''>-</option>)

     let causeProducts = this.props.products
     .filter(product => product.causeId === Number(this.props.match.params.id))
     .map(product => {
          return (<option key={product.id} value={product.id}>{product.name}</option>)
      }) 
      causeProducts.unshift(<option value=''>-</option>)


    return (

      <div>
          <h1>Single Cause</h1>
          <hr />
      {
            (singleCause === undefined)
            ? <h1>""</h1>
            :
        <div>
        <h2>{singleCause.name}</h2>
            <p>Description: {singleCause.description}</p>
        </div>
      }

    <hr />
      <form onSubmit={this.editItem}>
       <p>Edit Name:</p> <input name="name" id="name" type="text" /> <br /> <br />
       <p>Edit Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />
       <p>Remove Product:</p>  <select name="removeProduct">{causeProducts}</select> <br /> <br />
       <p>Add Product:</p>  <select name="addProduct">{products}</select> <br /> <br />
       <p>Remove Brand:</p>  <select name="removeBrand">{causeBrands}</select> <br /> <br />
       <p>Add Brand:</p>  <select name="addBrand">{brands}</select> <br /> <br />

      
       <button type="submit" >Change</button>
      </form>
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ causes, brands, products, services }) => {
  return {
    causes,
    brands,
    products: products.all
  }
}

const mapDispatch = dispatch => ({
  
});

export default connect(mapState, mapDispatch)(SingleAdminCause);