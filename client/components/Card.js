import React from 'react'


const Card = (props) => {
  return (
   <div className="Card" >
    <img src={props.imageUrl} style={{ maxHeight: '100px', maxWeight: '100px' }} />
    <h3>{props.name}</h3>
    {props.causes &&
      <h4>{props.causes}</h4>
    }
    <div style={{display: 'flex', alignItems: 'center' }}>
      {props.price &&  // we may do a props.price? :
        <h4>${props.price}</h4>
      }
      <button style={{marginLeft: '30px', height: '20px'}}> Add to Cart </button>
   </div>
   </div>
  )
}

export default Card;
