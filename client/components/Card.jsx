import React, { Component } from 'react'

export default Card = (props) => {
  return (
   <div style=
   {{height = "100px",width="100px", borderWidth= '1px',
    borderRadius= '2px', borderColor= '#ddd', paddingTop="20px", paddingRight="10px"}}>
    <img src={props.imageUrl} />
    <h2>{props.name}</h2>
    {props.causes &&
      <h4>{props.causes}</h4>
    }
    {props.price &&  // we may do a props.price? :
      <h4>{props.price}</h4>
    }
   </div>
  )
}
