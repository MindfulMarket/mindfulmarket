import React, { Component } from 'react';
import Card from '../common/Card';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../../store/categories';
/* -----------------    COMPONENT     ------------------ */

class AllCategories extends Component {

  componentDidMount() {
   this.props.fetchCategoryData();
  }

  render() {
    return (
      <div className="page container">

        <div className="itemsContainer">
          <div className="featuredContainer">
            <h1> Whatever it is that you are looking for, there is a socially responsible product. Find it below: </h1>
          </div>

          <div className="container" style={{ flexDirection: 'row' }}>

            <div className="itemsContainer">


              <div className="allItemsContainer" >
              {
                this.props.categories.map(category =>
                  <Card key={category.id} category="categorie" type="category" id={category.id} brand="null" button="explore" name={category.name} imageUrl={category.imageUrl} />
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
