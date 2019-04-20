import React, { Component } from 'react';
import './App.css';
import Calendar from './Components/MainPage/Calendar';
import LogInTab from './Components/LogInTab'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <div>
//          <LogInTab/>
//          {/* <Calendar/> */}
//       </div>
//     );
//   }
// }

// export default App;


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/schedule/">Schedule</Link>
            </li>
            {/* <li>
              <Link to="/users/">Users</Link>
            </li> */}
          </ul>
        </nav>

        <Route path="/" exact component={LogInTab} />
        <Route path="/schedule/" component={Calendar} />
        {/* <Route path="/users/" component={Users} /> */}
      </div>
    </Router>
  );
}

export default AppRouter;

