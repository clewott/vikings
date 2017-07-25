import React, { Component } from 'react';
import '../App.css';
import News from './news/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Vikings</h2>
          <News />
        </div>
      </div>
    );
  }
}

export default App;
