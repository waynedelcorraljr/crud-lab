import React, { Component } from 'react';
import RestaurantsContainer from './containers/RestaurantsContainer';

class App extends Component {
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <RestaurantsContainer />
      </div>
    );
  }
};

export default App;
