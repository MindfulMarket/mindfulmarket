import React, { Component } from 'react';
import axios from 'axios';
import Card from '../common/Card';
import { connect } from 'react-redux';
import { fetchAllBrands } from '../../store/brands';
/* -----------------    COMPONENT     ------------------ */

class AllBrands extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
   this.props.fetchBrandData();
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
              <h1> Here is where we show all Items </h1>

              <div className="allItemsContainer" >
              {
                this.props.brands.map(brand =>
                  <Card key={brand.name} category="brand" type="brand" id={brand.id} brand={brand} name={brand.name} button="explore" imageUrl={brand.imageUrl} />
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

const mapState = ({ products, product, brands }) => {
  return { products, product, brands }
}

const mapDispatch = dispatch => ({
  fetchBrandData: () => dispatch(fetchAllBrands())
});

export default connect(mapState, mapDispatch)(AllBrands);
