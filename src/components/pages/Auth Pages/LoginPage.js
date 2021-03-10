import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../../store/actions/user";
import { clearLoginAuthError } from "../../../store/actions/authErrors/loginAuthError";
import { clearLoginValidationErrors } from "../../../store/actions/validationErrors/loginValidationErrors";

import { formFields } from "../../../constants/formFields";

import Loader from "react-loader-spinner";

import AuthCard from "./AuthCard";

import "./AuthPages.css";
import "../../../constants/colors.css";

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const loginLoader = useSelector((state) => state.loginLoader);
  const loginAuthError = useSelector((state) => state.loginAuthError);
  const loginValidationErrors = useSelector(
    (state) => state.loginValidationErrors
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    const history = props.history;

    if (auth.isAuthenticated) {
      history.push("/home");
    }
  }, [dispatch, auth, props.history]);

  useEffect(() => {
    return () => {
      dispatch(clearLoginAuthError());
      dispatch(clearLoginValidationErrors());
    };
  }, [dispatch]);

  useEffect(() => {
    const usernameError = loginValidationErrors.find(
      (validationError) => validationError.field === formFields.loginUsername
    );

    if (usernameError) {
      setUsernameError(usernameError);
    } else {
      setUsernameError(usernameError);
    }

    const passwordError = loginValidationErrors.find(
      (validationError) => validationError.field === formFields.loginPassword
    );

    if (passwordError) {
      setPasswordError(passwordError);
    } else {
      setPasswordError(passwordError);
    }
  }, [loginValidationErrors]);

  const onLoginSubmit = (event) => {
    event.preventDefault();

    const history = props.history;

    dispatch(userLogin(username, password, history));
  };

  return (
    <div className="secondary-light-bg auth-container">
      <div className="mobile-full-width">
        <AuthCard>
          <div className="auth-info">
            <Link to="/">
              <h1 className="primary-color app-name">hustlr.cards</h1>
            </Link>
            <h5 className="auth-text">Login to continue</h5>
          </div>
          {loginAuthError !== 0 ? (
            <p className="auth-error-text">{loginAuthError}</p>
          ) : null}
          <form onSubmit={onLoginSubmit}>
            <input
              className="block auth-input full-width"
              style={{
                border:
                  loginAuthError || usernameError ? "solid 1px red" : null,
              }}
              placeholder="Username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {usernameError ? (
              <p className="login-error-text">{usernameError.message}</p>
            ) : null}
            <input
              className="block auth-input full-width"
              style={{
                border:
                  loginAuthError || passwordError ? "solid 1px red" : null,
              }}
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError ? (
              <p className="login-error-text">{passwordError.message}</p>
            ) : null}
            <button
              type="submit"
              className="primary-color-bg primary-light block auth-btn full-width"
            >
              {loginLoader ? (
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
        {/* <AuthFooter /> */}
      </div>
    </div>
  );
};

export default LoginPage;
