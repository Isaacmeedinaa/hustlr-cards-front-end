import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { updateUser } from "../../../store/actions/user";
import { hideUserUpdatedNotification } from "../../../store/actions/notifications/userUpdatedNotifications";
import { clearPersonalInfoErrors } from "../../../store/actions/errors/personalInfoErrors";

import $ from "jquery";

import { Animated } from "react-animated-css";

import MdArrowDropup from "react-ionicons/lib/MdArrowDropup";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";

import "../../../constants/colors.css";
import "../UI.css";

class PersonalInfoForm extends Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    username: this.props.username,
    showForm: true,
  };

  onPersonalInfoFormChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onPersonalInfoFormSubmitHandler = (event) => {
    event.preventDefault();
  };

  onSubmitPersonalInfoHandler = (event) => {
    this.props.updateUser(
      this.state.firstName,
      this.state.lastName,
      this.state.username,
      this.state.email
    );
  };

  componentDidUpdate() {
    if (this.props.userUpdatedNotifications.show) {
      this.displayNotification(
        this.props.userUpdatedNotifications.success,
        this.props.userUpdatedNotifications.message
      );
      this.props.hideUserUpdatedNotification();
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
    let personalInfoErrors =
      this.props.personalInfoErrors.length > 0 ? (
        <div style={{ paddingTop: "20px" }}>
          {this.props.personalInfoErrors.map((error, index) => (
            <p key={index} className="card-form-error-text">
              {error.message}
            </p>
          ))}
        </div>
      ) : null;

    return (
      <Fragment>
        <div className="personal-info-form-header-btn-container">
          <h5 className="user-settings-header">Personal Information</h5>
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
              className="personal-info-form-container"
              onSubmit={this.onPersonalInfoFormSubmitHandler}
            >
              {personalInfoErrors}
              <div className="personal-info-form-group-fields">
                <input
                  className="personal-info-form-input-field"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onPersonalInfoFormChangeHandler}
                />
                <input
                  className="personal-info-form-input-field"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onPersonalInfoFormChangeHandler}
                />
              </div>
              <div className="personal-info-form-group-fields">
                <input
                  className="personal-info-form-input-field"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.onPersonalInfoFormChangeHandler}
                />
                <input
                  className="personal-info-form-input-field"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onPersonalInfoFormChangeHandler}
                />
              </div>
              <button
                className="white-text personal-info-form-button"
                onClick={this.onSubmitPersonalInfoHandler}
              >
                {this.props.userUpdatingLoader ? (
                  <div className="ui active white inline loader"></div>
                ) : (
                  "Update Personal Information"
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
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    username: state.user.username,
    userUpdatingLoader: state.userUpdatingLoader,
    userUpdatedNotifications: state.userUpdatedNotifications,
    personalInfoErrors: state.personalInfoErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (firstName, lastName, username, email) =>
      dispatch(updateUser(firstName, lastName, username, email)),
    hideUserUpdatedNotification: () => dispatch(hideUserUpdatedNotification()),
    clearErrors: () => dispatch(clearPersonalInfoErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm);
