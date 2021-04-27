import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class MusicEventsTable extends React.Component {
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
        <h3>Today`s events</h3>
        {/* <button onClick={this.handleReload}>Reload</button> */}
        <table>
          {this.state.ratefilm.map((film) => (
            <div>
              <img src={film.image}></img>
              <br></br>"{film.name}"<br></br>
              Realese: {film.date}
            </div>
          ))}
        </table>
      </div>
    );
  }
}

export default MusicEventsTable;
