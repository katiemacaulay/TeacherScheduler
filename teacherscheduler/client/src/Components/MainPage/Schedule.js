import React from 'react';
import Calendar from './Calendar';
import Today from './Today';
import ThisWeek from './ThisWeek';
import AddClass from './AddClass';
import './style.css';

class Schedule extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      courses: '' 
    };
  }


  componentDidMount(){
    console.log('mounted');
    fetch('/api/schedule', {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }).then((res) => {
      this.setState({
        courses: res.data
      })
    }).catch(error => {
      console.log(error)
    })
  }  
 
  render(){
    return (
        <div className="page">
          <Calendar/>
          <AddClass/>
          <Today/>
          <ThisWeek/>
        </div>
    );
  }
}
export default Schedule;