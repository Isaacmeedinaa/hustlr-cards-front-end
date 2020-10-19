import React, { Component } from "react";
import { connect } from "react-redux";

import "../../../constants/colors.css";
import "../UI.css";

class PersonalInfoForm extends Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
  };

  onPersonalInfoFormChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onPersonalInfoFormSubmitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form
        className="personal-info-form-container"
        onSubmit={this.onPersonalInfoFormSubmitHandler}
      >
        <h5 className="user-settings-header">Personal Information</h5>
        <div className="personal-info-form-full-name-fields">
          <input
            className="personal-info-form-full-name-input"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.onPersonalInfoFormChangeHandler}
          />
          <input
            className="personal-info-form-full-name-input"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.onPersonalInfoFormChangeHandler}
          />
        </div>
        <input
          className="personal-info-form-input"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onPersonalInfoFormChangeHandler}
        />
        <input
          className="primary-color personal-info-form-button"
          value="Update Pesonal Information"
          type="submit"
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
  };
};

export default connect(mapStateToProps)(PersonalInfoForm);
