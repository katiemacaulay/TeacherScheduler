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
              [2017, 3, 12], 
              [2017, 3, 2], 
              [2017, 3, 5]
          ]
        };
      }
      handleDayClick(day) {
          let dataSplit = day.toLocaleDateString().split('/')
          dataSplit.splice(0, 0, dataSplit[2]);
          dataSplit.pop()
          let newSelectedDate = dataSplit.map(Number)
          console.log(dataSplit)
          console.log(newSelectedDate)

            this.setState({ selectedDay: day.toDateString()});
      }

  render(){
    return (
        <div>
          <DayPicker 
          initialMonth={new Date(2017, 3)}
          selectedDays={[

              new Date(2017, 3, 12),
              new Date(2017, 3, 2),
          ]}
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