import React from 'react';
import './App.css';
import Calendar from './Components/MainPage/Schedule';
import LogInTab from './Components/LogInTab'
import LogIn from './Components/LogIn'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={LogInTab} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/schedule" component={Calendar} />
      </div>
      <footer style= {{position:"absolute",left:5,bottom:0,right:0}}> @2019 Katie Macaulay</footer>
    </Router>
  );
}

export default AppRouter;

