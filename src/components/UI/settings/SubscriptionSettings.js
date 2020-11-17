import React, { Component } from "react";

import { Animated } from "react-animated-css";

import "./SettingsUI.css";

class SubscriptionSettingsForm extends Component {
  render() {
    return (
      <Animated animationIn="" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg subscription-settings-wrapper">
          <div className="subscription-settings-text-container">
            <h4>Subscription Settings</h4>
            <p>
              You currently are in the <b>BETA</b> subcription.
            </p>
          </div>
        </div>
      </Animated>
    );
  }
}

export default SubscriptionSettingsForm;
