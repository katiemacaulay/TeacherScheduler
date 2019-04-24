import React from 'react';
import Calendar from './Calendar';
import Today from './Today';
import ThisWeek from './ThisWeek';
import AddClass from './AddClass'
import './style.css';

class Schedule extends React.Component{
 
  render(){
    return (
        <div className="page">
          <Calendar/>
          {/* <AddClass/> */}
          <Today/>
          <ThisWeek/>
        </div>
    );
  }
}
export default Schedule;