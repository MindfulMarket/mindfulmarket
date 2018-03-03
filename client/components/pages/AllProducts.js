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
        let products = this.props.products.filter(product => {
          let state = this.state;
          for (let key in state) {
            if (state.filters === false) {return true;}
            else if (state[key] === true) {
              if (product.price > 70 ) return true
            }
          } return false
        })


    return (
      <div className="container" style={{ marginTop: '3em',flexDirection: 'column' }}>

          <div className="container" style={{ flexDirection: 'row' }}>
            <Filter checkboxClicked={this.checkboxClicked} />

            <div className="itemsContainer">

              <div className="allItemsContainer" >
                {
                  products.map(product =>
                    <Card key={product.name} category="product" product={product} name={product.name} imageUrl={product.imageUrl} id={product.id} price={product.price} addToCart = {this.props.addToCart} />
                  )
              }
              </div>
            </div>
          </div>
      </div>
    )
  }
}

  /* -----------------    CONTAINER     ------------------ */

  const mapState = ({ products, product }) => {
    return { products, product }
  }

  const mapDispatch = dispatch => ({
    fetchData: () => dispatch(fetchProducts()),
    addToCart: (product) => dispatch(addToCart(product))
  });

  export default connect(mapState, mapDispatch)(AllProducts);
