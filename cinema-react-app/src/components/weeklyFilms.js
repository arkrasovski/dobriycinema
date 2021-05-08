import React from "react";
import * as Api from "typescript-fetch-api";
import moment from "moment";
import { withRouter } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
const api = new Api.DefaultApi();

class WeeeklyFilms extends React.Component {
  constructor(props) {
    super(props);

    const id = this.props.match?.params.id || moment().format("YYYY-MM-DD");
    console.log(id);

    this.state = {
      events: [],
      date: id,
    };

    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const id = this.props.match?.params.id || moment().format("YYYY-MM-DD");
    const response = await api.weeklyevents({ date: id });
    this.setState({ events: response });

    // const ul = Array.from(document.querySelectorAll("body #root div.App section div.day-content ul li p"));
    // console.log(ul);
    // ul.forEach((li) => {
    //   li.addEventListener("click", (event) => {
    //     setTimeout(() => {
    //       console.log(event);
    //       this.handleReload();
    //       console.log('jgnfnjk')

    //     }, 0);
    //   })
    // });
  }

  render() {
    return (
      <div className="day-content">
        <h2>Let's watch a movie this week</h2>
        <ul class="links">
          <li>
            <Link to="/events/monday">
              <button onClick={this.handleReload}>Monday</button>
            </Link>
          </li>

          <li>
            <Link to="/events/tuesday">
              <button onClick={this.handleReload}>Tuesday</button>
            </Link>
          </li>

          <li>
            <Link to="/events/wednesday">
              <button onClick={this.handleReload}>Wednesday</button>
            </Link>
          </li>
          <li>
            <Link to="/events/thursday">
              <button onClick={this.handleReload}>Thursday</button>
            </Link>
          </li>
          <li>
            <Link to="/events/friday">
              <button onClick={this.handleReload}>Friday</button>
            </Link>
          </li>
          <li>
            <Link to="/events/saturday">
              <button onClick={this.handleReload}>Saturday</button>
            </Link>
          </li>
          <li>
            <Link to="/events/sunday">
              <button onClick={this.handleReload}>Sunday</button>
            </Link>
          </li>
        </ul>

        {/* <h2>Today {' ' + this.state.events.map((e) => e.date[0].toUpperCase() + e.date.slice(1, e.date.length)) +' '} let`s see
      </h2> */}
        <h2>{this.state.events.map((e) => e.date)}</h2>
        <ul>
          {this.state.events.map((event, index) => (
            <li>
              <p>{event.name}</p>
              <img src={event.image}></img>
              <p>{event.description}</p>
              <p>
                Minimal cost right now is <b>{event.minCost}</b>
              </p>
              <p>
                {event.cinemaName} is situated at the {event.cinemaLocation}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(WeeeklyFilms);
