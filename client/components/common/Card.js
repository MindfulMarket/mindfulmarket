import React from 'react'


const Card = (props) => {
  console.log(props, 'card props')
  return (
    <div className="card" >
      <div className="cardContents" align="center">
        <a href={`/${props.category}s/${props.id}`}> <img src={props.imageUrl} className="cardImg" /></a>
        <h3 className="cardName" ><a href={`/${props.category}s/${props.id}`}>{props.name}</a>
        <div>
        { props.category !== 'product'
          ? ''
          : ( props.reviewsQuantity === 0
            ? ''
            : ( props.reviewsQuantity === 1
              ? <a>1 Review</a>
              : <a>{props.reviewsQuantity} Reviews</a>
            )
          )
        }
        </div>
        <div>
        {
          (props.category === 'brand' || props.category === 'categorie' || props.category === 'home' || props.category === 'cause')
          ? ''
          : <div className="cardBrand"> <a href={`/brands/${props.brand.id}`} >by {props.brand.name}</a></div>
        }
        </div>
        </h3>
      </div>
      <div className="cardPriceBtnDiv">
        {props.price &&  // we may do a props.price? :
          <h4 className="cardPrice">{'       '}${'            ' + props.price}</h4>
        }
        <button className="cardBtn" onClick={() => props.addToCart(props.product)}>{props.button}</button>
      </div>

    </div>
  )
}


export default Card;
