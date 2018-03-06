import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { editProductThunk, deleteProductThunk } from '../../store';

/* -----------------    COMPONENT     ------------------ */

class SingleAdminUser extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = Number(this.props.match.params.id)
    const productEdited = {};
    for (let field of event.target) {
      if (field.value) productEdited[field.name] = field.value
    }
    console.log(productEdited, 'product', id, 'id')
    this.props.editProduct(productEdited, id)
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteUser(Number(this.props.match.params.id))
    this.props.history.push('/admin/users')
  }

  render() {
    let user;

    if (this.props.user) {
      user = this.props.user;
    }

    return (
      <div>
        {!user
          ? ''
          :
          <div>
            {
              !user.isAdmin
                ? <h1>Not Authorized</h1>
                :
                <div>
                  <div className="page">
                    <Link to={'/admin/users'}><h1>Return to Users</h1></Link>
                    <h1>Edit: {user.firstName} {user.lastName} </h1>
                    <ul>
                      <li>User Name: {user.name}</li>


                    </ul>
                  </div>
                  <form className="page" onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input
                      name="name"
                      type="text"
                      defaultValue={user.firstName}
                      required
                    />
                    <br />
                    <label>Image Url: </label>
                    <input
                      name="imageUrl"
                      defaultValue={user.imageUrl}
                      type="text"
                      required
                    />
                    <br />
                    <label>Price: </label>
                    <input
                      name="price"
                      defaultValue={user.price}
                      type="number"
                      required
                    />
                    <br />
                    <label>Description: </label>
                    <textarea
                      name="description"
                      defaultValue={user.description}
                      cols="35"
                      rows="5"
                      required
                    />
                    <br />
                    <label>Cause: </label>
                    <select name="causeId">
                      {!productCause
                        ? <option>Choose one</option>
                        : <option value={productCause.id}>{productCause.name}</option>
                      }
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
                    <select name="brandId">
                      {!productBrand
                        ? <option>Choose one</option>
                        : <option value={productBrand.id}>{productBrand.name}</option>
                      }
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
                    <select name="categoryId">
                    {!productCategory
                      ? <option>Choose one</option>
                      : <option value={productCategory.id}>{productCategory.name}</option>
                    }
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
                    <button type="submit" >Edit {user.name}</button>
                  </form>
                  <div className="page">
                    <h3>{`Need to delete the ${user.name} product`}</h3>
                    <button
                      onClick={this.handleDelete}
                    >Delete {user.name}</button>
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
    editProduct: (changedProduct, id) => dispatch(editProductThunk(changedProduct, id)),
    deleteProduct: (id) => dispatch(deleteProductThunk(id))
  }
};
const mapState = ({ brands, products, causes, user, categories }, ownProps) => {
  return { product: products.all.find(product => user.id === Number(ownProps.match.params.id)), causes, user, brands, categories }
}

export default connect(mapState, mapDispatch)(SingleAdminUser);
