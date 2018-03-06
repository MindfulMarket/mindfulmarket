import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editBrandThunk, deleteBrandThunk } from '../../store';
import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class SingleAdminBrand extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = Number(this.props.match.params.id)
    const brandEdited = {};
    for (let field of event.target) {
      if (field.value) brandEdited[field.name] = field.value
    }
    this.props.editBrand(brandEdited, id)
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteCategory(Number(this.props.match.params.id))
    this.props.history.push('/admin/brands')
  }

  render() {
    let brand, cause, currentCause;
    if (this.props.brand) {
      brand = this.props.brand

      if (this.props.causes) {
        cause = this.props.causes;
        currentCause = this.props.causes.find(singleCause => singleCause.id === brand.causeId)
      }
    }

    return (
      <div>
        {
          !brand
            ? ''
            :
            <div>
              {
                !this.props.user.isAdmin
                  ? <h1>Not Authorized</h1>
                  :
                  <div>
                    <div className="page">
                      <Link to={'/admin/brands'}><h1>Return to Brands</h1></Link>
                      <h1>Edit: {brand.name} Brand</h1>
                      <ul>
                        <li>Brand Name: {brand.name}</li>
                        <li>Brand Description: {brand.description}</li>
                        {
                          !currentCause
                          ? ''
                          : <li>Brand Cause: {currentCause.name}</li>
                        }
                        <li>Brand ImageUrl: {brand.imageUrl}</li>
                        <li>Image: <img src={brand.imageUrl} /></li>
                      </ul>
                    </div>
                    <form className="page" onSubmit={this.handleSubmit}>
                      <label>Name:</label>
                      <input
                        name="name"
                        type="text"
                        defaultValue={brand.name}
                      />
                      <br />
                      <label>Description:</label>
                      <textarea
                        name="description"
                        cols="35"
                        rows="5"
                        defaultValue={brand.description}
                      />
                      <br />
                      <br />
                      <label>Image Url:</label>
                      <input
                        name="imageUrl"
                        type="text"
                        defaultValue={brand.imageUrl}
                      />
                      <br />
                      <label>Cause: </label>
                      <select name="causeId" onChange={this.handleChange}>
                      {!currentCause
                        ? <option>Choose one</option>
                        : <option value={currentCause.id}>{currentCause.name}</option>
                      }
                        {
                          !cause
                          ? ''
                          : this.props.causes.map(oneCause => {
                            return (
                              <option key={oneCause.id} value={oneCause.id}>{oneCause.name}</option>
                            )
                          })
                        }
                      </select>
                      <br />
                      <button type="submit">Edit {brand.name}</button>
                    </form>
                    <div className="page">
                      <h3>{`Need to delete the ${brand.name} brand`}</h3>
                      <button
                        onClick={this.handleDelete}
                      >Delete {brand.name}</button>
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
    editBrand: (changedBrand, id) => dispatch(editBrandThunk(changedBrand, id)),
    deleteBrand: (id) => dispatch(deleteBrandThunk(id))
  }
};
const mapState = ({ brands, causes, user }, ownProps) => {
  return { brand: brands.find(brand => brand.id === Number(ownProps.match.params.id)), causes, user }
}

export default connect(mapState, mapDispatch)(SingleAdminBrand);
