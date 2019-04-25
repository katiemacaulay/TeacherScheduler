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
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li>*/}
          </ul>
        </nav>

        <Route path="/" exact component={LogInTab} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/schedule" component={Calendar} />

        {/* <Route path="/users/" component={Users} /> */}
      </div>
    </Router>
  );
}

export default AppRouter;

