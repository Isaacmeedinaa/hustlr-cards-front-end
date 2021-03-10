import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changePassword } from "../../../store/actions/user";
import { hidePasswordChangedNotification } from "../../../store/actions/notifications/changePasswordNotifications";
import { clearChangePasswordAuthError } from "../../../store/actions/authErrors/changePasswordAuthError";
import { clearChangePasswordValidationErrors } from "../../../store/actions/validationErrors/changePasswordValidationErrors";

import { showToast } from "../Toasts";

import Loader from "react-loader-spinner";

import MdArrowDropup from "react-ionicons/lib/MdArrowDropup";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";

import { formFields } from "../../../constants/formFields";

import "../../../constants/colors.css";
import "./SettingsUI.css";

const ChangePasswordForm = () => {
  const dispatch = useDispatch();

  const changePasswordLoader = useSelector(
    (state) => state.changePasswordLoader
  );
  const changePasswordNotifications = useSelector(
    (state) => state.changePasswordNotifications
  );
  const changePasswordAuthError = useSelector(
    (state) => state.changePasswordAuthError
  );
  const changePasswordValidationErrors = useSelector(
    (state) => state.changePasswordValidationErrors
  );

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  useEffect(() => {
    const newPasswordError = changePasswordValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.changePasswordNewPassword
    );

    if (newPasswordError) {
      setNewPasswordError(newPasswordError);
    } else {
      setNewPasswordError(newPasswordError);
    }

    const confirmPasswordError = changePasswordValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.changePasswordConfirmPassword
    );

    if (confirmPasswordError) {
      setConfirmPasswordError(confirmPasswordError);
    } else {
      setConfirmPasswordError(confirmPasswordError);
    }
  }, [changePasswordValidationErrors]);

  useEffect(() => {
    if (changePasswordNotifications.show) {
      dispatch(hidePasswordChangedNotification());
      displayNotification(
        changePasswordNotifications.success,
        changePasswordNotifications.message
      );
    }
  }, [changePasswordNotifications, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearChangePasswordAuthError());
      dispatch(clearChangePasswordValidationErrors());
    };
  }, [dispatch]);

  const displayNotification = (success, message) => {
    showToast(success, message);
  };

  const onChangePasswordFormSubmit = (event) => {
    event.preventDefault();

    dispatch(changePassword(password, newPassword, confirmPassword));
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <Fragment>
      <div
        className="change-password-form-header-btn-container"
        onClick={() => setShowForm((showForm) => !showForm)}
      >
        <h5 className="user-settings-header">Change Password</h5>
        <div className="settings-accordion-icon-container">
          {showForm ? (
            <MdArrowDropdown color="#2ecc71" />
          ) : (
            <MdArrowDropup color="#2ecc71" />
          )}
        </div>
      </div>
      {showForm ? (
        <form
          className="change-password-form-container"
          onSubmit={onChangePasswordFormSubmit}
        >
          {changePasswordAuthError ||
          changePasswordValidationErrors.length > 0 ? (
            <div style={{ paddingTop: "20px" }}>
              <p className="card-form-error-text">
                Please fix the errors below.
              </p>
            </div>
          ) : null}
          <input
            className="change-password-form-input"
            style={{ border: changePasswordAuthError ? "solid 1px red" : null }}
            name="password"
            placeholder="Current Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {changePasswordAuthError ? (
            <p className="change-password-error-text">
              {changePasswordAuthError}
            </p>
          ) : null}
          <input
            className="change-password-form-input"
            style={{
              border:
                newPasswordError || confirmPasswordError
                  ? "solid 1px red"
                  : null,
            }}
            name="newPassword"
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          {newPasswordError ? (
            <p className="change-password-error-text">
              {newPasswordError.message}
            </p>
          ) : null}
          <input
            className="change-password-form-input"
            style={{ border: confirmPasswordError ? "solid 1px red" : null }}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {confirmPasswordError ? (
            <p className="change-password-error-text">
              {confirmPasswordError.message}
            </p>
          ) : null}
          <button className="white-text change-password-form-button">
            {changePasswordLoader ? (
              <Loader type="TailSpin" color="#fff" width={28} height={28} />
            ) : (
              "Change Password"
            )}
          </button>
        </form>
      ) : null}
    </Fragment>
  );
};

export default ChangePasswordForm;
