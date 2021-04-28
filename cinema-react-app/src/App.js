import "./App.css";
import React from "react";
import WeeeklyFilms from "./components/weeklyFilms";
import Map from "./components/Map";
import logo from "./components/dobriy.jpg";
import lupa from "./components/lupa.png";
import man from "./components/man.png";
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
          <div><img src={logo} class="logo" alt="logo" />
        <ul><li>
        <Link to="/events/monday"><p>Top film`s</p></Link></li>
        <li><Link to="/map"><p>Minsk`s cinemas</p></Link></li>
        <li><Link to="*"><p>Recommendations</p></Link></li></ul></div>
        <div><input class="poisk" type="text"></input><input type="image" src={lupa} class="lupa" alt="Поиск" title="Поиск"></input>
        <img src={man} class="man"></img><p>Enter</p></div></header>
        
          <section>
            <Switch>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/events/:id">
                <WeeeklyFilms />
              </Route>
        
              <Route path="/map">
              <Map />
              </Route>
              <Route path="/">
                <WeeeklyFilms />
                <Map />
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>

          <footer>
  
                <div >

                    <span> DobriyCinema corp</span>
                </div>
                <div >
                  <h4>We in social networks</h4>
                    <ul>
                        <li>Telephone: +375-17-312-54-23</li>
                        <li>E-mail: dobriycinema@gmail.com</li>
                    </ul>
                </div>
                <div >
                  <h4>Conact us</h4>
                    <ul>
                        <li>Telephone: +375-17-312-54-23</li>
                        <li>E-mail: dobriycinema@gmail.com</li>
                    </ul>
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