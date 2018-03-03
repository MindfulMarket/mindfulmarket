import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAllCauses } from '../../store/causes';

/* -----------------    COMPONENT     ------------------ */

class SingleCause extends Component {

  componentDidMount() {
    this.props.fetchData();

  }

  render() {
    let singleCause = this.props.causes.filter(cause => cause.id === Number(this.props.match.params.id))[0]
    console.log('line 16', this.props, this.props.match.params.id)
    return (
      <div>
      {
        (singleCause === undefined)
        ? <h1>hi</h1>
        :
        <div>
        <h2>{singleCause.name}</h2>
        <img width="300px" height="auto" src={singleCause.imageUrl} />
        <p>Description: {singleCause.description}</p>
        <p>Want to get involved? Shop products that believe in this cause too.</p>
        </div>
      }
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ causes }) => {
  return {
    causes
  }
}

const mapDispatch = dispatch => ({
  fetchData: () => {
    dispatch(fetchAllCauses())
  }
});

export default connect(mapState, mapDispatch)(SingleCause);
