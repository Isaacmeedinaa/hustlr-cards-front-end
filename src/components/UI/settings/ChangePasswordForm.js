import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changePassword } from "../../../store/actions/user";
import { hidePasswordChangedNotification } from "../../../store/actions/notifications/changePasswordNotifications";

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
  const changePasswordErrors = useSelector(
    (state) => state.changePasswordErrors
  );
  const formErrors = useSelector((state) => state.formErrors);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [currentPasswordError, setCurrentPasswordError] = useState(null);
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  useEffect(() => {
    const currentPasswordError = formErrors.find(
      (error) => error.field === formFields.changePasswordCurrentPassword
    );

    if (currentPasswordError) {
      setCurrentPasswordError(currentPasswordError);
    } else {
      setCurrentPasswordError(currentPasswordError);
    }

    const newPasswordError = formErrors.find(
      (error) => error.field === formFields.changePasswordNewPassword
    );

    if (newPasswordError) {
      setNewPasswordError(newPasswordError);
    } else {
      setNewPasswordError(newPasswordError);
    }

    const confirmPasswordError = formErrors.find(
      (error) => error.field === formFields.changePasswordConfirmPassword
    );

    if (confirmPasswordError) {
      setConfirmPasswordError(confirmPasswordError);
    } else {
      setConfirmPasswordError(confirmPasswordError);
    }
  }, [formErrors]);

  useEffect(() => {
    if (changePasswordNotifications.show) {
      dispatch(hidePasswordChangedNotification());
      displayNotification(
        changePasswordNotifications.success,
        changePasswordNotifications.message
      );
    }
  }, [changePasswordNotifications, dispatch]);

  const displayNotification = (success, message) => {
    showToast(success, message);
  };

  const onChangePasswordFormSubmit = (event) => {
    event.preventDefault();

    dispatch(changePassword(password, newPassword, confirmPassword));
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
          {changePasswordErrors ? (
            <div style={{ paddingTop: "20px" }}>
              <p className="card-form-error-text">
                Please fix the errors below.
              </p>
            </div>
          ) : null}
          <input
            className="change-password-form-input"
            style={{ border: currentPasswordError ? "solid 1px red" : null }}
            name="password"
            placeholder="Current Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {currentPasswordError ? (
            <p className="change-password-error-text">
              {currentPasswordError.message}
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
