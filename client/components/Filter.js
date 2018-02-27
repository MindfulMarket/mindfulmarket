import React, { Component } from 'react'

const Filter = (props) => {
  return (
   <div className="FilterBar">
    <h4>Refine by</h4>
  { /* line
  */ }
      <h4> Brand </h4>
      <input placeholder="Search" />
      <h4> Price </h4>
      <div>
      <input type="checkbox" checked="checked" /> <h5>$0 - $10</h5>
      </div>
      <div>
      <input type="checkbox" checked="checked" /> <h5>$10 - $25</h5>
      </div>
      <div>
      <input type="checkbox" checked="checked" /> <h5>$25 - $100</h5>
      </div>
      <h5>$100 and Above</h5>
      <h4> Ratings </h4>
      <h4> Cause </h4>
   </div>
  )
}

export default Filter;
