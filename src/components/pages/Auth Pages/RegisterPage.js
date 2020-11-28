import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { userRegister, userAutoLogin } from "../../../store/actions/user";

import Loader from "react-loader-spinner";

import AuthCard from "./AuthCard";

import "./AuthPages.css";
import "../../../constants/colors.css";
import { REGISTER_NO_ERRORS } from "../../../store/actions/errors/registerErrors";

class RegisterPage extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  componentDidMount() {
    const history = this.props.history;

    if (this.props.auth.isAuthenticated) {
      history.push("/home");
    }
  }

  componentWillUnmount() {
    this.props.clearRegisterErrors();
  }

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  registerSubmitHandler = (event) => {
    event.preventDefault();

    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;
    const history = this.props.history;

    this.props.userRegister(
      email,
      username,
      password,
      confirmPassword,
      history
    );
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
              <h5 className="auth-text">Join us today!</h5>
            </div>
              {this.props.registerErrors.length !== 0
                ? this.props.registerErrors.map((error, index) => (
                    <p key={index} className="auth-error-text">
                      {error}
                    </p>
                  ))
                : null}
              <form onSubmit={this.registerSubmitHandler}>
                <input
                  className="block auth-input full-width"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.inputChangeHandler}
                />
                <input
                  className="block auth-input full-width"
                  placeholder="Username"
                  name="username"
                  type="name"
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
                <input
                  className="block auth-input full-width"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.inputChangeHandler}
                />
                <button
                  type="submit"
                  className="primary-color-bg primary-light block auth-btn full-width"
                >
                  {this.props.registerLoader ? (
                    <Loader
                      type="TailSpin"
                      color="#fff"
                      width={28} 
                      height={28}
                    />
                  ) : (
                    "Register"
                  )}
                </button>
              </form>
              <div className="question-link-container-two">
                <p className="question-two">Already have an account?</p>
                <Link className="primary-color link-two" to="/login">
                  Log In
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
    registerErrors: state.registerErrors,
    registerLoader: state.registerLoader,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (email, username, password, confirmPassword, history) =>
      dispatch(
        userRegister(email, username, password, confirmPassword, history)
      ),
    userAutoLogin: (history) => dispatch(userAutoLogin(history)),
    clearRegisterErrors: () => dispatch({type: REGISTER_NO_ERRORS})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
