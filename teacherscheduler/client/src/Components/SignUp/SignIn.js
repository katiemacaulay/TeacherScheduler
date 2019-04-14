import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignIn({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl
            type="email"
            name="username"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Username"
            value={this.state.username}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            name="password"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Password"
            value={this.state.password}
          />
        </FormGroup>

        <Button type="submit">
         Sign In
       </Button>
      </form>
    );
  }
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired
};

export default SignIn;