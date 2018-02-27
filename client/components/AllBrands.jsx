import React, { Component } from 'react';

/* -----------------    COMPONENT     ------------------ */

export default class AllBrands extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="container">

        <div className="filterContainer">
        </div>

        <div className="itemsContainer">
          <div className="featuredContainer">
            <h1> Here is where we show featured Items </h1>
          </div>

          <div className="allItemsContainer" >
            <h1> Here is where we show all Items </h1>
            {
            /* Here we use our array of items and then map it with its product image, price, and name

            brands.map(brand => {
              <Card image={brand.imageUrl} name={brand.name} causes={brand.causes}/>
            })
            */
            }
          </div>

          <div>
          </div>

        </div>
      </div>
    )
  }
}

  /* -----------------    CONTAINER     ------------------ */

  // const mapState = ;

  // const mapDispatch = ;

  // export default connect(mapState, mapDispatch)(AllBrands);
