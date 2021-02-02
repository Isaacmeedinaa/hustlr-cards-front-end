import React, { Fragment, useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { userRegister } from "../../../../store/actions/user";

import Loader from "react-loader-spinner";

import { formFields } from "../../../../constants/formFields";

import "./modals.css";

const RegisterModalForm = (props) => {
  const dispatch = useDispatch();

  const registerErrors = useSelector((state) => state.registerErrors);
  const registerLoader = useSelector((state) => state.registerLoader);
  const formErrors = useSelector((state) => state.formErrors);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  useEffect(() => {
    const emailError = formErrors.find(
      (formError) => formError.field === formFields.registerEmail
    );

    if (emailError) {
      setEmailError(emailError);
    } else {
      setEmailError(emailError);
    }

    const usernameError = formErrors.find(
      (formError) => formError.field === formFields.registerUsername
    );

    if (usernameError) {
      setUsernameError(usernameError);
    } else {
      setUsernameError(usernameError);
    }

    const passwordError = formErrors.find(
      (formError) => formError.field === formFields.registerPassword
    );

    if (passwordError) {
      setPasswordError(passwordError);
    } else {
      setPasswordError(passwordError);
    }

    const confirmPasswordError = formErrors.find(
      (formError) => formError.field === formFields.registerConfirmPassword
    );

    if (confirmPasswordError) {
      setConfirmPasswordError(confirmPasswordError);
    } else {
      setConfirmPasswordError(confirmPasswordError);
    }
  }, [formErrors]);

  const onRegisterFormSubmit = (event) => {
    event.preventDefault();

    dispatch(userRegister(email, username, false, password, confirmPassword));
  };

  return (
    <Fragment>
      {registerErrors ? (
        <p className="register-modal-form-errors">
          Please fix the errors below.
        </p>
      ) : null}
      <form className="register-modal-form" onSubmit={onRegisterFormSubmit}>
        <input
          className="register-modal-form-input"
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
          <p className="register-modal-form-error-text">{emailError.message}</p>
        ) : null}
        <input
          className="register-modal-form-input"
          style={{ border: usernameError ? "solid 1px red" : null }}
          placeholder="Username"
          name="username"
          type="name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {usernameError ? (
          <p className="register-modal-form-error-text">
            {usernameError.message}
          </p>
        ) : null}
        <input
          className="register-modal-form-input"
          style={{
            border:
              passwordError || confirmPasswordError ? "solid 1px red" : null,
          }}
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError ? (
          <p className="register-modal-form-error-text">
            {passwordError.message}
          </p>
        ) : null}
        <input
          className="register-modal-form-input"
          style={{ border: confirmPasswordError ? "solid 1px red" : null }}
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {confirmPasswordError ? (
          <p className="register-modal-form-error-text">
            {confirmPasswordError.message}
          </p>
        ) : null}
        <button type="submit" className="register-modal-form-register-button">
          {registerLoader ? (
            <Loader type="TailSpin" color="#fff" width={28} height={28} />
          ) : (
            "Register"
          )}
        </button>
      </form>
      <div className="register-modal-form-question-container">
        <p className="register-modal-form-question">Already have an account?</p>
        <span
          className="register-modal-form-register-text"
          onClick={() => props.setShowRegisterForm(false)}
        >
          Log In
        </span>
      </div>
    </Fragment>
  );
};

export default RegisterModalForm;
