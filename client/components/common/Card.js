import React ,{Component}from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

let counter = 0;

class Card extends Component {
  constructor(props){
    super(props)
    this.startCalc = this.starCalc.bind(this)
  }

  starCalc(avgRating) {
    let starFrac = null;
        if (typeof avgRating !== 'number' || avgRating.toString().length === 1) { //whole number
          if (avgRating >= 0.7) starFrac = 'threeQuarters.png'
          else if (avgRating >= 0.4) starFrac = 'halfStar.png'
          else starFrac = 'quarterStar.png'
        }
        let stars = []
        for (let k = 0; k < avgRating; k++) {
          stars.push('/assets/fullStar.png')
        }
        if (starFrac !== null) {
          stars.push(`/assets/${starFrac}`)
        }
        return stars
      }
//the props.type class on div below allows custom style of cards for category/brand/product
  render () {
    return  (
        <div className={`card ${this.props.type}`} >
      <div className="cardContents" align = "center">
        <a  href={`/${this.props.category}s/${this.props.id}`} >
          <img   src={this.props.imageUrl} className="cardImg" />
        </a>
        <div className="cardName" >
          <a href={`/${this.props.category}s/${this.props.id}`}>{this.props.name}</a>
          <div>
            <div>
              {
                (this.props.category === 'brand' || this.props.category === 'categorie' || this.props.category === 'home' || this.props.category === 'cause')
                  ? <div />
                  : <div className="cardBrand"> <a href={`/brands/${this.props.brand.id}`} >by {this.props.brand.name}</a></div>
              }
            </div>
            {
              this.props.category !== 'product'
                ? <div />
                : (
                  <div className = "starsDiv" align ="center">
                    <div className="starFlex">
                      {
                        this.props.product.avgRating !== 'no reviews' ?
                          this.starCalc(this.props.product.avgRating).map((star) => <img className="star" key={counter++} src={star} />)
                          :
                          <div style = {{fontSize: '10pt'}}>No reviews</div>
                      }
                    </div>
                    {
                      this.props.reviewsQuantity === 0
                        ? <div />
                        : (this.props.reviewsQuantity === 1
                          ? <a className="numReviews">1 Review</a>
                          : <a className="numReviews">{this.props.reviewsQuantity} Reviews</a>
                        )
                    }
                  </div>
                )
            }
          </div>
        </div>
      </div>
      { this.props.button &&
      <div className="cardPriceBtnDiv">
        {this.props.price &&  // we may do a this.props.price? :
          <h4 className="cardPrice">$ {this.props.price}</h4>
        }
        {
        this.props.button === 'Add to cart' ?
        <button className="cardBtn" onClick={() => {
          this.props.addToCart(this.props.product)
          .then(()=> this.props.updateLocalCart(this.props.testCart))
          if(this.props.userId){
            this.props.updateBackend(this.props.testCart, this.props.userId)
          }
          
        }}>{this.props.button}</button>
        :
        <Link to={`/${this.props.category}s/${this.props.id}`}>
        <button className="cardBtn">{this.props.button}</button>
        </Link>

        }
      </div>
      }
    </div>
  )

  }
}

const mapState = (state) => {
  return { products: state.products.filteredOrSorted, search: state.search, testCart: state.cart, userId: state.user.id}
}

export default connect(mapState)(Card);

