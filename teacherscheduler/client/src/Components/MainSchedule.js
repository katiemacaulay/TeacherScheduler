import React from 'react';
import Schedule from './MainPage/Schedule';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MainSchedule extends React.Component{
 
  render(){
    return (
      <Router>
        <div className="page">
        <nav>
          <ul>
            <li>
              <Link to="/schedule">Today's Schedule</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Route path="/schedule" exact component={Schedule}/>
      </Router>
    );
  }
}
export default MainSchedule;