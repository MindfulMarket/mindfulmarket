import React, { Component } from 'react'
import { fetchOneProduct } from '../../store/products'
import store from '../../store'
class Card extends Component {
    constructor(props){
      super(props)
    }

    handleClick(dispatch) {
        store.dispatch(fetchOneProduct(this.props))
        console.log(this.props)
    }

  render() {
  return (
   <div className="Card" >
    <a href="#" onClick={this.handleClick.bind(this)}><img src={this.props.imageUrl} style={{ maxHeight: '100px', maxWeight: '100px' }} /></a>
    <h3>{this.props.name}</h3>
    {this.props.causes &&
      <h4>{this.props.causes}</h4>
    }
    <div style={{display: 'flex', alignItems: 'center' }}>
      {this.props.price &&  // we may do a this.props.price? :
        <h4>${this.props.price}</h4>
      }
      <button style={{marginLeft:'30px', height:'20px'}}> Add to Cart </button>
   </div>
   </div>
  )
  }
}

export default Card;
// {`/products/${this.props.name}`}
