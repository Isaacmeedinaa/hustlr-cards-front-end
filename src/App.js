import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { userAutoLogin } from "./store/actions/user";
import { setIsNotAuthenticated } from "./store/actions/auth";

import "./App.css";

import LandingPage from "./components/pages/LandingPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import LoginPage from "./components/pages/Auth Pages/LoginPage";
import VerifyEmailPage from "./components/pages/Auth Pages/VerifyEmailPage";
import RegisterPage from "./components/pages/Auth Pages/RegisterPage";
import ForgotPasswordPage from "./components/pages/Auth Pages/ForgotPasswordPage";
import ChangePasswordPage from "./components/pages/Auth Pages/ChangePasswordPage";
import HomePage from "./components/pages/HomePage";
import SettingsPage from "./components/pages/SettingsPage";
import SupportPage from "./components/pages/SupportPage";
import PublicCardPage from "./components/pages/PublicCardPage";
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import RouteHead from "./components/hoc/RouteHead";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faDollarSign,
  faCreditCard,
  faMinusCircle,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faDollarSign, faCreditCard, faMinusCircle, faCopy);

class App extends Component {
  componentDidMount() {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      this.props.userAutoLogin();
    } else {
      this.props.setIsNotAuthenticated();
    }
  }

  render() {
    if (!this.props.auth.hasCheckedAuth) {
      return (
        <Fragment>
          <RouteHead />
          <div className="page-loader-container">
            <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <RouteHead />
        <Router>
          <Switch>
            <Route path="/404" component={NotFoundPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route
              exact
              path="/forgot-password"
              component={ForgotPasswordPage}
            />
            <Route
              exact
              path="/change-password"
              component={ChangePasswordPage}
            />
            <Route
              exact
              path="/verify-email/:token"
              component={VerifyEmailPage}
            />
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
            <Route exact path="/:pathToCard" component={PublicCardPage} />
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
    auth: state.auth,
    publicCard: state.publicCard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAutoLogin: () => dispatch(userAutoLogin()),
    setIsNotAuthenticated: () => dispatch(setIsNotAuthenticated()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
