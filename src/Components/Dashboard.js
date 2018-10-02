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
            isLoggedIn: true,
            profile
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
    let button = <section>Loading...</section>;

    if (this.state.authed.isLoggedIn) {
      button = (
        <section>
          <section className="account-info">
            <section className="account-box">
              <img
                className="profile-picture"
                src={this.state.authed.profile.picture}
                alt={this.state.authed.profile.nickname}
              />
              <section className="account-name">
                Welcome {this.state.authed.profile.name}!
                <a onClick={this.logout} className="logout-button">
                  not you?
                </a>
              </section>
            </section>
          </section>
        </section>
      );
    }
    return (
      <div>
        {button}
        {/* <section>Your information is below:</section> */}
        {/* <img
          src={this.state.authed.profile.picture}
          alt={this.state.authed.profile.nickname}
        />
        <header>{this.state.authed.profile.nickname}</header>
        <header>{this.state.authed.profile.name}</header> */}
      </div>
    );
  }
}

export default Dashboard;
