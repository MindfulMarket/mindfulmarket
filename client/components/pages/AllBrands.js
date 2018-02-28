import React, { Component } from 'react';
import axios from 'axios'
import Card from '../common/Card'
/* -----------------    COMPONENT     ------------------ */

class AllBrands extends Component {
  constructor() {
    super();
    this.state = {
      brands: [],
    }
  }

  componentDidMount() {
    axios.get('/api/brands')
    .then(res => res.data)
    .then((brands) => this.setState({brands}) )
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
                  this.state.brands.map(brand =>
                    <Card key={brand.name} name={brand.name} imageUrl={brand.imageUrl} />
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

export default AllBrands

  /* -----------------    CONTAINER     ------------------ */

  // const mapState = ;

  // const mapDispatch = ;

  // export default connect(mapState, mapDispatch)(AllBrands);
