import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends React.Component{
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
          selectedDay: undefined,
          schoolDays: [
              [4, 2, 2017], 
              [4, 5, 2017]
          ]
        };
      }
      
      handleDayClick(day) {
          let dataSplit = day.toLocaleDateString().split('/')
          let newSelectedDate = dataSplit.map(Number)
          let allSchoolDays = this.state.schoolDays.slice()
          let indexOfSelectedDay = this.state.schoolDays.indexOf(newSelectedDate)
          if(indexOfSelectedDay < 0){
            allSchoolDays.push(newSelectedDate)
          }
          console.log(indexOfSelectedDay)
          console.log(newSelectedDate)
          console.log(allSchoolDays)

            this.setState({ selectedDay: day.toDateString(), 
            schoolDays: allSchoolDays
            });
      }
      

  render(){
    return (
        <div>
          <DayPicker 
          initialMonth={new Date(2017, 3)}
          selectedDays={
            this.state.schoolDays.map(day => {
            return (new Date(day[2], (day[0]-1), day[1]))
          })
          }
          onDayClick={this.handleDayClick} />
        {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay}</p>
        ) : (
          <p>Please select a day.</p>
        )}
        </div>
    );
  }
}
export default Calendar;