import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChangeTime = this.handleChangeTime.bind(this);
  }
 
  handleChangeTime(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <div>
      <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={1}
          dateFormat="h:mm aa"
          timeCaption="Time"
      />
      </div>
    );
  }
};

export default Example