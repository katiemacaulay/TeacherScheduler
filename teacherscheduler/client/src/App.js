import React, { Component } from 'react';
import SubscribeForm from './Components/Subscribe'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <SubscribeForm/>
        </header>
      </div>
    );
  }
}

export default App;
