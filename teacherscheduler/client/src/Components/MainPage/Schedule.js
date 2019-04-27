import React from 'react';
import Calendar from "../../containers/CalendarContainer";
import Today from "../../containers/TodayContainer";
import ThisWeek from './ThisWeek';
import Modal from './Modal'
import RemoveButton from './RemoveModel'
import './style.css';

class Schedule extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      courses: [] 
    };
  }

  getSchedule(){
    fetch('/api/schedule', {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then(function(response) {
      return response.json();
    })
    .then((res) => {
      this.setState({
        courses: res
      })
    })
    .catch(error => {
      console.log(error)
    })
  }


  componentDidMount(){
    console.log('mounted');
    this.getSchedule()
  }  
 
  render(){
    return (
      <div style={ { margin: 45 } }>
        <div className="page">
          <div style={ { paddingTop: 15 } }><Calendar/><Modal getSchedule={this.getSchedule.bind(this)}/><RemoveButton courses={this.state.courses}/></div>
          <Today courses={this.state.courses}/>
          <ThisWeek courses={this.state.courses}/>
        </div>
      </div>
    );
  }
}
export default Schedule;