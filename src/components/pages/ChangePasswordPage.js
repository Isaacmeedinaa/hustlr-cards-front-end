import React, { Component } from "react";
import { Link } from "react-router-dom";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { userChangePasswordCode } from "../../store/actions/user";

import AuthCard from "../UI/AuthCard";
import AuthFooter from "../UI/AuthFooter";

import "./pages.css";
import "../../constants/colors.css";

class ChangePasswordPage extends Component {
  state = {
    username: "",
    recoveryCode: "",
    newPassword: "",
  };

  componentDidMount() {
    const history = this.props.history;

    if (this.props.auth.isAuthenticated) {
      history.push("/home");
    }
  }

  inputChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  changePasswordSubmitHandler = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const recoveryCode = this.state.recoveryCode;
    const newPassword = this.state.newPassword;
    const history = this.props.history;

    this.props.userChangePasswordCode(
      username,
      recoveryCode,
      newPassword,
      history
    );
  };

  render() {
    return (
      <div className="secondary-light-bg auth-container">
        <div>
          <div className="auth-info">
            <h1 className="primary-color app-name">hustlr.cards</h1>
            <h5 className="auth-text">
              A recovery code has been sent to your email!
            </h5>
          </div>
          <AuthCard>
            {this.props.changePasswordCodeErrors.length !== 0
              ? this.props.changePasswordCodeErrors.map((error, index) => (
                  <p key={index} className="auth-error-text">
                    {error}
                  </p>
                ))
              : null}
            <form onSubmit={this.changePasswordSubmitHandler}>
              <input
                className="block auth-input full-width"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.inputChangeHandler}
              />
              <input
                className="block auth-input full-width"
                placeholder="Recovery Code"
                name="recoveryCode"
                value={this.state.recoveryCode}
                onChange={this.inputChangeHandler}
              />
              <input
                className="block auth-input full-width"
                placeholder="New Password"
                name="newPassword"
                type="password"
                value={this.state.newPassword}
                onChange={this.inputChangeHandler}
              />
              <button
                type="submit"
                className="primary-color-bg primary-light block auth-btn full-width"
              >
                {this.props.changePasswordCodeLoader ? (
                  <Loader type="TailSpin" color="#fff" width={15} height={15} />
                ) : (
                  "Change Password"
                )}
              </button>
            </form>
            <div className="question-link-container-one">
              <p className="question-one">Remembered Password?</p>
              <Link className="primary-color link-one" to="/login">
                Back to Login
              </Link>
            </div>
            <div className="question-link-container-two">
              <p className="question-two">New to Hustlr?</p>
              <Link className="primary-color link-two" to="/register">
                Join us today!
              </Link>
            </div>
          </AuthCard>
          <AuthFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    changePasswordCodeErrors: state.changePasswordCodeErrors,
    changePasswordCodeLoader: state.changePasswordCodeLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userChangePasswordCode: (username, recoveryCode, newPassword, history) =>
      dispatch(
        userChangePasswordCode(username, recoveryCode, newPassword, history)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordPage);
