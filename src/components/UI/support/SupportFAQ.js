import React, { Component } from "react";

import { Animated } from "react-animated-css";

import "../../../constants/colors.css";
import "../UI.css";

class SupportFAQ extends Component {
  render() {
    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg support-faq-wrapper">
          <div className="support-faq-container">
            <h5 className="support-header">FAQ's</h5>
          </div>
        </div>
      </Animated>
    );
  }
}

export default SupportFAQ;
