import React, { Component } from 'react';
import Card from '../common/Card';
import { connect } from 'react-redux';
import { fetchAllCauses } from '../../store/causes';
/* -----------------    COMPONENT     ------------------ */

class AllCauses extends Component {

  componentDidMount() {
   this.props.fetchCauseData();
  }

  render() {
    return (
      <div className="page container">

        <div className="itemsContainer">

          <div className="container" style={{ flexDirection: 'row' }}>


            <div className="filterContainer">
              <h1> Know what cause inspires you? Click and see how you can help below.
              <br />
              Haven't found a social issue you stand behind. Explore. </h1>

              <div className="allItemsContainer" >
              {
                this.props.causes.map(cause =>
                  <Card key={cause.name} category="cause" type="cause" id={cause.id} brand={cause} name={cause.name} button="explore" imageUrl={cause.imageUrl} />
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
