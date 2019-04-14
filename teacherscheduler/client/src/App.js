import React, { Component } from 'react';
import SubscribeForm from './Components/SignUp/Subscribe'
import './App.css';
import Calendar from './Components/MainPage/Calendar';
import LogInTab from './Components/LogInTab'

class App extends Component {
  render() {
    return (
      <div>
         {/* <SubscribeForm/> */}
         <LogInTab/>
         {/* <Calendar/> */}
      </div>
    );
  }
}

export default App;
