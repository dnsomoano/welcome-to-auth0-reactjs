import React, { Component } from "react";
import Auth from "../Auth/Auth.js";

const auth = new Auth();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: {
        isLoggedIn: false
      }
    };
  }

  componentDidMount() {
    if (auth.isAuthenticated()) {
      auth.getProfile((err, profile) => {
        this.setState({
          authed: {
            isLoggedIn: true
            // profile
          }
        });
      });
    }
  }

  login = () => {
    auth.login();
  };

  logout = () => {
    auth.logout();
  };

  render() {
    let button = <h3>bubble</h3>;

    if (this.state.authed.isLoggedIn) {
      button = (
        <h3>
          Welcome {this.state.authed.profile}!
          <a onClick={this.logout} className="logout-button">
            not you?
          </a>
        </h3>
      );
    }
    return (
      <div>
        {button}
        <section>Your information is below:</section>
      </div>
    );
  }
}

export default Dashboard;
