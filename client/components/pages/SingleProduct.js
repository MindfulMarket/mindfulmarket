import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/products';

/* -----------------    COMPONENT     ------------------ */

class SingleProduct extends Component {

  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let singleProduct = this.props.products.filter(product => product.id === Number(this.props.match.params.id))[0]
    console.log(singleProduct, 'curreentntn props')
    console.log(this.props, 'all props')
    return (
      <div>
        {
          (singleProduct === undefined)
            ? <h1>hi</h1>
            :
            <div>
              <h2>{singleProduct.name}</h2>
              <img width="300px" height="auto" src={singleProduct.imageUrl} />
              <p>Description: {singleProduct.description}</p>
              <p>Price: ${singleProduct.price}</p>
              <table>
              <tbody>
              <tr>
                  <th>Title</th>
                  <th>Rating</th>
                  <th>Content</th>
                  </tr>
                  {
                    singleProduct.Reviews.map(review => {
                      return (
                        <tr key={review.id}>
                          <td>{review.title}</td>
                          <td>{review.rating}</td>
                          <td>{review.content}</td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
              </table>
            </div>
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
