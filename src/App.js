import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";
import { fetchIndustries } from "./store/actions/industries";

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

class App extends Component {
  constructor(props) {
    super(props);

    this.idleTimer = null;
    this.handleOnAction = this.handleOnAction.bind(this);
    this.handleOnActive = this.handleOnActive.bind(this);
    this.handleOnIdle = this.handleOnIdle.bind(this);
  }

  componentDidMount() {
    this.props.fetchIndustries();
    // window.addEventListener("beforeunload", this.keepOnPage);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("beforeunload", this.keepOnPage);
  // }

  // keepOnPage = (event) => {
  //   const localStorageCard = JSON.parse(localStorage.getItem("card"));

  //   for (const key in localStorageCard) {
  //     if (localStorageCard.hasOwnProperty(key)) {
  //       if (localStorageCard[key] !== this.props.card[key]) {
  //         let message;
  //         event.returnValue = message;
  //         return message;
  //       }
  //     }
  //   }
  // };

  handleOnAction(event) {
    this.idleTimer.reset();
  }

  handleOnActive(event) {}

  handleOnIdle(event) {
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
    console.log(this.props);
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
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/support" component={SupportPage} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIndustries: () => dispatch(fetchIndustries()),
  };
};

export default connect(null, mapDispatchToProps)(App);
