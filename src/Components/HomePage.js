import React, { Component } from "react";
import Auth from "../Auth/Auth.js";

const auth = new Auth();

class HomePage extends Component {
  login = () => {
    auth.login();
  };

  render() {
    return (
      <div>
        <header>Why hello there!</header>
        <button onClick={this.login}>Let's Begin</button>
      </div>
    );
  }
}

export default HomePage;
