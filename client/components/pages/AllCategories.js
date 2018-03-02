import React, { Component } from 'react';
import Card from '../common/Card';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../../store/categories';
/* -----------------    COMPONENT     ------------------ */

class AllCategories extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
   this.props.fetchCategoryData();
  }

  render() {
    return (
      <div className="container">

        <div className="itemsContainer">
          <div className="featuredContainer">
            <h1> Here is where we show featured Items </h1>
          </div>

          <div className="container" style={{ flexDirection: 'row' }}>
            <div className="filterContainer">
            <h1> Here is where we filter Items</h1>
            </div>

            <div className="itemsContainer">
              <h1> TBD Categories</h1>

              <div className="allItemsContainer" >
              {
                this.props.categories.map(category =>
                  <Card key={category.name} category="categories" type="category" id={category.id} brand={category} button="explore" name={category.name} imageUrl={category.imageUrl} />
                )
              }
              </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ products, product, brands, categories }) => {
  return { products, product, brands, categories }
}

const mapDispatch = dispatch => ({
  fetchCategoryData: () => dispatch(fetchAllCategories())
});

export default connect(mapState, mapDispatch)(AllCategories);
