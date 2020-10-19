import React, { Component, Fragment } from "react";

import SideToolbar from "../UI/SideToolbar";
import UserSettings from "../UI/settings/UserSettings";
import SubscriptionSettings from "../UI/settings/SubscriptionSettings";

import "./pages.css";
import "../../constants/colors.css";

class SettingsPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid h-100 no-padding">
          <div className="grid-container-settings">
            <SideToolbar
              pathname={this.props.location.pathname}
              history={this.props.history}
            />
            <div className="secondary-light-bg user-settings-col-wrapper">
              <div className="user-settings-col-container">
                <UserSettings />
              </div>
            </div>
            <div className="secondary-light-bg subscription-settings-col-wrapper">
              <div className="subscription-settings-col-container">
                <SubscriptionSettings />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SettingsPage;
