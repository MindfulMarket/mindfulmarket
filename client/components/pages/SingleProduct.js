import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products';
import { postReview, fetchReview } from '../../store/review';

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
    let singleProduct = this.props.products.all.find(product => product.id === Number(this.props.match.params.id))

    return (
      <div className='page'>
        {
          singleProduct
            ?
            <div>
              <h2>{singleProduct.name}</h2>
              <img width="300px" height="auto" src={singleProduct.imageUrl} />
              <p>Description: {singleProduct.description}</p>
              <p>Price: ${singleProduct.price}</p>
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
                  !singleProduct
                    ? ''
                    : singleProduct.Reviews.map(review => {
                      return (
                        <div key={review.id}>
                          <h2>Title: {review.title}</h2>
                          <h2>Description: {review.content}</h2>
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

const mapState = ({ products, reviews }) => {
  return {
    products, reviews
  }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchProducts())
    dispatch(fetchReview())
  },
  sendReview: (state) => {
    dispatch(postReview(state))
  }
});

export default connect(mapState, mapDispatch)(SingleProduct);
