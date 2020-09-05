import React, { Component } from "react";

import { connect } from "react-redux";
import { userLogin } from "../../store/actions/user";

import AuthCard from "../UI/AuthCard";
import AuthFooter from "../UI/AuthFooter";

import "./pages.css";
import "../../constants/colors.css";

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      isChecked: false,
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      this.props.history.push("/home");
    } else {
      return;
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
      <div className="secondary-light-bg login-auth-container">
        <div>
          <div className="auth-info">
            <h1 className="primary-color app-name">hustlr.cards</h1>
            <h5 className="auth-text">Login to continue</h5>
          </div>
          <AuthCard>
            {this.props.errors.length !== 0
              ? this.props.errors.map((error, index) => (
                  <p key={index} className="primary-color auth-error-text">
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username, password, history) =>
      dispatch(userLogin(username, password, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
