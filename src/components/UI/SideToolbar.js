import React, { Component } from "react";

import { connect } from "react-redux";
import { userLogout } from "../../store/actions/user";

import MdHome from "react-ionicons/lib/MdHome";
import MdSettings from "react-ionicons/lib/MdSettings";
import MdLogOut from "react-ionicons/lib/MdLogOut";
import MdHelp from "react-ionicons/lib/MdHelpCircle";
import LogoCodepen from "react-ionicons/lib/LogoCodepen";

import $ from 'jquery';

import "../../constants/colors.css";
import "./UI.css";

class SideToolbar extends Component {
  state = {
    pathname: this.props.pathname,
    primary: "#2ecc71",
    secondary: "#ccc",
  };

  componentDidMount() {
    this.setState({
      pathname: this.props.pathname,
    });
  }

  render() {
    return (
        
        <div className="primary-light-bg sidetoolbar">
          <div className="ui page dimmer sidebar-dimmer">
          <div className="content">
          
          <div className="primary-light-bg logout-modal">
            <span className="logout-modal-question">
              Are you sure you want to log out?
            </span>
            <div className="logout-modal-question-2">
              <button
                className="primary-color logout-modal-button"
                onClick={() => {
                  const history = this.props.history;
                  this.props.userLogout(history);
                }}
              >
                Yes
              </button>
              <button
                className="primary-color logout-modal-button"
                onClick={() => {
                  $('.ui.sidebar-dimmer').dimmer('hide');
                }}
              >
                No
              </button>
            </div>
          </div>
          </div>
        </div>
          <div className="sidetoolbar-icons-container">
            <div className="sidetoolbar-icon-wrapper">
              <LogoCodepen
                className="sidetoolbar-icon"
                onClick={() => {
                  this.props.history.push("/");
                }}
                fontSize="40px"
                color={this.state.primary}
              />
            </div>
            <div
              className={
                this.state.pathname !== "/home"
                  ? "sidetoolbar-icon-wrapper"
                  : "sidetoolbar-icon-wrapper selected"
              }
            >
              <MdHome
                className="sidetoolbar-icon"
                onClick={() => {
                  this.props.history.push("/home");
                }}
                fontSize="30px"
                color={
                  this.state.pathname !== "/home"
                    ? this.state.secondary
                    : this.state.primary
                }
              />
            </div>
            <div
              className={
                this.state.pathname !== "/settings"
                  ? "sidetoolbar-icon-wrapper"
                  : "sidetoolbar-icon-wrapper selected"
              }
            >
              <MdSettings
                className="sidetoolbar-icon"
                onClick={() => {
                  this.props.history.push("/settings");
                }}
                fontSize="30px"
                color={
                  this.state.pathname !== "/settings"
                    ? this.state.secondary
                    : this.state.primary
                }
              />
            </div>
            <div className="sidetoolbar-icon-wrapper">
              <MdLogOut
                className="sidetoolbar-icon"
                onClick={() => {
                  $('.ui.dimmable').dimmer('show');
                }}
                fontSize="30px"
                color={this.state.secondary}
              />
            </div>
            <div
              className={
                this.state.pathname !== "/support"
                  ? "sidetoolbar-icon-wrapper"
                  : "sidetoolbar-icon-wrapper selected"
              }
            >
              <MdHelp
                className="sidetoolbar-icon"
                onClick={() => {
                  this.props.history.push("/support");
                }}
                fontSize="30px"
                color={
                  this.state.pathname !== "/support"
                    ? this.state.secondary
                    : this.state.primary
                }
              />
            </div>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: (history) => dispatch(userLogout(history)),
  };
};

export default connect(null, mapDispatchToProps)(SideToolbar);
