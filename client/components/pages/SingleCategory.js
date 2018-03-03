import React, { Component } from 'react';
import Card from '../common/Card';
import Filter from '../common/Filter'
import { connect } from 'react-redux'
import { fetchAllCategories } from '../../store/categories'
import { fetchAllBrands } from '../../store/brands'
import { addToCart } from '../../store/cart'

/* -----------------    COMPONENT     ------------------ */

class SingleCategory extends Component {

  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let singleCategoryView = this.props.categories.find(category => category.id === Number(this.props.match.params.id))
    console.log(singleCategoryView, 'single view')
    console.log(this.props, 'current props')
    return (
      <div>
        {
          !singleCategoryView
            ? <h1>hi</h1>
            :
            <div>
              <h2>{singleCategoryView.name}</h2>
              <img width="300px" height="auto" src={singleCategoryView.imageUrl} />
              <p>Description: {singleCategoryView.description}</p>
              <p>Want to get involved? Shop products that believe in this cause too.</p>
              {
                singleCategoryView.products.map(product =>
                  <Card key={product.name} category="products" type="product" product={product} name={product.name} imageUrl={product.imageUrl} id={product.id} price={product.price} addToCart={this.props.addToCart} />
                )
              }
            </div>
        }
      </div>
    )
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = ({ products, brands, categories }) => {
  return { products, brands, categories }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchAllCategories())
    dispatch(fetchAllBrands())
  },
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapState, mapDispatch)(SingleCategory);

