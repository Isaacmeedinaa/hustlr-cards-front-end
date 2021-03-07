import React, { Component } from "react";

import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { upgradeToHustlrAccount } from "../../store/actions/user"
import { hideAccountUpgradedNotification } from "../../store/actions/notifications/accountUpgradedNotifications"

import { showToast } from "./Toasts";

import "./home/HomeUI.css";

class StandardTopToolbar extends Component {

  componentDidUpdate() {
    if (this.props.accountUpgradedNotifications.show) {
      showToast(
        this.props.accountUpgradedNotifications.success,
        this.props.accountUpgradedNotifications.message
      );
      this.props.hideAccountUpgradedNotification();
    }
  }

  upgradeAccountHandler = () => {
    this.props.upgradeAccount(this.props.history);
  }

  render() {
    
    return (
      <div className="toptoolbar-wrapper">
        <div className="primary-light-bg toptoolbar">
          <div className="toptoolbar-container">
            <div className="standard-top-toolbar-upgrade-btn"
              onClick={ this.upgradeAccountHandler }>
              <span>
              { this.props.accountUpgradingLoader ? (
                <Loader type="TailSpin" color="#ffffff" width={25} height={25} />) 
                : ("Create a hustlr card")
              }
              </span>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accountUpgradingLoader: state.accountUpgradingLoader,
    accountUpgradedNotifications: state.accountUpgradedNotifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upgradeAccount: (history) => dispatch(upgradeToHustlrAccount(history)),
    hideAccountUpgradedNotification: () => dispatch(hideAccountUpgradedNotification())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StandardTopToolbar);
