import React, { Component } from 'react'
// import connect from

const Filter = (props) => {
  return (
   <div className="FilterBar">
    <h4>Refine by</h4>
  { /* line
  */ }
      <h4> Brand </h4>
      <input placeholder="Search" />
      <h4> Price </h4>
        <div style={{display: 'flex', flexDirection: "row", width: '100%'}}>
          <label >
            <input type="checkbox" style={{marginRight: '10px' }} />
            <span class="checkmark" style={{marginRight: '90px' }} >$0-$10</span>

            <input type="checkbox" style={{marginRight: '10px', marginTop: '20px'}} />
            <span class="checkmark" style={{marginRight: '90px'}} >$10-$25</span>


            <input type="checkbox" style={{marginRight: '10px', marginTop: '20px'}} />
            <span class="checkmark" style={{marginRight: '90px'}} >$25-$100</span>

            <input type="checkbox" style={{marginRight: '10px', marginTop: '20px'}} />
            <span class="checkmark" style={{marginRight: '30px'}} >$100 and Above</span>
            </label>
          </div>

      <h4> Ratings </h4>
      <h4> Cause </h4>
   </div>
  )
}
export default Filter;

  // const mapState = ;

  // const mapDispatch = ;

  // export default connect(mapState, mapDispatch)(AllBrands);
