import React, { Component } from 'react';

/* -----------------    COMPONENT     ------------------ */

export default class AllProducts extends Component {
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

          We will also need to filter here based on search filters (category, price, rating, etc.)

          products.map(brand => {
            <Card image={product.imageUrl} name={product.name} price={product.price} causes={product.causes}/>
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

  // export default connect(mapState, mapDispatch)(AllProducts);
