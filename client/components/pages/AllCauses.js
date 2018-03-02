import React, { Component } from 'react';
import Card from '../common/Card';
import { connect } from 'react-redux';
import { fetchAllCauses } from '../../store/causes';
/* -----------------    COMPONENT     ------------------ */

class AllCauses extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
   this.props.fetchCauseData();
  }

  render() {
    return (
      <div className="container">

        <div className="itemsContainer">
          <div className="featuredContainer">
            <h1> Here is where we show featured Causes </h1>
          </div>

          <div className="container" style={{ flexDirection: 'row' }}>
            <div className="filterContainer">
            <h1> Here is where we filter Causes</h1>
            </div>

            <div className="itemsContainer">
              <h1> Here is where we show all Causes </h1>

              <div className="allItemsContainer" >
              {
                this.props.causes.map(cause =>
                  <Card key={cause.name} category="causes" type="cause" id={cause.id} brand={cause} name={cause.name} button="explore" imageUrl={cause.imageUrl} />
                )
              }
              </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ products, product, brands, causes }) => {
  return { products, product, brands, causes }
}

const mapDispatch = dispatch => ({
  fetchCauseData: () => dispatch(fetchAllCauses())
});

export default connect(mapState, mapDispatch)(AllCauses);
