import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */

export default class AdminAddCause extends Component {
    constructor(props){
        super(props)
        this.addItem = this.addItem.bind(this)
    }

    addItem(e){
        e.preventDefault()
        let body = {}
        if (e.target.name.value !== '') body.name = e.target.name.value
        if (e.target.description.value !== '') body.description = e.target.description.value
        if (e.target.brand.value !== '') body.brand = e.target.brand.value
        if (e.target.cause.value !== '') body.cause = e.target.cause.value
        axios.post(`/api/causes/${this.props.match.params.id}`, body)
           .then(data => console.log(data))
   }

  render() {

    return (

      <div>
          <h1>Add cause</h1>
      <form onSubmit={this.addItem}>
        <p>Name:</p> <input name="name" id="name" type="text" /> <br /> <br />
        <p>Description:</p> <textarea name="description" cols="35" rows="5" /> <br /> <br />
        <button type="submit" >Add</button>
      </form>
      </div>
    )
  }
}

