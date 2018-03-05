import React, { Component } from 'react';
import Card from '../common/Card';
import { connect } from 'react-redux'
import { fetchAllCategories } from '../../store/categories'
import { fetchProducts } from '../../store/products'
import { addToCart } from '../../store/cart'

/* -----------------    COMPONENT     ------------------ */

class SingleCategory extends Component {

  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let singleCategoryView, categoryProducts;

    if (this.props.categories.length) {
      singleCategoryView = this.props.categories.find(category => category.id === Number(this.props.match.params.id))

      categoryProducts = this.props.products.filter(product => product.categoryId === singleCategoryView.id)
    }

    return (
      <div className="page">
        {
          !singleCategoryView
            ? <h1>hi</h1>
            :
            <div>
              <h2>{singleCategoryView.name}</h2>
              <img width="300px" height="auto" src={singleCategoryView.imageUrl} />
              <p>Description: {singleCategoryView.description}</p>
              <p>Want to get involved? Shop products that believe in this cause too.</p>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                {
                categoryProducts.map(product =>
                  <Card key={product.name} category="product" brand={product.brand} product={product} name={product.name} button="Add to cart" imageUrl={product.imageUrl} reviewsQuantity={product.Reviews.length} id={product.id} price={product.price} addToCart={this.props.addToCart} />
                )
              }
                </div>

            </div>
        }
      </div>
    )
  }
}

// {this.props.brands.find(brand => brand.id === product.brandId)}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ products, brands, categories }) => {
  return {
    products: products.all,
    brands,
    categories
      }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchAllCategories())
    dispatch(fetchProducts())
  },
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapState, mapDispatch)(SingleCategory);

