import "./App.css";
import "./LastSeen.css";
import "./Recommendations.css";
import React from "react";
import WeeeklyFilms from "./components/weeklyFilms";
import Map from "./components/Map";
import User from "./components/User";
import logo from "./images/logo.svg";
import search from "./images/Search.svg";
import user from "./images/account.svg";

import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";
import vk from "./images/vk.svg";
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
      <div className="App">
        <header>
          <div className="leftbar">
            <div className="logo">
              <a> <Link to="/"><img src={logo}></img></Link></a>
            </div>
            <ul>
              <li>
                <Link to="/events/monday">Timetable</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/recomendations">Recommendations</Link>
              </li>
            </ul>
          </div>
          <div className="rightbar">
            <input placeholder="Find the film..." type="text"></input>
            <img className="lupa" src={search}></img>
            <img src={user}></img>
          </div>
        </header>

        <section>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/recomendations">
              <LastSeen />
              <Recommendations />
            </Route>
            <Route path="/events/:id">
              <WeeeklyFilms />
            </Route>

            <Route path="/map">
              <Map />
            </Route>
            <Route path="/">
              <User />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
       
        </section>

        <footer>
          <div className="footerText">
            <span>Join us: </span>
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={vk}></img>
          </div>
          <div className="footerSearch">
            <p>News</p>
            <input placeholder="Enter your email" type="text"></input>
            <button>Subscribe</button>
          </div>
        </footer>
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
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}

export default App;
