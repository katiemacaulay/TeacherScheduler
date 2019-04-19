import React, { Component } from 'react';
import './App.css';
import Calendar from './Components/MainPage/CalendarEdit';
import LogInTab from './Components/LogInTab'

class App extends Component {
  render() {
    return (
      <div>
         <LogInTab/>
         {/* <Calendar/> */}
      </div>
    );
  }
}

export default App;
