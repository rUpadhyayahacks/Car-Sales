import React from 'react';
import { connect } from 'react-redux'
import AdditionalFeature from './AdditionalFeature';
import { addFeature } from '../actions/addFeature'

const AdditionalFeatures = props => {
  // console.log(props)
  return (
    
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // additionalFeatures: state.additionalFeatures
    state
  }
}

export default connect(
  mapStateToProps,
  {addFeature}
)(AdditionalFeatures);
