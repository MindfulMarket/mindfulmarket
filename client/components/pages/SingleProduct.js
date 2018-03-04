import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products';

/* -----------------    COMPONENT     ------------------ */

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      review: '',
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchData();
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state, 'state on submit')
  }

  render() {
    let singleProduct = this.props.products.find(product => product.id === Number(this.props.match.params.id))
    console.log(this.state, 'stateeteeeeeee')
    return (
      <div>
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
                      <label>Name: </label>
                      <input
                        name="name"
                        type="name"
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
                        placeholder="What do you think of this product"
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
                    <button type="submit">Submit Review</button>
                  </form>
                </div>
                <h1>Checkout reviews on the {singleProduct.name}</h1>
                {
                  singleProduct.Reviews.map(review => {
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

const mapState = ({ products }) => {
  return {
    products
  }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchProducts())
  }
});

export default connect(mapState, mapDispatch)(SingleProduct);
