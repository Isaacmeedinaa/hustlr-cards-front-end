import React, { Component } from "react";

import "../../../constants/colors.css";
import "./landingUI.css";

class LandingLeftSide extends Component {

  render() {
    return (
      <div className="landing-left-side-wrapper">
        <h1 className="landing-left-side-header-text">
          <span className="primary-color landing-left-side-header-text-span">
            hustlr.cards
          </span>{" "}
          is the app for side hustlers
        </h1>
        <p className="landing-left-side-small-text">
          Create your hustlr card today in 5 minutes and showcase what your side hustle is all about!
        </p>
        <p className="landing-left-side-form-text">
          Join our beta testing team to start using the app!
          <a
            className="landing-left-side-form-button"
            href="mailto:support@hustlr.cards?subject=Please add me to the beta team!&body=Hi! I would like to start using hustlr.cards as a beta tester!"
          >
            Join Us
          </a>
        </p>
      </div>
    );
  }
}

export default LandingLeftSide;
