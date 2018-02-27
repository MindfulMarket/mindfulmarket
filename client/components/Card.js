import React from 'react'

const Card = (props) => {
  return (
   <div style=
   {{ maxheight: '150px', maxwidth: '150px', borderWidth: '1px', borderRadius: '2px', borderColor: '#ddd', marginRight: '20px', marginLeft: '20px', marginTop: '20px', marginBottom: '20px', backgroundColor: 'white' }}>
    <img src={props.imageUrl} style={{height: '100px', weight: '100px'}}/>
    <h2>{props.name}</h2>
    {props.causes &&
      <h4>{props.causes}</h4>
    }
    {props.price &&  // we may do a props.price? :
      <h4>{props.price}</h4>
    }
    <button style={{ fontSize: '20', color: 'green', fontWeight: '400' }}>Add to Cart</button>
   </div>
  )
}

export default Card;
