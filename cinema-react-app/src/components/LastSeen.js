import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class LastSeen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ratefilm: [] };
    this.handleReload();
    this.handleReload = this.handleReload.bind(this);
  }

  async handleReload(event) {
    const response = await api.ratefilm({ date: "" });
    this.setState({ ratefilm: response });
  }

  render() {
    return (
      <div>
        <h3>Last seen</h3>
        {/* <button onClick={this.handleReload}>Reload</button> */}
        <table>
          {this.state.ratefilm.map((film) => (
            <div>
              <img src={film.image}></img>
              <div>{film.rating}</div>
              <h1>{film.name}</h1>
              <div>Year: {film.date} </div>
              <div>Genre: {film.genre} </div>
              <div>Country: {film.country} </div>
              <div>Plot: {film.plot} </div>
            </div>
          ))}
        </table>
      </div>
    );
  }
}

export default LastSeen;
