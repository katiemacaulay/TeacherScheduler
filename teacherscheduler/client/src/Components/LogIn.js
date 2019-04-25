import React, { Component } from "react";
import SignIn from "./SignUp/SignIn";
import { Redirect } from "react-router-dom";
// import Calendar from "./MainPage/Calendar";

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
      fetch('/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((data) => {
        this.setState({
          SignInError: "",
          authenticated: true
        })
        // localStorage.setItem('authenticated', true);
        this.forceUpdate();
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
    if (this.state.authenticated){
      return <Redirect to='/schedule'/>
    }
    return(
      <SignIn 
        error={this.state.SignInError} 
        onSignIn={this.handleSignIn} 
      />
    );
  }
}

export default Login;