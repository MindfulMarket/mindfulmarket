import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card'
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
    console.log(this.state.brands)
    return (
      <div className="container" style={{ flexDirection: "column" }}>
          <div className="featuredContainer">
            <h1> Here is where we show featured Items in a carousel </h1>
          </div>

          <div className="container" style={{ flexDirection: "row" }}>
            <div className="filterContainer">
            <h1> Here is where we filter Items</h1>
            </div>

            <div className="itemsContainer">
              <h1> Here is where we show all Items </h1>

              <div className="allItemsContainer" >
                {
                  this.state.brands.map(product =>
                    <Card key={brand.name} name={brand.name} imageUrl={brand.imageUrl} />
                  )
              /* Here we use our array of items and then map it with its brand image, price, and name

              brands.map(brand => {
                <Card image={brand.imageUrl} name={brand.name} causes={brand.causes}/>
              })
              */
              }
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
