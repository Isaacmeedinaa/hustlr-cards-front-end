import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../constants/colors.css";
import "./landingUI.css";

class LandingLeftSide extends Component {

  render() {
    return (
      <div className="landing-left-side-wrapper">
        <h6 className="landing-left-side-header-text">
          <span className="primary-color landing-left-side-header-text-span">
            hustlr.cards
          </span>{" "}
          is the landing page for your side-hustle
        </h6>
        <p className="landing-left-side-small-text">
          All of your relevant information in one convenient hustlr card:
        </p>
        <div className="landing-items-container">
          <ul>
            <li>Products &amp; Services</li>
            <li>Photo Gallery</li>
            <li>Pricing</li>
            <li>Social Media Links</li>
            <li>Contact information</li>
            <li>And more...</li>
          </ul>
        </div>
        <p className="landing-left-side-form-text">
          Join our beta testing team to start using the app!
          <Link
              to="/register"
              className="landing-left-side-form-button"
            >
              Register
          </Link>
        </p>
      </div>
    );
  }
}

export default LandingLeftSide;
