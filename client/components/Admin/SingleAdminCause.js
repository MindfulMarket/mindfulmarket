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
        if (e.target.brand.value !== '') body.brand = e.target.brand.value
        if (e.target.product.value !== '') body.product = e.target.product.value
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

    // let services = this.props.services.map(service => {
    //     return (<option key={service.id} value={service.id}>{service.name}</option>)
    // }) 

    //set first element to empty string so that editItem dosent auto grab first item
    // services.push(<option key="" value="">None</option>)



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
       <p>Edit Name:</p> <input name="name" id="name" type="text"/> <br /> <br />
       <p>Edit Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />
       <p>Add/remove Brand:</p>  <select name="brand">{brands}</select> <br /> <br />
       <p>Add/remove Product:</p>  <select name="product">{products}</select> <br /> <br />

      
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
    products,
  }
}

const mapDispatch = dispatch => ({
  
});

export default connect(mapState, mapDispatch)(SingleAdminCause);