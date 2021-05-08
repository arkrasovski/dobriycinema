import logo from "./logo.svg";
import "./App.css";
import React from "react";
import LastSeen from "./components/LastSeen";

import Recommendations from "./components/Recommendations";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import moment from "moment";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ratefilm">Today`events</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/recommendations">Recommendations</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="App">
          <section>
            <Switch>
              <Route path="/about">
                <About />
              </Route>

              <Route path="/ratefilm">
                <LastSeen />
                <Recommendations />
              </Route>

              <Route path="/recommendations">
                <Recommendations />
              </Route>

              <Route path="/">
                <h1>Home</h1>
                Welcome to our service. You are on the home page. You can choose to watch this{" "}
                <Link to="/weeklyevents">week`s music festivals</Link>, including{" "}
                <Link to="/ratefilm">today`s</Link>.
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  let location = useLocation();

  return (
    <div>
      <h2>About us</h2>
      <p>
        This app helps you find an interesting festival and have an unforgettable weekend. Here you
        can choose <Link to="/weeklyevents">weekly events</Link>, as well as see the events planned
        for <Link to="/ratefilm">today</Link>.
      </p>
    </div>
  );
}

export default App;
