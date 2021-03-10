import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../../../store/actions/user";
import { clearLoginAuthError } from "../../../../store/actions/authErrors/loginAuthError";
import { clearLoginValidationErrors } from "../../../../store/actions/validationErrors/loginValidationErrors";

import { formFields } from "../../../../constants/formFields";

import Loader from "react-loader-spinner";

import "./modals.css";

const LoginModalForm = (props) => {
  const dispatch = useDispatch();

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

  const onLoginModalFormSubmit = (event) => {
    event.preventDefault();

    dispatch(userLogin(username, password));
  };

  return (
    <Fragment>
      {loginAuthError ? (
        <p className="login-modal-form-errors">{loginAuthError}</p>
      ) : null}
      <form
        className="login-modal-form"
        onSubmit={(event) => onLoginModalFormSubmit(event)}
      >
        <input
          className="login-modal-form-input"
          style={{
            border: loginAuthError || usernameError ? "solid 1px red" : null,
          }}
          placeholder="Username"
          type="name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {usernameError ? (
          <p className="login-error-text">{usernameError.message}</p>
        ) : null}
        <input
          className="login-modal-form-input"
          style={{
            border: loginAuthError || passwordError ? "solid 1px red" : null,
          }}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError ? (
          <p className="login-error-text">{passwordError.message}</p>
        ) : null}
        <button className="login-modal-form-login-btn" type="submit">
          {loginLoader ? (
            <Loader type="TailSpin" color="#fff" width={28} height={28} />
          ) : (
            "Login"
          )}
        </button>
      </form>
      <div className="login-modal-form-question-container">
        <p className="login-modal-form-question">Having trouble logging in?</p>
        <Link className="login-modal-form-link" to="/forgot-password">
          Reset your password
        </Link>
      </div>
      <div className="login-modal-form-question-container">
        <p className="login-modal-form-question">New to Hustlr?</p>
        <p
          className="login-modal-form-register-text"
          onClick={() => props.setShowRegisterForm(true)}
        >
          Join us today!
        </p>
      </div>
    </Fragment>
  );
};

export default LoginModalForm;
