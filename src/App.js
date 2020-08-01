import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import LandingPage from "./components/pages/LandingPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import SettingsPage from "./components/pages/SettingsPage";
import SupportPage from "./components/pages/SupportPage";
import ShowCardPage from "./components/pages/ShowCardPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/404" component={NotFoundPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/:username" component={ShowCardPage} />
          <Route exact path="/" component={LandingPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
