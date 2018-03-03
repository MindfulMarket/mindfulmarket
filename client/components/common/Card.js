import React from 'react'


const Card = (props) => {
  console.log('PROPS IN THE CARD', props)

  return (
   <div className="card" >
<div className = 'cardContents' align = "center">
   <a href={`/${props.category}/${props.id}`}> <img  src={props.imageUrl} className = 'cardImg'/></a>
    <h3 className = "cardName" ><a href={`/${props.category}s/${props.id}`}>{props.name}</a>
    {
      (props.category === 'brands' || props.category === 'categories')
    ? ''
    :
      <div className = "cardBrand"> <a href = {`/brands/${props.brand.id}`} >by {props.brand.name}</a></div>
    }
    </h3>



    {props.causes &&
      <h4>{props.causes}</h4>
    }


    </div>
    <div className = 'cardPriceBtnDiv'>
      {props.price &&  // we may do a props.price? :
        <h4 className= "cardPrice">{'       '}${'            '+props.price}</h4>
      }



      <button  className= "cardBtn" onClick = {() => props.addToCart(props.product)}> Add to Cart </button>
   </div>

   </div>
  )
}


export default Card;
