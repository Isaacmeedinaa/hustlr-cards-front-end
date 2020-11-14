import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { fetchIndustries } from "./store/actions/industries";
import { userAutoLogin } from "./store/actions/user";
import { setIsNotAuthenticated } from "./store/actions/auth";

import "./App.css";

import LandingPage from "./components/pages/LandingPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import LoginPage from "./components/pages/Auth Pages/LoginPage";
import RegisterPage from "./components/pages/Auth Pages/RegisterPage";
import ForgotPasswordPage from "./components/pages/Auth Pages/ForgotPasswordPage";
import ChangePasswordPage from "./components/pages/Auth Pages/ChangePasswordPage";
import HomePage from "./components/pages/HomePage";
import SettingsPage from "./components/pages/SettingsPage";
import SupportPage from "./components/pages/SupportPage";
import PublicCardPage from "./components/pages/PublicCardPage";
import ProtectedRoute from "./components/hoc/ProtectedRoute";

class App extends Component {
  componentDidMount() {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      this.props.userAutoLogin();
    } else {
      this.props.setIsNotAuthenticated();
    }

    this.props.fetchIndustries();
  }

  render() {
    if (this.props.industriesLoader || !this.props.auth.hasCheckedAuth) {
      return (
        <div className="page-loader-container">
          <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
        </div>
      );
    }

    return (
      <Router>
        <Switch>
          <Route path="/404" component={NotFoundPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/forgot-password" component={ForgotPasswordPage} />
          <Route exact path="/change-password" component={ChangePasswordPage} />
          <ProtectedRoute
            exact
            path="/home"
            component={HomePage}
            isAuthenticated={this.props.auth.isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/settings"
            component={SettingsPage}
            isAuthenticated={this.props.auth.isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/support"
            component={SupportPage}
            isAuthenticated={this.props.auth.isAuthenticated}
          />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/:pathToCard" component={PublicCardPage} />
          <Route exact path="/" component={LandingPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    industriesLoader: state.industriesLoader,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIndustries: () => dispatch(fetchIndustries()),
    userAutoLogin: () => dispatch(userAutoLogin()),
    setIsNotAuthenticated: () => dispatch(setIsNotAuthenticated()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
