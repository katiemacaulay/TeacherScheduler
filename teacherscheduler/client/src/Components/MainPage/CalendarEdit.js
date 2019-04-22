import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class CalendarEdit extends React.Component{
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
          selectedDay: undefined,
          schoolDays: [
              [4, 2, 2017], 
              [4, 5, 2017]
          ],
          schoolDaySearch: [
            "4/2/2017",
            "4/5/2017"
          ]
        };
      }
      
      handleDayClick(day) {
        // handles the input for New Date
          let data = day.toLocaleDateString()
          let dataSplit = data.split('/')
          let newSelectedDate = dataSplit.map(Number)
          let allSchoolDays = this.state.schoolDays.slice()
        // handles the string input array
          let schoolDaysSearch = this.state.schoolDaySearch.slice()
          let schoolDayIndex = schoolDaysSearch.indexOf(data)
          console.log(allSchoolDays)

          if(schoolDayIndex > -1){
            schoolDaysSearch.splice(schoolDayIndex, 1)
            allSchoolDays.splice(schoolDayIndex, 1)
          } else {
            schoolDaysSearch.push(data)
            allSchoolDays.push(newSelectedDate)
          }

            this.setState({ selectedDay: day.toDateString(), 
            schoolDays: allSchoolDays,
            schoolDaySearch: schoolDaysSearch
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
export default CalendarEdit;