import React, { Component } from 'react';
import axios from 'axios';
import Card from '../common/Card';
import Filter from '../common/Filter'
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products'
import { addToCart } from '../../store/cart'

/* -----------------    COMPONENT     ------------------ */

class AllProducts extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // axios.get('/api/products')
    // .then(res => res.data)
    // .then((products) => this.setState({products}) )
    this.props.fetchData();
  }

  // onClicking(product) {
  //   console.log(product)
  //   // dispatch(fetchOneProduct(product)
  // }

  render() {
    let searchFilter = {cheap: 0, inexpensive: 0, midrange: 0, expensive: 0}
    return (
      <div className="container" style={{ flexDirection: "column" }}>

          <div className="container" style={{ flexDirection: "row" }}>
            <Filter searchFilter={searchFilter} />

            <div className="itemsContainer">
              <h1> Here is where we show all Items </h1>

              <div className="allItemsContainer" >
                {
                 /*  let filteredProducts = (products, filterSearch) => {

                 }
                  for (let filter in filterSearch) {
                     if (filterSearch[filter] === 1) {}
                  // }
                  // this.props.products.filter( product filterSearch)
                  */
                  this.props.products.map(product =>
                    <Card key={product.name} product = {product} name={product.name} imageUrl={product.imageUrl} price={product.price} addToCart = {this.props.addToCart}/>
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
    fetchData: () => dispatch(fetchProducts()),
    addToCart: (product) => dispatch(addToCart(product))
  });

  export default connect(mapState, mapDispatch)(AllProducts);
