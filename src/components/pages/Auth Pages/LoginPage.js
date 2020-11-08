import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { userLogin, userAutoLogin } from "../../../store/actions/user";

import Loader from "react-loader-spinner";

import AuthCard from "./AuthCard";
import AuthFooter from "./AuthFooter";

import "./AuthPages.css";
import "../../../constants/colors.css";

class LoginPage extends Component {
  state = {
    isChecked: false,
    username: "",
    password: "",
  };

  componentDidMount() {
    const history = this.props.history;

    if (this.props.auth.isAuthenticated) {
      history.push("/home");
    }
  }

  checkBoxChangeHandler = () => {
    this.setState((prevState) => {
      return {
        isChecked: !prevState.isChecked,
      };
    });
  };

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginSubmitHandler = async (event) => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;
    const history = this.props.history;

    this.props.userLogin(username, password, history);
  };

  render() {
    return (
      <div className="secondary-light-bg auth-container">
        <div className="mobile-full-width">
          <AuthCard>
          <div className="auth-info">
            <h1 className="primary-color app-name">hustlr.cards</h1>
            <h5 className="auth-text">Login to continue</h5>
          </div>
            {this.props.loginErrors.length !== 0
              ? this.props.loginErrors.map((error, index) => (
                  <p key={index} className="auth-error-text">
                    {error}
                  </p>
                ))
              : null}
            <form onSubmit={this.loginSubmitHandler}>
              <input
                className="block auth-input full-width"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.inputChangeHandler}
              />
              <input
                className="block auth-input full-width"
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.inputChangeHandler}
              />
              <button
                type="submit"
                className="primary-color-bg primary-light block auth-btn full-width"
              >
                {this.props.loginLoader ? (
                  <Loader type="TailSpin" color="#fff" width={28} height={28} />
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="question-link-container-one">
              <p className="question-one">Having trouble logging in?</p>
              <Link className="primary-color link-one" to="/forgot-password">
                Reset your password
              </Link>
            </div>
            <div className="question-link-container-two">
              <p className="question-two">New to Hustlr?</p>
              <Link className="primary-color link-two" to="register">
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
    loginErrors: state.loginErrors,
    loginLoader: state.loginLoader,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username, password, history) =>
      dispatch(userLogin(username, password, history)),
    userAutoLogin: (history) => dispatch(userAutoLogin(history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
