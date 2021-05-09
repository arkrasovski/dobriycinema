import React from "react";
import * as Api from "typescript-fetch-api";
import edit from "../images/edit.svg";
import ticket from "../images/Ticket.svg";
import strelka from "../images/strelka.svg";
import wallet from "../images/Wallet.svg";
import ears from "../images/ears.svg";
import setting from "../images/Setting.svg";
import discount from "../images/Discount.svg";
import logout from "../images/Logout.svg";
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
      <div className = "userComponent">
        <div class="hello">
          {this.state.user.map((event) => (<h2>Welcome, {event.name}!</h2>
          ))}
          <span><img src={edit}></img> Edit</span>
        </div>
        
        {this.state.user.map((event) => (<img src={event.image}></img>))}
        <div className="userInfo">
        {this.state.user.map((event) => (<div>{event.email}</div>))}
        {this.state.user.map((event) => (<div>{event.phone}</div>))}
        </div>
          
            <div className="userIcons">
              <div>
                <img src={ticket}></img>
                <span>Tickets</span>
              </div>
              <div>
                <img src={strelka}></img>
                <span>History</span>
              </div>
              <div>
                <img src={wallet}></img>
                <span>Payments</span>
              </div>
              <div>
                <img src={discount}></img>
                <span>Discount</span>
              </div>
              <div>
                <img src={ears}></img>
                <span>Help</span>
              </div>
              <div>
                <img src={setting}></img>
                <span>Settings</span>
              </div>
            </div>
            <span><img src={logout}></img> Logout</span>
      </div>
    );
  }
}

export default User;