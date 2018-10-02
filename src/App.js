import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import Auth from "./Auth/Auth.js";
import history from "./Auth/History";
import HomePage from "./Components/HomePage";
import Callback from "./Components/Callback";
import Dashboard from "./Components/Dashboard";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};
class App extends Component {
  render() {
    auth.login();
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={Dashboard} />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
