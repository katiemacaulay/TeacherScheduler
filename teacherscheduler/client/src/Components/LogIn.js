import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./SignUp/SignIn";
import TopNavbar from "./SignUp/TopNavBar";
import Secret from "./SignUp/Secret";

class Login extends Component {

  state = {
    SignInError: "",
    authenticated: localStorage.getItem("token") || false
  }

  handleSignIn = (credentials)=>{
    const { username, password} = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        SignInError: "Must Provide All Fields"
      });
    } else {
      fetch("/api/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          SignInError: "",
          authenticated: token
        });
      }).catch(error => {
        console.log(error)
      })
    }  
  }

  handleSignOut = ()=> {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }


  render() {
       
    return (
      <SignIn 
        error={this.state.SignInError} 
        onSignIn={this.handleSignIn} 
      />
    );
  }
}

export default Login;