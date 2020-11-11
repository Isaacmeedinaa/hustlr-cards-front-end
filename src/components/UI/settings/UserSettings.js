import React, { Component } from "react";

import PersonalInfoForm from "./PersonalInfoForm";
import PaymentMethodForm from "./PaymentMethodForm";
import ChangePasswordForm from "./ChangePasswordForm";

import { Animated } from "react-animated-css";

import "../../../constants/colors.css";
import "./SettingsUI.css";

class UserSettings extends Component {
  render() {
    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg user-settings-wrapper">
          <div className="user-settings-container">
            <PersonalInfoForm />
            <PaymentMethodForm />
            <ChangePasswordForm />
          </div>
        </div>
      </Animated>
    );
  }
}

export default UserSettings;
