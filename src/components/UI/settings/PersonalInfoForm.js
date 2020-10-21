import React, { Component } from "react";
import { connect } from "react-redux";

import { updateUser } from '../../../store/actions/user';
import { HIDE_USER_UPDATED_NOTIFICATION } from '../../../store/actions/notifications/userUpdatedNotifications';

import $ from 'jquery';

import "../../../constants/colors.css";
import "../UI.css";

class PersonalInfoForm extends Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    username: this.props.username
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
    this.props.updateUser(this.state.firstName, this.state.lastName, this.state.username, this.state.email);
  }

  componentDidUpdate() {
    if (this.props.userUpdatedNotifications.show) {
      this.displayNotification(this.props.userUpdatedNotifications.success, this.props.userUpdatedNotifications.message);
      this.props.hideUserUpdatedNotification();
    }
  }

  displayNotification(success, message) {
    $('body').toast({
      class: success ? 'success' : 'error',
      position: 'bottom center',
      message: message,
      showIcon: success ? 'check circle' : 'exclamation',
      displayTime: 3000,
      transition: {
        showMethod   : 'fade',
        showDuration : 1000,
        hideMethod   : 'fade',
        hideDuration : 1000
      }
    });
  }

  render() {

    let settingsErrors = (this.props.settingsErrors.length > 0 ? 
      <div style={{paddingTop: '20px'}}>
        {this.props.settingsErrors.map((error, index) => (
          <p key={index} className="card-form-error-text">
            {error.message}
          </p>
        ))}
      </div> : null
    );

    return (
      <form
        className="personal-info-form-container"
        onSubmit={this.onPersonalInfoFormSubmitHandler}
      >
        <h5 className="user-settings-header">Personal Information</h5>
        {settingsErrors}
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
          value="Update Personal Information"
          type="submit"
          onClick={this.onSubmitPersonalInfoHandler}
        >
          { this.props.userUpdatingLoader ? 
            <div class="ui active white inline loader"></div> 
            : 'Update Personal Information'
          }
        </button>
      </form>
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
    settingsErrors: state.settingsErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (firstName, lastName, username, email) =>  dispatch(updateUser(firstName, lastName, username, email)),
    hideUserUpdatedNotification: () => dispatch({type: HIDE_USER_UPDATED_NOTIFICATION})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm);
