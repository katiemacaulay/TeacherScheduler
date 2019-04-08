import React, { Component } from 'react';
import SubscribeForm from './Components/Subscribe'
import './App.css';
import Calendar from './Components/MainPage/Calendar'

class App extends Component {
  render() {
    return (
      <div>
         <SubscribeForm/>
         <Calendar/>
      </div>
    );
  }
}

export default App;
