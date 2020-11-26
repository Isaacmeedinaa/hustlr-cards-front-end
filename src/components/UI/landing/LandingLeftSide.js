import React, { Component } from "react";

import "../../../constants/colors.css";
import "./landingUI.css";

class LandingLeftSide extends Component {
  state = {
    email: "",
  };

  onSubmitEmailClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="landing-left-side-wrapper">
        <h1 className="landing-left-side-header-text">
          Our{" "}
          <span className="primary-color landing-left-side-header-text-span">
            goal
          </span>{" "}
          is to help you and your business{" "}
          <span className="primary-color landing-left-side-header-text-span">
            grow.
          </span>
        </h1>
        <p className="landing-left-side-small-text">
          With{" "}
          <span className="primary-color landing-left-side-small-text-span">
            Hustlr Cards
          </span>{" "}
          you can create a landing page, or a{" "}
          <span className="primary-color landing-left-side-small-text-span">
            "card"
          </span>{" "}
          for your small business. More features are arriving soon!
        </p>
        <p className="landing-left-side-form-text">
          Join our{" "}
          <span className="primary-color landing-left-side-form-text-span">
            beta testing team!
          </span>{" "}
          Just provide your email.
        </p>
        <form className="landing-left-side-form">
          <input
            className="landing-left-side-form-input"
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <button
            className="landing-left-side-form-button"
            onClick={this.onSubmitEmailClick}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default LandingLeftSide;
