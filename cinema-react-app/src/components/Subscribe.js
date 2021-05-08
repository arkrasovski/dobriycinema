import React from "react";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plans: [
        { id: 1232, description: "buy this tarif1", plan: "bronze" },
        { id: 1222, description: "buy this tarif2", plan: "silver" },
        { id: 1212, description: "buy this tarif3", plan: "gold" },
      ],
    };
  }

  render() {
    return (
      <div>
        {/*<button onClick={this.handleReload}>Reload</button>*/}
        <h2>Tarifs</h2>
        <table>
          <tr>
            <td>id</td>
            <td>План</td>
            <td>description</td>
          </tr>
          {this.state.plans.map((event) => (
            <tr>
              <td>{event.id}</td>
              <td>{event.plan}</td>
              <td>{event.description}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default withRouter(Subscribe);
