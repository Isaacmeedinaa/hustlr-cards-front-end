import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../store/actions/user";
import { clearRegisterAuthError } from "../../../store/actions/authErrors/registerAuthError";
import { clearRegisterValidationErrors } from "../../../store/actions/validationErrors/registerValidationErrors";

import Loader from "react-loader-spinner";

import AuthCard from "./AuthCard";

import { formFields } from "../../../constants/formFields";

import "./AuthPages.css";
import "../../../constants/colors.css";

const RegisterPage = (props) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const registerLoader = useSelector((state) => state.registerLoader);
  const registerAuthError = useSelector((state) => state.registerAuthError);
  const registerValidationErrors = useSelector(
    (state) => state.registerValidationErrors
  );

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  useEffect(() => {
    const history = props.history;

    if (auth.isAuthenticated) {
      history.push("/home");
    }
  }, [auth, props.history]);

  useEffect(() => {
    return () => {
      dispatch(clearRegisterAuthError());
      dispatch(clearRegisterValidationErrors());
    };
  }, [dispatch]);

  useEffect(() => {
    const emailError = registerValidationErrors.find(
      (validationError) => validationError.field === formFields.registerEmail
    );

    if (emailError) {
      setEmailError(emailError);
    } else {
      setEmailError(emailError);
    }

    const usernameError = registerValidationErrors.find(
      (validationError) => validationError.field === formFields.registerUsername
    );

    if (usernameError) {
      setUsernameError(usernameError);
    } else {
      setUsernameError(usernameError);
    }

    const passwordError = registerValidationErrors.find(
      (validationError) => validationError.field === formFields.registerPassword
    );

    if (passwordError) {
      setPasswordError(passwordError);
    } else {
      setPasswordError(passwordError);
    }

    const confirmPasswordError = registerValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.registerConfirmPassword
    );

    if (confirmPasswordError) {
      setConfirmPasswordError(confirmPasswordError);
    } else {
      setConfirmPasswordError(confirmPasswordError);
    }
  }, [registerValidationErrors]);

  const registerSubmitHandler = (event) => {
    event.preventDefault();

    const history = props.history;

    dispatch(
      userRegister(email, username, true, password, confirmPassword, history)
    );
  };

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
          {registerAuthError ? (
            <p className="auth-error-text">{registerAuthError}</p>
          ) : null}
          {registerValidationErrors.length > 0 ? (
            <p className="auth-error-text">Please fix the errors below.</p>
          ) : null}
          <form onSubmit={registerSubmitHandler}>
            <input
              className="block auth-input full-width"
              placeholder="Email"
              style={{
                border: emailError ? "solid 1px red" : null,
                marginTop: "0px !important",
              }}
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailError ? (
              <p className="register-error-text">{emailError.message}</p>
            ) : null}
            <input
              className="block auth-input full-width"
              style={{ border: usernameError ? "solid 1px red" : null }}
              placeholder="Username"
              name="username"
              type="name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {usernameError ? (
              <p className="register-error-text">{usernameError.message}</p>
            ) : null}
            <input
              className="block auth-input full-width"
              style={{
                border:
                  passwordError || confirmPasswordError
                    ? "solid 1px red"
                    : null,
              }}
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError ? (
              <p className="register-error-text">{passwordError.message}</p>
            ) : null}
            <input
              className="block auth-input full-width"
              style={{ border: confirmPasswordError ? "solid 1px red" : null }}
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {confirmPasswordError ? (
              <p className="register-error-text">
                {confirmPasswordError.message}
              </p>
            ) : null}
            <button
              type="submit"
              className="primary-color-bg primary-light block auth-btn full-width"
            >
              {registerLoader ? (
                <Loader type="TailSpin" color="#fff" width={28} height={28} />
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
};

export default RegisterPage;
