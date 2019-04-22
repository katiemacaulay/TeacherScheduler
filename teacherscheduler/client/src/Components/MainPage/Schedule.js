import React from 'react';
import Calendar from './Calendar'
import AddClass from './AddClass'
import './style.css';

class Schedule extends React.Component{
 
  render(){
    return (
        <div className="page">
          <Calendar/>
          <AddClass/>
        </div>
    );
  }
}
export default Schedule;