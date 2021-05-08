import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };

    this.handleReload = this.handleReload.bind(this);//это вообще лишнее , так влад сказал
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.user({ date: "" });
    this.setState({ user: response }); //--------------------------------------
  }

  render() {
    return (
      <div >
        <h2>
          Today in Minsk`s cinemas</h2>

        <ol >
          {this.state.user.map((event) => (
            <li>
              <h3>Title: {event.image}</h3>
              <h4>Free sits: {event.phone}</h4>
              <h4>Price: {event.email}</h4>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default User;