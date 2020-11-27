import React, { Component } from "react";
import { Link } from "react-router-dom";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { userForgotPassword } from "../../../store/actions/user";

import AuthCard from "./AuthCard";

import "./AuthPages.css";
import "../../../constants/colors.css";

class ForgotPasswordPage extends Component {
  state = {
    username: "",
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

  forgotPasswordSubmitHandler = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const history = this.props.history;
    this.props.userForgotPassword(username, history);
  };

  render() {
    return (
      <div className="secondary-light-bg auth-container">
        <div className="mobile-full-width">
          <AuthCard>
          <div className="auth-info">
            <Link to="/">
              <h1 className="primary-color app-name">hustlr.cards</h1>
            </Link>
            <h5 className="auth-text">Enter Username</h5>
          </div>
            {this.props.forgotPasswordErrors.length !== 0
              ? this.props.forgotPasswordErrors.map((error, index) => (
                  <p key={index} className="auth-error-text">
                    {error}
                  </p>
                ))
              : null}
            <form onSubmit={this.forgotPasswordSubmitHandler}>
              <input
                className="block auth-input full-width"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.inputChangeHandler}
              />
              <button
                type="submit"
                className="primary-color-bg primary-light block auth-btn full-width"
              >
                {this.props.forgotPasswordLoader ? (
                  <Loader type="TailSpin" color="#fff" width={28} height={28} />
                ) : (
                  "Send Email"
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
          {/* <AuthFooter /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    forgotPasswordErrors: state.forgotPasswordErrors,
    forgotPasswordLoader: state.forgotPasswordLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userForgotPassword: (username, history) =>
      dispatch(userForgotPassword(username, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);
