import React, { Component } from "react";

import { connect } from "react-redux";
import { userForgotPassword } from "../../store/actions/user";

import AuthCard from "../UI/AuthCard";
import AuthFooter from "../UI/AuthFooter";

import "./pages.css";
import "../../constants/colors.css";

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
        <div>
          <div className="auth-info">
            <h1 className="primary-color app-name">hustlr.cards</h1>
            <h5 className="auth-text">Enter Username</h5>
          </div>
          <AuthCard>
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
              <input
                className="primary-color-bg primary-light block auth-btn full-width"
                type="submit"
                value="Submit"
              />
            </form>
            <div className="question-link-container-one">
              <p className="question-one">Remembered Password?</p>
              <a className="primary-color link-one" href="/login">
                Back to Login
              </a>
            </div>
            <div className="question-link-container-two">
              <p className="question-two">New to Hustlr?</p>
              <a className="primary-color link-two" href="/register">
                Join us today!
              </a>
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
    forgotPasswordErrors: state.forgotPasswordErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userForgotPassword: (username, history) =>
      dispatch(userForgotPassword(username, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);
