import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'
import { postBrand, deleteBrandThunk } from '../../store';

/* -----------------    COMPONENT     ------------------ */
export class AdminBrands extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      imageUrl: '',
      causeId: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBrand(this.state);
    this.setState({
      name: '',
      description: '',
      imageUrl: '',
      causeId: ''
    })
  }

  handleDelete(id) {
    event.preventDefault();
    this.props.deleteBrand(id)
  }

  render() {
    let brands;

    if (this.props.brands) {

      brands = this.props.brands.map(brand => {
        return (
          <li key={brand.id}>
            <Link to={`/admin/brands/${brand.id}`}>{brand.name} <button>Edit</button>
            </Link>
            <button onClick={() => this.handleDelete(brand.id)}>delete </button>
          </li>
        )
      })
    }

    return (
      <div className="page">
        {
          !this.props.user.isAdmin
            ? <h1>Not Authorized</h1>
            :
            <div>
              <AdminNav />
              <h1>Brands</h1>
              <ul style={{ fontSize: '22px', marginBottom: '10px' }}>
                {
                  brands
                }
              </ul>
              <div>
                <hr />
                <h1>Add Brand</h1>
                <br />
                <form className="page" onSubmit={this.handleSubmit}>
                  <label>Name: </label>
                  <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Description: </label>
                  <textarea
                    name="description"
                    value={this.state.description}
                    cols="35"
                    rows="5"
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Image Url: </label>
                  <input
                    name="imageUrl"
                    value={this.state.imageUrl}
                    type="text"
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Cause: </label>
                  <select name="causeId" onChange={this.handleChange}>
                  <option defaultValue="Choose one">Choose one</option>
                    {
                      !this.props.causes
                      ? ''
                      : this.props.causes.map(cause => {
                        return (
                          <option key={cause.id} value={cause.id}>{cause.name}</option>
                        )
                      })
                    }
                  </select>
                  <br />
                  <br />
                  <button type="submit" >Add</button>
                </form>
              </div>
            </div>
        }
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addBrand: newBrand => dispatch(postBrand(newBrand)),
    deleteBrand: id => dispatch(deleteBrandThunk(id))
  }
}

const mapState = ({ brands, causes, user }) => {
  return { brands, causes, user }
}

export default connect(mapState, mapDispatch)(AdminBrands)
