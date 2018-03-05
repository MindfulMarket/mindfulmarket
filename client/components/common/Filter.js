import React, { Component } from 'react'
import { sortProducts, filterProducts } from '../../store/products'
import { connect } from 'react-redux'

// import connect from

class Filter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="filterBar">
        <div id='filterSearch' >
          <img id='searchIcon' src='/assets/search.png' />
          <input id='searchInput' placeholder="Search" />
        </div>

        <div className='filterHeaderFlex'>
          <h4 className='filterHeader'>Price</h4>
          <i class="fas fa-dollar-sign"></i>

        </div>

        <div className='filterLabelDDFlex'>
        <h4 className='filterLabel'>sort</h4>
          <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleSort(ev.target.value)}>
            <option selected="selected">none</option>
            <option value="lowHigh">low to high</option>
            <option value="highLow">high to low</option>
          </select>
        </div>

        <div className='filterLabelDDFlex'>
        <h4 className='filterLabel'>filter</h4>
          <select className="filterBarSelectDropdown" defaultValue="none" onChange={(ev) => this.props.handleFilter(ev.target.value)}>
            <option selected="selected">none</option>
            <option value="underTen">Under $10</option>
            <option value="underFifty">Under $50</option>
            <option value="underFifty">Under $50</option>
            <option value="fiftyToOneHundred">$50 - $100</option>
            <option value="oneToTwoHundred">$100 - $200</option>
            <option value="twoToThreeHundred">$200 - $300</option>
            <option value="overThreeHundred">$300 & up</option>
          </select>
        </div>


        <div className='filterHeaderFlex'>
          <h4 className='filterHeader'>Rating</h4>
          <img className = "filterStarLogo" src = '/assets/star.png'/>
        </div>

        <div className='filterLabelDDFlex'>
        <h4 className='filterLabel'>sort</h4>

          <select className="filterBarSelectDropdown"  onChange={(ev) => this.props.handleSort(ev.target.value)}>
            <option selected="selected">none</option>
            <option value="lowHighStar">low to high</option>
            <option value="highLowStar">high to low</option>
          </select>
        </div>

        <div className='filterLabelDDFlex'>
          <h4 className='filterLabel'>filter</h4>
          <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleFilter(ev.target.value)}>
            <option selected="selected">none</option>
            <option value="one">0 - 1 Stars</option>
            <option value="two">1 - 2 Stars</option>
            <option value="three">2 - 3 Stars</option>
            <option value="four">3 - 4 Stars</option>
            <option value="fourPlus">4 Stars +</option>
          </select>
        </div>

        <div className='filterHeaderFlex'>
        <h4 className='filterHeader'>Reviews</h4>
        <i class="far fa-comments" ></i>
        </div>

      <div className='filterLabelDDFlex'>
      <h4 className='filterLabel'>sort</h4>

        <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleSort(ev.target.value)}>
          <option selected="selected">none</option>
          <option value="lowHighStar">low to high</option>
          <option value="highLowStar">high to low</option>
        </select>
      </div>

      <div className='filterLabelDDFlex'>
        <h4 className='filterLabel'>filter</h4>
        <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleFilter(ev.target.value)}>
          <option selected="selected">none</option>
          <option value="one">0 - 1 Stars</option>
          <option value="two">1 - 2 Stars</option>
          <option value="three">2 - 3 Stars</option>
          <option value="four">3 - 4 Stars</option>
          <option value="fourPlus">4 Stars +</option>
        </select>
      </div>

      </div>
    )
  }
}
const mapState = (state) => {
  return {
    firstName: state.user.firstName,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSort: (how) => {
      dispatch(sortProducts(how))

    },
    handleFilter: (range) => {
      dispatch(filterProducts(range))
    }

  }
}

export default connect(mapState, mapDispatch)(Filter)

