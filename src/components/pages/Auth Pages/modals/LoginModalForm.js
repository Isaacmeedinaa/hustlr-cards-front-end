import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../../../store/actions/user";

import Loader from "react-loader-spinner";

import "./modals.css";

const LoginModalForm = (props) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginErrors = useSelector((state) => state.loginErrors);
  const loginLoader = useSelector((state) => state.loginLoader);

  const onLoginModalFormSubmit = (event) => {
    event.preventDefault();

    dispatch(userLogin(username, password));
  };

  return (
    <Fragment>
      {loginErrors.length !== 0
        ? loginErrors.map((error, index) => (
            <p key={index} className="login-modal-form-errors">
              {error}
            </p>
          ))
        : null}
      <form
        className="login-modal-form"
        onSubmit={(event) => onLoginModalFormSubmit(event)}
      >
        <input
          className="login-modal-form-input"
          placeholder="Username"
          type="name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="login-modal-form-input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
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
