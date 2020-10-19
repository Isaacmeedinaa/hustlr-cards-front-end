import React, { Component } from "react";

import PersonalInfoForm from "./PersonalInfoForm";
import PaymentMethodForm from "./PaymentMethodForm";
import ChangePasswordForm from "./ChangePasswordForm";

import "../../../constants/colors.css";
import "../UI.css";

class UserSettings extends Component {
  render() {
    return (
      <div className="primary-light-bg user-settings-wrapper">
        <div className="user-settings-container">
          <PersonalInfoForm />
          <PaymentMethodForm />
          <ChangePasswordForm />
        </div>
      </div>
    );
  }
}

export default UserSettings;
