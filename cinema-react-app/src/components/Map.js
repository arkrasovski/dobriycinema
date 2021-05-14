import React from "react";
import * as Api from "typescript-fetch-api";
import map_img from "./map.jpg";

const api = new Api.DefaultApi();

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { map: [] };

    this.handleReload = this.handleReload.bind(this); //это вообще лишнее , так влад сказал
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.map({ date: "" });
    this.setState({ map: response }); //--------------------------------------
  }

  render() {
    return (
      <div class="map-component">
        <h2>Today in Minsk`s cinemas</h2>
        <img src={map_img} class="map" alt="map" />
        <ol class="map-table">
          {this.state.map.map((event) => (
            <li class="map-items">
              <h3>Title: {event.title}</h3>
              <h4>Free sits: {event.sits}</h4>
              <h4>Price: {event.price}</h4>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Map;
