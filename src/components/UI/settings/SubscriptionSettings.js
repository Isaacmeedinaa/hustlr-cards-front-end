import React, { Component } from "react";

class SubscriptionSettingsForm extends Component {
  render() {
    return (
      <div className="primary-light-bg subscription-settings-wrapper">
        <div className="subscription-settings-text-container">
          <h4>Subscription Settings</h4>
          <p>
            You currently are in the <b>BETA</b> subcription.
          </p>
        </div>
      </div>
    );
  }
}

export default SubscriptionSettingsForm;
