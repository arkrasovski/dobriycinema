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
      <div class="last-seen">
        <h3 class="last-seen-title">your last view</h3>
        {this.state.ratefilm.map((film) => (
          <div class="last-seen-wrapper">
            <div class="last-seen-image-block">
              <img class="last-seen-image" src={film.image}></img>
              <div class="last-seen-rating">
                <img
                  class="popcorn-icon"
                  src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg"
                ></img>
                {film.rating}
              </div>
            </div>
            <div class="last-seen-description">
              <h1 class="last-seen-name">{film.name}</h1>
              <div class="last-seen-grid-wrapper">
                <div class="last-seen-descriptions-headings">
                  <div>Year:</div>
                  <div>Genre:</div>
                  <div>Country:</div>
                  <div>Plot:</div>
                </div>
                <div class="last-seen-descriptions-meaning">
                  <div>{film.date}</div>
                  <div>{film.genre}</div>
                  <div>{film.country}</div>
                  <div>{film.plot}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LastSeen;
