import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */

class SingleAdminBrand extends Component {
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
     
        axios.put(`/api/brands/${this.props.match.params.id}`, body)
           .then(data => console.log(data))
   }
  render() {

   
   let singleBrand = this.props.brands.filter(brand => brand.id === Number(this.props.match.params.id))[0]
  
   

   let products = this.props.products
   .filter(product => product.brandId === Number(this.props.match.params.id))
   .map(product => {
        return (<option key={product.id} value={product.id}>{product.name}</option>)
    }) 



    return (
      <div>
          <h1>Single Brand</h1>
      {
        (singleBrand === undefined)
        ? <h1>hi</h1>
        :
        <div>
        <h2>{singleBrand.name}</h2>
       
        <p>Description: {singleBrand.description}</p>
        <p>Price: ${singleBrand.price}</p>
        </div>
      }

    <hr />
      <form onSubmit={this.editItem}>
       <p>Edit Name:</p> <input name="name" id="name" type="text"/> <br /> <br />
       <p>Edit Category:</p>  <input name="category" id="category" /> <br /> <br />
       <p>Edit Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />
       <p>remove Product:</p>  <select name="product">{products}</select> <br /> <br />

       <button type="submit" >Change</button>
      </form>
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({   products, brands }) => {
  return {
    products,
    brands
  }
}

const mapDispatch = dispatch => ({
  
});

export default connect(mapState, mapDispatch)(SingleAdminBrand);
