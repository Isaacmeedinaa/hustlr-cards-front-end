import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { fetchCard } from "./store/actions/card";
import { fetchIndustries } from "./store/actions/industries";
import { closeThemePicker } from "./store/actions/themePicker";

import "./App.css";
import "react-toggle/style.css";

import LandingPage from "./components/pages/LandingPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import SettingsPage from "./components/pages/SettingsPage";
import SupportPage from "./components/pages/SupportPage";
import ShowCardPage from "./components/pages/ShowCardPage";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCard();
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

  render() {
    if (this.props.loader) {
      return null;
    }

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

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    cardData: state.card.cardData,
    themePicker: state.themePicker,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCard: () => dispatch(fetchCard()),
    fetchIndustries: () => dispatch(fetchIndustries()),
    closeThemePicker: () => dispatch(closeThemePicker()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
