import React from 'react';
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";


class SubscribeForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    let data = this.state

    fetch('/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(data)
    });
    alert('you made an user!')
  }
  render(){
    return (
      <FormGroup>
        <FormLabel>First Name</FormLabel>
          <FormControl
            type="firstName"
            name="firstName"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter First Name"
            value={this.state.firstName}
          />
           <FormLabel>Last Name</FormLabel>
          <FormControl
            type="lastName"
            name="lastName"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Last Name"
            value={this.state.lastName}
          />
           <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            name="email"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Email Address"
            value={this.state.email}
          />
        </FormGroup>
    );
  }
}
export default SubscribeForm;