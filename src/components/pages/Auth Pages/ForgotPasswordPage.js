import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userForgotPassword } from "../../../store/actions/user";
import { clearForgotPasswordAuthError } from "../../../store/actions/authErrors/forgotPasswordAuthError";
import { clearForgotPasswordValidationErrors } from "../../../store/actions/validationErrors/forgotPasswordValidationErrors";

import Loader from "react-loader-spinner";

import AuthCard from "./AuthCard";

import { formFields } from "../../../constants/formFields";

import "./AuthPages.css";
import "../../../constants/colors.css";

const ForgotPasswordPage = (props) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const forgotPasswordLoader = useSelector(
    (state) => state.forgotPasswordLoader
  );
  const forgotPasswordAuthError = useSelector(
    (state) => state.forgotPasswordAuthError
  );
  const forgotPasswordValidationErrors = useSelector(
    (state) => state.forgotPasswordValidationErrors
  );

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);

  useEffect(() => {
    const history = props.history;

    if (auth.isAuthenticated) {
      history.push("/home");
    }
  }, [auth, props.history]);

  useEffect(() => {
    return () => {
      dispatch(clearForgotPasswordAuthError());
      dispatch(clearForgotPasswordValidationErrors());
    };
  }, [dispatch]);

  useEffect(() => {
    const usernameError = forgotPasswordValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.forgotPasswordUsername
    );

    if (usernameError) {
      setUsernameError(usernameError);
    } else {
      setUsernameError(usernameError);
    }
  }, [forgotPasswordValidationErrors]);

  const forgotPasswordSubmitHandler = (event) => {
    event.preventDefault();

    const history = props.history;
    dispatch(userForgotPassword(username, history));
  };

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
          {forgotPasswordAuthError ? (
            <p className="auth-error-text">{forgotPasswordAuthError}</p>
          ) : null}
          {forgotPasswordValidationErrors.length > 0 ? (
            <p className="auth-error-text">Please fix the errors below.</p>
          ) : null}
          <form onSubmit={forgotPasswordSubmitHandler}>
            <input
              className="block auth-input full-width"
              style={{
                border:
                  forgotPasswordAuthError || usernameError
                    ? "solid 1px red"
                    : null,
              }}
              placeholder="Username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {usernameError ? (
              <p className="forgot-password-error-text">
                {usernameError.message}
              </p>
            ) : null}
            <button
              type="submit"
              className="primary-color-bg primary-light block auth-btn full-width"
            >
              {forgotPasswordLoader ? (
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
};

export default ForgotPasswordPage;
