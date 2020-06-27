import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import '../styles/app.scss';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {},
    };

    this.addCurrentUser = this.addCurrentUser.bind(this);
  }

  addCurrentUser(user) {
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route
              exact path="/"
              component={() => (<Home currentUser={this.state.currentUser} addCurrentUser={this.addCurrentUser} />)}
            />
            <Route
              exact
              path="/register"
              component={() => (
                <Register addCurrentUser={this.addCurrentUser} />)}
            />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}
