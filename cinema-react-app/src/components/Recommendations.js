import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recommendations: [] };
    this.handleReload();
    this.handleReload = this.handleReload.bind(this);
  }

  async handleReload(event) {
    const response = await api.recommendations({ date: "" });
    this.setState({ recommendations: response });
  }

  render() {
    return (
      <div>
        <h3>Recommendations</h3>
        <button onClick={this.handleReload}>Reload</button>
        <table>
          {this.state.recommendations.map((film) => (
            <div>
              <img src={film.image}></img>
              <div> {film.name} </div>
              <div> {film.rating} </div>
            </div>
          ))}
        </table>
      </div>
    );
  }
}

export default Recommendations;
