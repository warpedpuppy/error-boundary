import React, { Component } from 'react';
import NeedsArray from './NeedsArray';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <NeedsArray array="NotAnArray" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;