import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userChangePasswordCode } from "../../../store/actions/user";
import { clearChangePasswordCodeAuthError } from "../../../store/actions/authErrors/changePasswordCodeAuthError";
import { clearChangePasswordCodeValidationErrors } from "../../../store/actions/validationErrors/chagePasswordCodeValidationErrors";

import Loader from "react-loader-spinner";

import AuthCard from "./AuthCard";

import { formFields } from "../../../constants/formFields";

import "./AuthPages.css";
import "../../../constants/colors.css";

const ChangePasswordPage = (props) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const changePasswordCodeLoader = useSelector(
    (state) => state.changePasswordCodeLoader
  );
  const changePasswordCodeAuthError = useSelector(
    (state) => state.changePasswordCodeAuthError
  );
  const changePasswordCodeValidationErrors = useSelector(
    (state) => state.changePasswordCodeValidationErrors
  );

  const [username, setUsername] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [recoveryCodeError, setRecoveryCodeError] = useState(null);
  const [newPasswordError, setNewPasswordError] = useState(null);

  useEffect(() => {
    const history = props.history;

    if (auth.isAuthenticated) {
      history.push("/home");
    }
  }, [auth, props.history]);

  useEffect(() => {
    return () => {
      dispatch(clearChangePasswordCodeAuthError());
      dispatch(clearChangePasswordCodeValidationErrors());
    };
  }, [dispatch]);

  useEffect(() => {
    const usernameError = changePasswordCodeValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.changePasswordCodeUsername
    );

    if (usernameError) {
      setUsernameError(usernameError);
    } else {
      setUsernameError(usernameError);
    }

    const recoveryCodeError = changePasswordCodeValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.changePasswordCodeCode
    );

    if (recoveryCodeError) {
      setRecoveryCodeError(recoveryCodeError);
    } else {
      setRecoveryCodeError(recoveryCodeError);
    }

    const newPasswordError = changePasswordCodeValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.changePasswordCodeNewPassword
    );

    if (newPasswordError) {
      setNewPasswordError(newPasswordError);
    } else {
      setNewPasswordError(newPasswordError);
    }
  }, [changePasswordCodeValidationErrors]);

  const changePasswordSubmitHandler = (event) => {
    event.preventDefault();

    const history = props.history;

    dispatch(
      userChangePasswordCode(username, recoveryCode, newPassword, history)
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
            <h5 className="auth-text">
              Enter the recovery code that was sent to your email.
            </h5>
          </div>
          {changePasswordCodeAuthError ? (
            <p className="auth-error-text">{changePasswordCodeAuthError}</p>
          ) : null}
          {changePasswordCodeValidationErrors.length > 0 ? (
            <p className="auth-error-text">Please fix the errors below.</p>
          ) : null}
          <form onSubmit={changePasswordSubmitHandler}>
            <input
              className="block auth-input full-width"
              style={{
                border:
                  changePasswordCodeAuthError === "Username was not found." ||
                  usernameError
                    ? "solid 1px red"
                    : null,
              }}
              placeholder="Username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {usernameError ? (
              <p className="change-password-code-error-text">
                {usernameError.message}
              </p>
            ) : null}
            <input
              className="block auth-input full-width"
              style={{
                border:
                  changePasswordCodeAuthError === "Invalid recovery code." ||
                  recoveryCodeError
                    ? "solid 1px red"
                    : null,
              }}
              placeholder="Recovery Code"
              name="recoveryCode"
              value={recoveryCode}
              onChange={(event) => setRecoveryCode(event.target.value)}
            />
            {recoveryCodeError ? (
              <p className="change-password-code-error-text">
                {recoveryCodeError.message}
              </p>
            ) : null}
            <input
              className="block auth-input full-width"
              style={{ border: newPasswordError ? "solid 1px red" : null }}
              placeholder="New Password"
              name="newPassword"
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
            {newPasswordError ? (
              <p className="change-password-code-error-text">
                {newPasswordError.message}
              </p>
            ) : null}
            <button
              type="submit"
              className="primary-color-bg primary-light block auth-btn full-width"
            >
              {changePasswordCodeLoader ? (
                <Loader type="TailSpin" color="#fff" width={28} height={28} />
              ) : (
                "Change Password"
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

export default ChangePasswordPage;
