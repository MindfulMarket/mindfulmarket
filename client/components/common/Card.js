import React from 'react'


const Card = (props) => {
  console.log('PROPS IN THE CARD', props)

  return (
<<<<<<< HEAD
   <div className="card" >
<div className = 'cardContents' align = "center">
   <a href={`/${props.category}s/${props.id}`}> <img  src={props.imageUrl} className = 'cardImg'/></a>
    <h3 className = "cardName" ><a href={`/${props.category}s/${props.id}`}>{props.name}</a>
    <div className = "cardBrand"> <a href = {`/brands/${props.brand.id}`} >by {props.brand.name}</a></div>
    </h3>



=======
   <div className="Card" >
     <a href={`/${props.category}/${props.id}`} > <img src={props.imageUrl} style={{ maxHeight: '100px', maxWidth: '100px' }} /></a>
    <h3>{props.name}</h3>
>>>>>>> master
    {props.causes &&
      <h4>{props.causes}</h4>
    }


    </div>
    <div className = 'cardPriceBtnDiv'>
      {props.price &&  // we may do a props.price? :
        <h4 className= "cardPrice">{'       '}${'            '+props.price}</h4>
      }
<<<<<<< HEAD



      <button  className= "cardBtn" onClick = {() => props.addToCart(props.product)}> Add to Cart </button>
=======
      <button style={{marginLeft: '30px', height: '20px'}} onClick = {() => props.addToCart(props.product)}> {props.button || "Add to Cart"} </button>
>>>>>>> master
   </div>

   </div>
  )
}


export default Card;
