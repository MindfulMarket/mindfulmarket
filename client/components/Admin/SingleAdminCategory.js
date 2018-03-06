import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editCategoryThunk, deleteCategoryThunk } from '../../store';
import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class SingleAdminCategory extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = Number(this.props.match.params.id)
    const categoryEdited = {};
    for (let field of event.target) {
      if (field.value) categoryEdited[field.name] = field.value
    }
    this.props.editCategory(categoryEdited, id)
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteCategory(Number(this.props.match.params.id))
    this.props.history.push('/admin/categories')
  }

  render() {
    let category = this.props.category;
    return (
      <div>
        {
          !category
            ? ''
            :
            <div>
              {
                !this.props.user.isAdmin
                  ? <h1>Not Authorized</h1>
                  :
                  <div>
                    <div className="page">
                      <Link to={'/admin/categories'}><h1>Return to Categories</h1></Link>
                      <h1>Edit: {category.name} category</h1>
                      <ul>
                        <li>Category Name: {category.name}</li>
                        <li>Category Description: {category.description}</li>
                        <li>Image: <img src={category.imageUrl} /></li>
                        <li>Category ImageUrl: {category.imageUrl}</li>
                      </ul>
                    </div>
                    <form className="page" onSubmit={this.handleSubmit}>
                      <label>Name:</label>
                      <input
                        name="name"
                        type="text"
                        defaultValue={category.name}
                      />
                      <br />
                      <label>Description:</label>
                      <textarea
                        name="description"
                        cols="35"
                        rows="5"
                        defaultValue={category.description}
                      />
                      <br />
                      <br />
                      <label>Image Url:</label>
                      <input
                        name="imageUrl"
                        type="text"
                        defaultValue={category.imageUrl}
                      />
                      <br />
                      <br />
                      <button type="submit">Edit {category.name}</button>
                    </form>
                    <div className="page">
                      <h3>{`Need to delete the ${category.name} category`}</h3>
                      <button
                        onClick={this.handleDelete}
                      >Delete {category.name}</button>
                    </div>
                  </div>
              }
            </div>
        }
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatch = dispatch => {
  return {
    editCategory: (changedCategory, id) => dispatch(editCategoryThunk(changedCategory, id)),
    deleteCategory: (id) => dispatch(deleteCategoryThunk(id))
  }
};
const mapState = ({ categories, user }, ownProps) => {
  return { category: categories.find(category => category.id === Number(ownProps.match.params.id)), user }
}


export default connect(mapState, mapDispatch)(SingleAdminCategory);
