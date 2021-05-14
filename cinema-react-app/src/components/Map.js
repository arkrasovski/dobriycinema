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

  // render() {
  //   return (
  //     <div class="map-component">
  //       <h2>Today in Minsk`s cinemas</h2>
  //       <img src={map_img} class="map" alt="map" />
  //       <ol class="map-table">
  //         {this.state.map.map((event) => (
  //           <li class="map-items">
  //             <h3>Title: {event.title}</h3>
  //             <h4>Free sits: {event.sits}</h4>
  //             <h4>Price: {event.price}</h4>
  //           </li>
  //         ))}
  //       </ol>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div class="map-wrapper">
        <div class="map">
          <h3 class="map-title">CHOOSE THE CINEMA</h3>
          <img class="map-image" src={map_img} alt="San Francisco" />
        </div>
        <ol class="map-items">
          {this.state.map.map((event, index) => (
            <li class="map-list-item">
              <span class="number">{index + 1}.</span>
              <table>
                <tr>
                  <td class="red">Title:</td>
                  <td>{event.title}</td>
                </tr>
                <tr>
                  <td class="red">Time:</td>
                  <td>{event.time}:00</td>
                </tr>
                <tr>
                  <td class="red">Seats:</td>
                  <td>{event.sits}</td>
                </tr>
              </table>
              <span class="price">{event.price} rub</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Map;
