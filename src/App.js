import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({state}) => {
  console.log('state', state)
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dispatch({ type: 'ADD_FEATURE'})
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.addFeatureReducer.car} />
        <AddedFeatures car={state.addFeatureReducer.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.addFeatureReducer.additionalFeatures} />
        <Total car={state.addFeatureReducer.car} additionalPrice={state.addFeatureReducer.additionalPrice} />
      </div>
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
  {}
)(App);
