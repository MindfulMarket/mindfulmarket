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
        if (e.target.addProduct.value !== '') body.addProduct = e.target.addProduct.value
        if (e.target.removeProduct.value !== '') body.removeProduct = e.target.removeProduct.value
        if (e.target.cause.value !== '') body.causeId = e.target.cause.value
        if (e.target.description.value !== '') body.description = e.target.description.value

        axios.put(`/api/brands/${this.props.match.params.id}`, body)
           .then(data => console.log(data))
   }
  render() {


   let singleBrand = this.props.brands.filter(brand => brand.id === Number(this.props.match.params.id))[0]


   let brandProducts = this.props.products
   .filter(product => product.brandId === Number(this.props.match.params.id))
   .map(product => {
        return (<option key={product.id} value={product.id}>{product.name}</option>)
    })
    brandProducts.unshift(<option value=''>-</option>)


    let allProducts = this.props.products.map(product => {
      return (<option key={product.id} value={product.id}>{product.name}</option>)
    })
    allProducts.unshift(<option value=''>-</option>)

    let causes = this.props.causes.map(cause => {
      return (<option key={cause.id} value={cause.id}>{cause.name}</option>)
    })
    causes.unshift(<option value=''>-</option>)


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
       <p>Edit Name:</p> <input name="name" id="name" type="text" /> <br /> <br />
       <p>Edit Cause:</p>  <select name="cause">{causes}</select> <br /> <br />
       <p>Edit Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />
       <p>Remove Product:</p>  <select name="removeProduct">{brandProducts}</select> <br /> <br />
       <p>Add Product:</p>  <select name="addProduct">{allProducts}</select> <br /> <br />



       <button type="submit" >Change</button>
      </form>
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({   products, brands, causes }) => {
  return {
    products: products.all,
    brands,
    causes
  }
}

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(SingleAdminBrand);
