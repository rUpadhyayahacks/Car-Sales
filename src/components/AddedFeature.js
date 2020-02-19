import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/removeFeature';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
      onClick={() => props.removeFeature}
      >
        X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    // additionalFeatures: state.removeFeatureReducer.additionalFeatures
    // state
  }
}

export default connect(
  mapStateToProps,
  {removeFeature}
)(AddedFeature);
