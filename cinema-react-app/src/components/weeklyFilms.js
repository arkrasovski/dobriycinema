import React from 'react';
import * as Api from 'typescript-fetch-api'
import moment from 'moment'
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

class EventsTable extends React.Component {

  constructor(props) {
    super(props);

    const id = this.props.match?.params.id || moment().format('YYYY-MM-DD');
    // console.log(id);

    const ul = Array.from(document.querySelectorAll("body #root div nav ul li a"));
    ul.forEach((e) => {
      e.addEventListener("click", (event) => {
        setTimeout(() => {
          this.handleReload();
        }, 1000);
      })
    });
    this.state = {
      events: [],
      date: id
    };

    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }


  async handleReload(event) {
    const id = this.props.match?.params.id || moment().format('YYYY-MM-DD');
    const response = await api.weeklyevents({ date: id });
    this.setState({ events: response });
  }



  render() {
    return <div className="day-content">
      <h2>Let's watch a movie this week</h2>
      <ul class="links">

<li>
  <Link to="/events/monday"><p>Monday</p></Link>
</li>

<li>
  <Link to="/events/tuesday"><p>Tuesday</p></Link>
</li>

<li>
  <Link to="/events/wednesday"><p>Wednesday</p></Link>
</li>
<li>
  <Link to="/events/thursday"><p>Thursday</p></Link>
</li>
<li>
  <Link to="/events/friday"><p>Friday</p></Link>
</li>
<li>
  <Link to="/events/saturday"><p>Saturday</p></Link>
</li>
<li>
  <Link to="/events/sunday"><p>Sunday</p></Link>
</li>

</ul>

      <h2>Today {' ' + this.state.events.map((e) => e.date[0].toUpperCase() + e.date.slice(1, e.date.length)) +' '} let`s see
      </h2>

      <ul>
        {this.state.events.map((event) =>
          <li>
            <p>{event.name}</p>
            <img src={event.image}></img>
            <p>{event.description}</p>
            <p>Minimal cost right now is <b>{event.minCost}</b></p>
            <p>{event.cinemaName} is situated at the {event.cinemaLocation}</p>
          </li>
        )}
      </ul>
    
    </div>
    
  }
}

export default withRouter(EventsTable);