import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */

class AdminAddBrand extends Component {
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
        if (e.target.image.value !== '') body.imageUrl = e.target.image.value
        console.log(body)
        axios.post(`/api/brands/`, body)
           .then(data => console.log(data))
        }

  render() {


    let causes = this.props.causes.map(cause => {
      return (<option key={cause.id} value={cause.id}>{cause.name}</option>)
    }) 
    causes.unshift(<option value="remove">Remove Cause</option>)
    causes.unshift(<option value="">-</option>)


    return (

      <div>
          <h1>Add Brand</h1>
          <hr />
      <form onSubmit={this.addItem}>
        <p>Name:</p> <input name="name" id="name" type="text" /> <br /> <br />
        <p>Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />
        <p>Cause:</p>  <select name="cause">{causes}</select> <br /> <br />
        <p>Image:</p> <input name="image" id="image" type="text" /> <br /> <br />
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
export default connect(mapState, mapDispatch)(AdminAddBrand);