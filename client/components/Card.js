import React from 'react'

const Card = (props) => {
  return (
   <div className="Card" >
    <img src={props.imageUrl} style={{height: '100px', weight: '100px' }}/>
    <h3>{props.name}</h3>
    {props.causes &&
      <h4>{props.causes}</h4>
    }
    {props.price &&  // we may do a props.price? :
      <h4>${props.price}</h4>
    }
    <button style={{ fontSize: '20', color: 'green', fontWeight: '400' }}>Add to Cart</button>
   </div>
  )
}

export default Card;
