import React from 'react';
import Home from './components/pages/home';
import { connect } from 'react-redux';
import * as ActionCreators from './store/action_creators';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.app.isMobile,
  }
}

const mapDispatchToProps = (dispatcher) => {
  return {
    updateScreenSize:(payload) => dispatcher(ActionCreators.updateScreenSize(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
