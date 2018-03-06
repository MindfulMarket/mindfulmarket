import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'
import { postProduct, deleteProductThunk } from '../../store';


/* -----------------    COMPONENT     ------------------ */
export class AdminProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      price: 0,
      description: '',
      brandId: 0,
      categoryId: 0,
      causeId: 0
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
    this.props.addProduct(this.state);
    this.setState({
      name: '',
      imageUrl: '',
      price: 0,
      description: '',
      brandId: 0,
      categoryId: 0,
      causeId: 0
    })
  }

  handleDelete(id) {
    event.preventDefault();
    this.props.deleteProduct(id)
  }

  render() {
    let products;

    if (this.props.products) {
      products = this.props.products.map(product => {
        return (
          <li key={product.id}>
            <Link to={`/admin/products/${product.id}`} style={{color: 'black'}}>{product.name} <button>Edit</button>
            </Link>
            <button onClick={() => this.handleDelete(product.id)}>delete</button>
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
              <h1>Products</h1>
              <ul style={{ fontSize: '22px', marginBottom: '10px' }}>
                {
                  !products
                    ? ''
                    : products
                }
              </ul>
              <hr />
              <div>
                <h1>Add Product</h1>
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
                  <label>Image Url: </label>
                  <input
                    name="imageUrl"
                    value={this.state.imageUrl}
                    type="text"
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Price: </label>
                  <input
                    name="price"
                    value={this.state.price}
                    type="number"
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
                  <label>Brand: </label>
                  <select name="brandId" onChange={this.handleChange}>
                    <option defaultValue="Choose one">Choose one</option>
                    {
                      !this.props.brands
                        ? ''
                        : this.props.brands.map(brand => {
                          return (
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                          )
                        })
                    }
                  </select>
                  <br />
                  <label>Category: </label>
                  <select name="categoryId" onChange={this.handleChange}>
                    <option defaultValue="Choose one">Choose one</option>
                    {
                      !this.props.categories
                        ? ''
                        : this.props.categories.map(category => {
                          return (
                            <option key={category.id} value={category.id}>{category.name}</option>
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
    addProduct: newProduct => dispatch(postProduct(newProduct)),
    deleteProduct: id => dispatch(deleteProductThunk(id))
  }
}

const mapState = ({ products, user, causes, brands, categories }) => {
  return { products: products.all, user, causes, brands, categories }
}
export default connect(mapState, mapDispatch)(AdminProducts)

