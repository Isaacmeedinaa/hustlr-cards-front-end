import React, { Component } from "react";

import AuthCard from "../UI/AuthCard";
import AuthFooter from "../UI/AuthFooter";

import "./pages.css";
import "../../constants/colors.css";

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

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  registerSubmitHandler = (event) => {
    event.preventDefault();

    // do a request here
  };

  render() {
    return (
      <div className="secondary-light-bg container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div>
            <div className="auth-info">
              <h1 className="primary-color app-name">hustlr.cards</h1>
              <h5 className="auth-text">Join us today!</h5>
            </div>

            <AuthCard>
              <form onSubmit={this.registerSubmitHandler}>
                <input
                  className="block auth-input full-width"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.inputChangeHandler}
                  required
                />
                <input
                  className="block auth-input full-width"
                  placeholder="Username"
                  name="username"
                  type="name"
                  value={this.state.username}
                  onChange={this.inputChangeHandler}
                  required
                />
                <input
                  className="block auth-input full-width"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.inputChangeHandler}
                  required
                />
                <input
                  className="block auth-input full-width"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.inputChangeHandler}
                  required
                />
                <input
                  className="primary-color-bg primary-light block auth-btn full-width"
                  type="submit"
                  value="Register"
                />
              </form>
              <div className="question-link-container-two">
                <p className="question-two">Already have an account?</p>
                <a className="primary-color link-two" href="/login">
                  Log In
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

export default RegisterPage;
