import React, {Component} from 'react'
import { connect } from 'react-redux'
import { search } from '../store/search'



class Search extends Component {

  constructor() {
    super();
    this.state = {
      searchEntry: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    let searchCriteria = this.state.searchEntry;
    this.props.search({searchCriteria})
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      searchEntry: event.target.value
    })
  }

   render() {
     return (
          <form onSubmit={this.handleSubmit} >
            <input onChange={this.handleChange} placeholder="Search" />
            <button>Search </button>
          </form>

     )
    }
  }



/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart || [],
    causes: state.causes || [],
    categories: state.categories || [],

    // categories: state.categories || [],
  }
}


const mapDispatch = dispatch => ({
  search: (criteria) => dispatch(search(criteria))
});

export default connect(mapState, mapDispatch)(Search)

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
