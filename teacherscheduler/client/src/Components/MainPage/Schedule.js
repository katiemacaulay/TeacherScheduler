import React from 'react';
import Calendar from "../../containers/CalendarContainer";
import Today from "../../containers/TodayContainer";
import ThisWeek from './ThisWeek';
import AddClass from './AddClass';
import './style.css';

class Schedule extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      courses: [] 
    };
  }


  componentDidMount(){
    console.log('mounted');
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
 
  render(){
    return (
        <div className="page">
          <Calendar/>
          {/* <AddClass/> */}
          <Today courses={this.state.courses}/>
          <ThisWeek courses={this.state.courses}/>
        </div>
    );
  }
}
export default Schedule;