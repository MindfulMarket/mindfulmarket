import React, { Component } from 'react';
import Card from '../common/Card';
import Filter from '../common/Filter'
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products'
import { addToCart } from '../../store/cart'

/* -----------------    COMPONENT     ------------------ */


class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      filters: false,
      cheap: false,
      inexpensive: false,
      midrange: false,
      expensive: false
    }
    this.checkboxClicked = this.checkboxClicked.bind(this)
  }
//add componennt did unmount which restores all products on filtered prop
  componentDidMount() {
    this.props.fetchData();
  }

  checkboxClicked(event) {
    this.setState({
      filters: true,
      [event.target.value]: true
    })
  }

  render() {
    let productsToRender = this.props.products
    console.log(this.props, 'props of all products')

    if (this.props.filteredProducts) {
      productsToRender = this.props.filteredProducts
    }

    const products = productsToRender.filter(product => {
      let state = this.state;
      for (let key in state) {
        if (state.filters === false) { return true; }
        else if (state[key] === true) {
          if (product.price > 70) return true
        }
      } return false
    })

    return (
      <div className="container page" style={{width:'100vw', marginTop: '3em', flexDirection: 'column' }}>

        <div className="container" style={{ flexDirection: 'row' }}>
          <Filter />

          <div className="itemsContainer">

            <div className="allItemsContainer" >
              {
                !products.length
                  ? <h4>There are no products matching your search criteria!</h4>
                  : products.map(product => {
                    return (
                      <Card key={product.name} category="product" brand={product.brand} product={product} name={product.name} button="Add to cart" imageUrl={product.imageUrl} id={product.id} price={product.price} reviewsAvg={product.Reviews} reviewsQuantity={product.Reviews.length} addToCart={this.props.addToCart} />
                    )
                  })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return { products: state.products.filteredOrSorted }
}

const mapDispatch = dispatch => ({
  fetchData: () => dispatch(fetchProducts()),
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapState, mapDispatch)(AllProducts);
