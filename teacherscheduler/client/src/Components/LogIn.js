import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import SignUpSignIn from "./SignUp/SignUpSignIn";
import TopNavbar from "./SignUp/TopNavBar";
import Secret from "./SignUp/Secret";

class App extends Component {

  state = {
    signUpSignInError: "",
    authenticated: localStorage.getItem("token") || false
  }

  handleSignUp = (credentials) => {
    const { username, password, confirmPassword } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
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
          signUpSignInError: "",
          authenticated: token
        });
      });
    }
  }

  handleSignIn = (credentials)=>{
    const { username, password} = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
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
          signUpSignInError: "",
          authenticated: token
        });
      });
    }  }

  handleSignOut = ()=> {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }

//   renderSignUpSignIn = ()=> {
//     return (
//       <SignUpSignIn 
//         error={this.state.signUpSignInError} 
//         onSignUp={this.handleSignUp}
//         onSignIn={this.handleSignIn} 
//       />
//     );
//   }

  renderApp() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <h1>I am protected!</h1>} />
          <Route exact path="/secret" component={Secret} />
          <Route render={() => <h1>NOT FOUND!</h1>} />
        </Switch>
      </div>
    );
  }

  render() {
    let whatToShow = "";
    if (this.state.authenticated) {
      whatToShow = this.renderApp();
    } else {
    //   whatToShow = this.renderSignUpSignIn();
    }
       
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavbar 
            showNavItems={this.state.authenticated} 
            onSignOut={this.handleSignOut} />
          {whatToShow}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;