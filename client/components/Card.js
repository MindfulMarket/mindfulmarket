import React from 'react'


const Card = (props) => {
  return (
   <div className="Card" >
    <img src={props.imageUrl} style={{ height: '100px', weight: '100px' }} />
    <h3>{props.name}</h3>
    <img src={props.imageUrl} />
    <h2>{props.name}</h2>
    {props.causes &&
      <h4>{props.causes}</h4>
    }
    {props.price &&  // we may do a props.price? :
      <h4>${props.price}</h4>
    }
   </div>
  )
}

export default Card;
