import React from 'react'


const Card = (props) => {

  function starCalc(avgRating) {
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

  return (
    <div className="card" >
      <div className="cardContents" align = "center">
        <a  href={`/${props.category}s/${props.id}`} >
          <img   src={props.imageUrl} className="cardImg" />
        </a>
        <div className="cardName" >
          <a href={`/${props.category}s/${props.id}`}>{props.name}</a>
          <div>
            <div>
              {
                (props.category === 'brand' || props.category === 'categorie' || props.category === 'home' || props.category === 'cause')
                  ? <div />
                  : <div className="cardBrand"> <a href={`/brands/${props.brand.id}`} >by {props.brand.name}</a></div>
              }
            </div>
            {
              props.category !== 'product'
                ? <div />
                : (
                  <div className = "starsDiv" align ="center">
                    <div className="starFlex">
                      {
                        props.product.avgRating !== 'no reviews' ?
                          starCalc(props.product.avgRating).map((star) => <img className="star" key={star.id} src={star} />)
                          :
                          <div style = {{fontSize: '10pt'}}>No reviews</div>
                      }
                    </div>
                    {
                      props.reviewsQuantity === 0
                        ? <div />
                        : (props.reviewsQuantity === 1
                          ? <a className="numReviews">1 Review</a>
                          : <a className="numReviews">{props.reviewsQuantity} Reviews</a>
                        )
                    }
                  </div>
                )
            }
          </div>
        </div>
      </div>
      { props.button &&
      <div className="cardPriceBtnDiv">
        {props.price &&  // we may do a props.price? :
          <h4 className="cardPrice">$ {props.price}</h4>
        }
        {
        props.button === 'Add to cart' ?
        <button className="cardBtn" onClick={() => props.addToCart(props.product)}>{props.button}</button>
        :
        <a href={`/${props.category}s/${props.id}`}>
        <button className="cardBtn">{props.button}</button></a>

        }
      </div>
      }
    </div>
  )
}


export default Card;
