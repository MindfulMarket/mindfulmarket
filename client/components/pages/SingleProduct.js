import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products';
import { postReview, fetchReview } from '../../store/review';
import { addToCart } from '../../store/cart'

/* -----------------    COMPONENT     ------------------ */

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      review: '',
      rating: 0,
      productId: Number(this.props.match.params.id)
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.fetchData(id);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.sendReview(this.state)
    this.setState({
      title: '',
      review: '',
      rating: '',
      productId: Number(this.props.match.params.id)
    })
  }

  render() {
    let singleProduct, productReviews;

    if (this.props.products) {
      singleProduct = this.props.products.all.find(product => product.id === Number(this.props.match.params.id))
    }
    if (this.props.review) {
      productReviews = this.props.review.filter(review => review.productId === Number(this.props.match.params.id))
      console.log(productReviews, 'product reviews')
    }

    return (
      <div className="page">
        {
          singleProduct
            ?
            <div>
              <h2>{singleProduct.name}</h2>
              <a href={`/brands/${singleProduct.brand.id}`}>
                <h3>by {singleProduct.brand.name}</h3>
              </a>
              <img width="300px" height="auto" src={singleProduct.imageUrl} />
              <p>Description: {singleProduct.description}</p>
              <p>Price: ${singleProduct.price}</p>
              <button type="button" className="cardBtn" onClick={() => this.props.addToCart(singleProduct)}>Add to cart</button>
              <button name="bruce\s button for testing" onClick={() => window.localStorage.setItem('myOrder', JSON.stringify({quantity: 5, type: 'shirt', price: 100 }))}>TEST for Local Storage
              </button>
              <button name="bruce\s button for testing" onClick={() => window.localStorage.removeItem('myOrder')}>removing local storage
              </button>
              <div>
                <div>
                  <h1>Submit your review</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <label>Title: </label>
                      <input
                        name="title"
                        type="title"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <br />
                    <div>
                      <label>Your review: </label>
                      <input
                        name="review"
                        type="review"
                        value={this.state.review}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <br />
                    <div>
                      <label>Rating: 1-5 </label>
                      <input
                        name="rating"
                        type="rating"
                        value={this.state.rating}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <br />
                    <div>
                      <button type="submit">Submit Review</button>
                    </div>
                  </form>
                </div>
                <h1>Checkout reviews on the {singleProduct.name}</h1>
                {
                  !productReviews
                    ? ''
                    : productReviews.map(review => {
                      return (
                        <div key={review.id}>
                          <h2>Title: {review.title}</h2>
                          <h2>Description: {review.review}</h2>
                          <h2>Rating: {review.rating}</h2>
                          <br />
                        </div>
                      )
                    })
                }
              </div>
            </div>
            :
            <h1>This Item is No Longer Available</h1>
        }
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ products, review }) => {
  return {
    products, review
  }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchProducts())
    dispatch(fetchReview())
  },
  sendReview: (state) => {
    dispatch(postReview(state))
  },
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapState, mapDispatch)(SingleProduct);
