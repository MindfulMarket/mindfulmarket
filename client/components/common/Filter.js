import React, { Component } from 'react'
import { sortProducts, filterProducts, clearFilters} from '../../store/products'
import { connect } from 'react-redux'
import { search, clearSearch } from '../../store/search'
// import connect from

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchEntry: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchCriteria = this.state.searchEntry;
    this.props.search({ searchCriteria: searchCriteria })
    // .then( () => this.props.history.push(`/products`) )
  }

  handleChange(event) {
    this.setState({
      searchEntry: event.target.value
    })
  }

  handleClick() {
    this.props.clearSearch();
  }

  render() {
    return (
      <div id="filterBar">
        <div id="filterSearch" >

            <form id = 'searchBarForm' onSubmit={this.handleSubmit} >
              <input id = 'searchInput' onChange={this.handleChange} placeholder=" Search" />
              <input type="image" name="submit" src="/assets/search.png" border="0" id = 'searchIcon' alt="Submit" />
              </form>
        </div>
        { this.props.search.length ?
          <button className="cardBtn" id ='clearSearchBtn' onClick={this.props.handleClick}>Clear Search</button>
        : ''
        }

        <div className="filterHeaderFlex">
          <h4 className="filterHeader">Price</h4>
          <i className="fas fa-dollar-sign" />

        </div>

        <div className="filterLabelDDFlex">
        <h4 className="filterLabel">sort</h4>
          <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleSort(ev.target.value)}>
            <option >none</option>
            <option value="lowHigh">low to high</option>
            <option value="highLow">high to low</option>
          </select>
        </div>

        <div className="filterLabelDDFlex">
        <h4 className="filterLabel">filter</h4>
          <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleFilter(ev.target.value)}>
            <option>none</option>
            <option value="underTen">Under $10</option>
            <option value="underFifty">Under $50</option>
            <option value="underFifty">Under $50</option>
            <option value="fiftyToOneHundred">$50 - $100</option>
            <option value="oneToTwoHundred">$100 - $200</option>
            <option value="twoToThreeHundred">$200 - $300</option>
            <option value="overThreeHundred">$300 & up</option>
          </select>
        </div>


        <div className="filterHeaderFlex">
          <h4 className="filterHeader">Rating</h4>
          <img className = "filterStarLogo" src = "/assets/star.png" />
        </div>

        <div className="filterLabelDDFlex">
        <h4 className="filterLabel">sort</h4>

          <select className="filterBarSelectDropdown"  onChange={(ev) => this.props.handleSort(ev.target.value)}>
            <option selected="selected">none</option>
            <option value="ratingLowHigh">low to high</option>
            <option value="ratingHighLow">high to low</option>
          </select>
        </div>

        <div className="filterLabelDDFlex">
          <h4 className="filterLabel">filter</h4>
          <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleFilter(ev.target.value)}>
            <option >none</option>
            <option value="one">0 - 1 Stars</option>
            <option value="two">1 - 2 Stars</option>
            <option value="three">2 - 3 Stars</option>
            <option value="four">3 - 4 Stars</option>
            <option value="fourPlus">4 Stars +</option>
          </select>
        </div>

        <div className="filterHeaderFlex">
        <h4 className="filterHeader">Reviews</h4>
        <i className="far fa-comments"  />
        </div>

      <div className="filterLabelDDFlex">
      <h4 className="filterLabel">sort</h4>

        <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleSort(ev.target.value)}>
          <option selected="selected">none</option>
          <option value='reviewsLowHigh'>low to high</option>
          <option value='reviewsHighLow'>high to low</option>
        </select>
      </div>

      <div className="filterLabelDDFlex">
        <h4 className="filterLabel">filter</h4>
        <select className="filterBarSelectDropdown" onChange={(ev) => this.props.handleFilter(ev.target.value)}>
          <option selected="selected">none</option>
          <option value="tenPlus">10+ reviews</option>
          <option value="hundredPlus">100+ reviews</option>
          <option value="fiveHundredPlus">500+ reviews</option>
          <option value="thousandPlus">1000+ reviews</option>
        </select>
      </div>

      </div>
    )
  }
}
const mapState = (state) => {
  return {
    firstName: state.user.firstName, search: state.search || []
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSort: (how) => {
      dispatch(sortProducts(how))

    },
    handleFilter: (range) => {
      dispatch(filterProducts(range))
    },
    handleClick: () => {
      dispatch( clearSearch())
      dispatch(clearFilters())
    },

    search: (criteria) => dispatch(search(criteria))

  }
}

export default connect(mapState, mapDispatch)(Filter)

