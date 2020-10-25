import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { changePassword } from "../../../store/actions/user";
import { hidePasswordChangedNotification } from "../../../store/actions/notifications/changePasswordNotifications";
import { clearChangePasswordErrors } from "../../../store/actions/errors/changePasswordErrors";

import $ from "jquery";

import { Animated } from "react-animated-css";

import MdArrowDropup from "react-ionicons/lib/MdArrowDropup";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";

import "../../../constants/colors.css";
import "../UI.css";

class ChangePasswordForm extends Component {
  state = {
    password: "",
    newPassword: "",
    confirmPassword: "",
    showForm: false,
  };

  onChangePasswordFormChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangePasswordFormSubmit = (event) => {
    event.preventDefault();
  };

  onChangePasswordHandler = (event) => {
    this.props.changePassword(
      this.state.password,
      this.state.newPassword,
      this.state.confirmPassword
    );
  };

  componentDidUpdate() {
    if (this.props.changePasswordNotifications.show) {
      this.props.hidePasswordChangedNotification();
      this.displayNotification(
        this.props.changePasswordNotifications.success,
        this.props.changePasswordNotifications.message
      );
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  displayNotification(success, message) {
    $("body").toast({
      class: success ? "success" : "error",
      position: "bottom center",
      message: message,
      showIcon: success ? "check circle" : "exclamation",
      displayTime: 3000,
      transition: {
        showMethod: "fade",
        showDuration: 1000,
        hideMethod: "fade",
        hideDuration: 1000,
      },
    });
  }

  onShowFormClickHandler = async () => {
    await this.setState((prevState) => {
      return {
        showForm: !prevState.showForm,
      };
    });
  };

  render() {
    let changePasswordErrors =
      this.props.changePasswordErrors.length > 0 ? (
        <div style={{ paddingTop: "20px" }}>
          {this.props.changePasswordErrors.map((error, index) => (
            <p key={index} className="card-form-error-text">
              {error.message}
            </p>
          ))}
        </div>
      ) : null;

    return (
      <Fragment>
        <div className="change-password-form-header-btn-container">
          <h5 className="user-settings-header">Change Password</h5>
          <div className="settings-accordion-icon-container">
            {this.state.showForm ? (
              <MdArrowDropdown
                onClick={this.onShowFormClickHandler}
                color="#2ecc71"
              />
            ) : (
              <MdArrowDropup
                onClick={this.onShowFormClickHandler}
                color="#2ecc71"
              />
            )}
          </div>
        </div>
        {this.state.showForm ? (
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            isVisible={true}
            className="settings-form-animation-container"
          >
            <form
              className="change-password-form-container"
              onSubmit={this.onChangePasswordFormSubmit}
            >
              {changePasswordErrors}
              <input
                className="change-password-form-input"
                name="password"
                placeholder="Current Password"
                type="password"
                value={this.state.password}
                onChange={this.onChangePasswordFormChangeHandler}
              />
              <input
                className="change-password-form-input"
                name="newPassword"
                placeholder="New Password"
                type="password"
                value={this.state.newPassword}
                onChange={this.onChangePasswordFormChangeHandler}
              />
              <input
                className="change-password-form-input"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.onChangePasswordFormChangeHandler}
              />
              <button
                className="white-text change-password-form-button"
                onClick={this.onChangePasswordHandler}
              >
                {this.props.changePasswordLoader ? (
                  <div className="ui active white inline loader"></div>
                ) : (
                  "Change Password"
                )}
              </button>
            </form>
          </Animated>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    changePasswordLoader: state.changePasswordLoader,
    changePasswordNotifications: state.changePasswordNotifications,
    changePasswordErrors: state.changePasswordErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (oldPassword, newPassword, confirmPassword) =>
      dispatch(changePassword(oldPassword, newPassword, confirmPassword)),
    hidePasswordChangedNotification: () =>
      dispatch(hidePasswordChangedNotification()),
    clearErrors: () => dispatch(clearChangePasswordErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordForm);
