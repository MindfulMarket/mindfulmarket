import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { editProductThunk, deleteProductThunk } from '../../store';

/* -----------------    COMPONENT     ------------------ */

class SingleAdminProduct extends Component {
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
    this.props.deleteProduct(Number(this.props.match.params.id))
    this.props.history.push('/admin/products')
  }

  render() {
    let product, productCause, productCategory, productBrand;

    if (this.props.product) {
      product = this.props.product;

      if (this.props.causes && this.props.categories && this.props.brands) {
        productCause = this.props.causes.find(cause => cause.id === product.causeId);
        productCategory = this.props.categories.find(category => category.id === product.categoryId);
        productBrand = this.props.brands.find(brand => brand.id === product.brandId)
      }
    }

    return (
      <div>
        {!product
          ? ''
          :
          <div>
            {
              !this.props.user.isAdmin
                ? <h1>Not Authorized</h1>
                :
                <div>
                  <div className="page">
                    <Link to={'/admin/products'}><h1>Return to Products</h1></Link>
                    <h1>Edit: {product.name} product</h1>
                    <ul>
                      <li>Product Name: {product.name}</li>
                      <li>Product Description: {product.description}</li>
                      {
                        !productBrand
                          ? <li>product Brand: no current brand</li>
                          : <li>product Brand: {productBrand.name}</li>
                      }
                      {
                        !productCause
                          ? <li>product Cause: no current cause</li>
                          : <li>product Cause: {productCause.name}</li>
                      }
                      {
                        !productCategory
                          ? <li>product Category: no current category</li>
                          : <li>product Category: {productCategory.name}</li>
                      }
                      <li>Product ImageUrl: {product.imageUrl}</li>
                      <li>Image: <img src={product.imageUrl} /></li>
                    </ul>
                  </div>
                  <form className="page" onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input
                      name="name"
                      type="text"
                      defaultValue={product.name}
                      required
                    />
                    <br />
                    <label>Image Url: </label>
                    <input
                      name="imageUrl"
                      defaultValue={product.imageUrl}
                      type="text"
                      required
                    />
                    <br />
                    <label>Price: </label>
                    <input
                      name="price"
                      defaultValue={product.price}
                      type="number"
                      required
                    />
                    <br />
                    <label>Description: </label>
                    <textarea
                      name="description"
                      defaultValue={product.description}
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
                    <button type="submit" >Edit {product.name}</button>
                  </form>
                  <div className="page">
                    <h3>{`Need to delete the ${product.name} product`}</h3>
                    <button
                      onClick={this.handleDelete}
                    >Delete {product.name}</button>
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
  return { product: products.all.find(product => product.id === Number(ownProps.match.params.id)), causes, user, brands, categories }
}

export default connect(mapState, mapDispatch)(SingleAdminProduct);
