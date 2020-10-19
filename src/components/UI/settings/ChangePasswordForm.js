import React, { Component } from "react";

class ChangePasswordForm extends Component {
  state = {
    password: "",
    newPassword: "",
    confirmPassword: "",
  };

  onChangePasswordFormChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangePasswordFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form
        class="change-password-form-container"
        onSubmit={this.onChangePasswordFormSubmit}
      >
        <h5 className="user-settings-header">Change Password</h5>
        <input
          className="change-password-form-input"
          name="password"
          placeholder="Password"
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
        <input
          className="white-text change-password-form-button"
          value="Update Password"
          type="submit"
        />
      </form>
    );
  }
}

export default ChangePasswordForm;
