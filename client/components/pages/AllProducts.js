import React, { Component } from 'react';
import axios from 'axios';
import Card from '../common/Card';
import Filter from '../common/Filter'
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products'
/* -----------------    COMPONENT     ------------------ */


class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      filters: false,
      cheap : false,
      inexpensive: false,
      midrange: false,
      expensive: false
    }
    this.checkboxClicked = this.checkboxClicked.bind(this)
  }

  componentDidMount() {
    this.props.fetchData();
  }

  checkboxClicked(event) {

    console.log('click')
    this.setState({
      filters: true,
      [event.target.value]: true
    })
  }

  render() {
    console.log(this.state)

        let products = this.props.products.filter(product => {
          let state = this.state;
          for (let key in state) {
            if (state.filters === false) return true;
            else if (state[key] === true) {
              if (product.price > 70 ) return true
            }
          } return false
        })


    return (
      <div className="container" style={{ flexDirection: "column" }}>

          <div className="container" style={{ flexDirection: "row" }}>
            <Filter checkboxClicked={this.checkboxClicked} />

            <div className="itemsContainer">
              <h1> Here is where we show all Items </h1>

              <div className="allItemsContainer" >
                {

                  products.map(product =>
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

export { AllProducts }
  /* -----------------    CONTAINER     ------------------ */

  const mapState = ({ products, product }) => {
    console.log(products)
    return { products, product }
  }

  const mapDispatch = dispatch => ({
    fetchData: () =>
    dispatch(fetchProducts())
  });

  export default connect(mapState, mapDispatch)(AllProducts);
