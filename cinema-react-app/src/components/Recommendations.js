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
      <div class="recommendations">
        <div class="tricky-buttons">
          <button class="recommendation-button recommendation-button-1" onClick={this.handleReload}>
            <img src="images/like.png"></img>
          </button>
          <button class="recommendation-button recommendation-button-2" onClick={this.handleReload}>
            <img src="images/dislike.png"></img>
          </button>
        </div>

        <h3 class="recommendations-title">Recommendations</h3>

        <div class="recommended-films">
          {this.state.recommendations.map((film) => (
            <div class="one-recommended-film">
              <div class="recommended-film-name"> {film.name} </div>
              <img class="recommended-film-image" src={film.image}></img>
              <div class="recommended-film-rating">
                <img
                  class="popcorn-icon-rec"
                  src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg"
                ></img>
                {film.rating}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recommendations;
