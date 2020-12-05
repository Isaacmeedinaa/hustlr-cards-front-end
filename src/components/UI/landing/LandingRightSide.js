import React, { Component } from "react";

import "../../../constants/colors.css";
import "./landingUI.css";
import img from "./landing.png";

class LandingRightSide extends Component {
  render() {
    return (
      <div className="landing-right-side-wrapper">
        <img
          className="landing-right-side-img"
          alt="landing-page-img"
          src={img}
        />
      </div>
    );
  }
}

export default LandingRightSide;
