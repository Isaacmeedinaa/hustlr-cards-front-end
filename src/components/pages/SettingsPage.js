import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import SideToolbar from "../UI/SideToolbar";
import BottomToolbar from "../UI/BottomToolbar";
import UserSettings from "../UI/settings/UserSettings";
import SubscriptionSettings from "../UI/settings/SubscriptionSettings";

import Loader from "react-loader-spinner";

import "./pages.css";
import "../../constants/colors.css";

class SettingsPage extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div className="page-loader-container">
          <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
        </div>
      );
    }

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
        <BottomToolbar
          pathname={this.props.location.pathname}
          history={this.props.history}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SettingsPage);
