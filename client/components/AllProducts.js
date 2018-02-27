import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import Filter from './Filter'

/* -----------------    COMPONENT     ------------------ */

class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    axios.get('/api/products')
    .then(res => res.data)
    .then((products) => this.setState({products}) )
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="container" style={{ flexDirection: "column" }}>

          <div className="container" style={{ flexDirection: "row" }}>
            <Filter />

            <div className="itemsContainer">
              <h1> Here is where we show all Items </h1>

              <div className="allItemsContainer" >
                {
                  this.state.products.map(product =>
                    <Card key={product.name} name={product.name} imageUrl={product.imageUrl} price={product.price} />
                  )
              }
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default AllProducts
  /* -----------------    CONTAINER     ------------------ */

  // const mapState = ;

  // const mapDispatch = ;

  // export default connect(mapState, mapDispatch)(AllProducts);
