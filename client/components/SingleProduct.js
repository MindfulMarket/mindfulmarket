import React, { Component } from 'react';

/* -----------------    COMPONENT     ------------------ */

export default class SingleProduct extends Component {
  render() {
    return (
      <div>
        <div className="navigationTBD">
        </div>
        <div className="productImage">
            <img src={product.imageUrl} />
        </div>
      </div>
    )
  }
}

  /* -----------------    CONTAINER     ------------------ */

  // const mapState = ;

  // const mapDispatch = ;

  // export default connect(mapState, mapDispatch)(SingleProduct);
