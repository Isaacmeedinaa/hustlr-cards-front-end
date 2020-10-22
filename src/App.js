import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";
import { fetchIndustries } from "./store/actions/industries";
import { userAutoLogin } from './store/actions/user';
import { setIsNotAuthenticated } from './store/actions/auth';

import IdleTimer from "react-idle-timer";

import "./App.css";

import LandingPage from "./components/pages/LandingPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import SettingsPage from "./components/pages/SettingsPage";
import SupportPage from "./components/pages/SupportPage";
import ShowCardPage from "./components/pages/ShowCardPage";
import ProtectedRoute from "./components/hoc/ProtectedRoute";

class App extends Component {
  constructor() {
    super();

    this.idleTimer = null;
    this.handleOnAction = this.handleOnAction.bind(this);
    this.handleOnActive = this.handleOnActive.bind(this);
    this.handleOnIdle = this.handleOnIdle.bind(this);
  }

  componentDidMount() {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      this.props.userAutoLogin();
    }
    else {
      this.props.setIsNotAuthenticated();
    }

    this.props.fetchIndustries();
  }

  handleOnAction() {
    this.idleTimer.reset();
  }

  handleOnActive() {}

  handleOnIdle() {
    const userToken = localStorage.getItem("userToken");
    const userId = localStorage.getItem("userId");

    if (userToken && userId) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
    } else {
      return;
    }
  }

  render() {
    if (this.props.industriesLoader || !this.props.auth.hasCheckedAuth) {
      return null;
    }

    return (
      <Fragment>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          timeout={1800000}
          onActive={this.handleOnActive}
          onIdle={this.handleOnIdle}
          onAction={this.handleOnAction}
          debounce={250}
        />
        <Router>
          <Switch>
            <Route path="/404" component={NotFoundPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <ProtectedRoute exact path="/home" component={HomePage} isAuthenticated={this.props.auth.isAuthenticated} />
            <ProtectedRoute exact path ="/settings" component={SettingsPage} isAuthenticated={this.props.auth.isAuthenticated}/>
            <ProtectedRoute exact path="/support" component={SupportPage} isAuthenticated={this.props.auth.isAuthenticated}/>
            <Route exact path="/landing" component={LandingPage} />
            <Route exact path="/:username" component={ShowCardPage} />
            <Route exact path="/" component={LandingPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    industriesLoader: state.industriesLoader,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIndustries: () => dispatch(fetchIndustries()),
    userAutoLogin: () => dispatch(userAutoLogin()),
    setIsNotAuthenticated: () => dispatch(setIsNotAuthenticated())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
