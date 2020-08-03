import React, { Component } from "react";

import AuthCard from "../UI/AuthCard";
import AuthFooter from "../UI/AuthFooter";

import "./pages.css";
import "../../constants/colors.css";

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      isChecked: false,
      email: "",
      password: "",
    };
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

  loginSubmitHandler = (event) => {
    event.preventDefault();

    // Send request to back end
  };

  render() {
    return (
      <div className="secondary-light-bg container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div>
            <div className="auth-info">
              <h1 className="primary-color app-name">hustlr.cards</h1>
              <h5 className="auth-text">Login to continue</h5>
            </div>
            <AuthCard>
              <form onSubmit={this.loginSubmitHandler}>
                {/* <label className="block auth-label">
                  Email or Phone Number
                </label> */}
                <input
                  className="block auth-input full-width"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.inputChangeHandler}
                />
                {/* <label className="block auth-label">Password</label> */}
                <input
                  className="block auth-input full-width"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.inputChangeHandler}
                />
                <div className="remember-me-container">
                  <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.checkBoxChangeHandler}
                  />
                  <label className="remember-me-label">Remember me</label>
                </div>
                <input
                  className="primary-color-bg primary-light block auth-btn full-width"
                  type="submit"
                  value="Log In"
                />
              </form>

              <div className="question-link-container-one">
                <p className="question-one">Having trouble logging in?</p>
                <a className="primary-color link-one" href="/">
                  Reset your password
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
      </div>
    );
  }
}

export default LoginPage;
