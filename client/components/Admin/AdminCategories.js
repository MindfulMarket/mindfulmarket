import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'
import { postCategory, deleteCategoryThunk } from '../../store';


/* -----------------    COMPONENT     ------------------ */
export class AdminCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      imageUrl: ''

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
    this.props.addCategory(this.state);
    this.setState({
      name: '',
      description: '',
      imageUrl: ''
    })
  }

  handleDelete(id) {
    event.preventDefault();
    this.props.deleteCategory(id)
  }

  render() {
    let categories;

    if (this.props.categories) {

      categories = this.props.categories.map(category => {
        return (
          <li key={category.id}>
            <Link to={`/admin/categories/${category.id}`}>{category.name} <button>Edit</button>
            </Link>
            <button onClick={() => this.handleDelete(category.id)}>delete </button>
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
              <h1>Categories</h1>
              <ul style={{ fontSize: '22px', marginBottom: '10px' }}>
                {
                  !categories
                  ? ''
                  : categories
                }
              </ul>
              <div>
                <hr />
                <h1>Add Category</h1>
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
    addCategory: newCategory => dispatch(postCategory(newCategory)),
    deleteCategory: id => dispatch(deleteCategoryThunk(id))
  }
}

const mapState = ({ categories, user, causes }) => {
  return { categories, user, causes }
}

export default connect(mapState, mapDispatch)(AdminCategories)

