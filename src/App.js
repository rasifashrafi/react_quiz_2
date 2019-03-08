import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles';
import Counter from './components/counter';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Titles/>
        <Counter/>
      </div>
    );
  }
}

export default App;
