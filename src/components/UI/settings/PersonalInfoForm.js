import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../../store/actions/user";
import { hideUserUpdatedNotification } from "../../../store/actions/notifications/userUpdatedNotifications";
import { clearUpdateUserAuthError } from "../../../store/actions/authErrors/updateUserAuthError";
import { clearUpdateUserValidationErrors } from "../../../store/actions/validationErrors/updateUserValidationErrors";
import { showToast } from "../Toasts";

import { formFields } from "../../../constants/formFields";

import Loader from "react-loader-spinner";

import MdArrowDropup from "react-ionicons/lib/MdArrowDropup";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";

import "../../../constants/colors.css";
import "./SettingsUI.css";

const PersonalInfoForm = () => {
  const dispatch = useDispatch();

  const firstNameRedux = useSelector((state) => state.user.firstName);
  const lastNameRedux = useSelector((state) => state.user.lastName);
  const emailRedux = useSelector((state) => state.user.email);
  const usernameRedux = useSelector((state) => state.user.username);
  const isHustlrRedux = useSelector((state) => state.user.isHustlr);
  const userUpdatingLoader = useSelector((state) => state.userUpdatingLoader);
  const userUpdatedNotifications = useSelector(
    (state) => state.userUpdatedNotifications
  );
  const updateUserAuthError = useSelector((state) => state.userUpdateAuthError);
  const updateUserValidationErrors = useSelector(
    (state) => state.updateUserValidationErrors
  );

  const [firstName, setFirstName] = useState(firstNameRedux);
  const [lastName, setLastName] = useState(lastNameRedux);
  const [email, setEmail] = useState(emailRedux);
  const [username, setUsername] = useState(usernameRedux);
  const [isHustlr] = useState(isHustlrRedux);
  const [showForm, setShowForm] = useState(true);
  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  useEffect(() => {
    const usernameError = updateUserValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.personalInfoUsername
    );

    if (usernameError) {
      setUsernameError(usernameError);
    } else {
      setUsernameError(usernameError);
    }

    const emailError = updateUserValidationErrors.find(
      (validationError) =>
        validationError.field === formFields.personalInfoEmail
    );

    if (emailError) {
      setEmailError(emailError);
    } else {
      setEmailError(emailError);
    }
  }, [updateUserValidationErrors]);

  useEffect(() => {
    return () => {
      dispatch(clearUpdateUserAuthError());
      dispatch(clearUpdateUserValidationErrors());
    };
  }, [dispatch]);

  useEffect(() => {
    if (userUpdatedNotifications.show) {
      showToast(
        userUpdatedNotifications.success,
        userUpdatedNotifications.message
      );
      dispatch(hideUserUpdatedNotification());
    }
  }, [userUpdatedNotifications, dispatch]);

  const onPersonalInfoFormSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(updateUser(firstName, lastName, username, email, isHustlr));
  };

  return (
    <Fragment>
      <div
        className="personal-info-form-header-btn-container"
        onClick={() => setShowForm((showForm) => !showForm)}
      >
        <h5 className="user-settings-header">Personal Information</h5>
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
          className="personal-info-form-container"
          onSubmit={onPersonalInfoFormSubmitHandler}
        >
          {updateUserAuthError ? (
            <div style={{ paddingTop: "20px" }}>
              <p className="card-form-error-text">{updateUserAuthError}</p>
            </div>
          ) : null}
          {updateUserValidationErrors.length > 0 ? (
            <div style={{ paddingTop: "20px" }}>
              <p className="card-form-error-text">
                Please fix the errors below.
              </p>
            </div>
          ) : null}
          <div className="personal-info-form-group-fields">
            <input
              className="personal-info-form-input-field"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <input
              className="personal-info-form-input-field"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="personal-info-form-group-fields">
            <input
              className="personal-info-form-input-field"
              style={{ border: usernameError ? "solid 1px red" : null }}
              name="username"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              className="personal-info-form-input-field"
              style={{ border: emailError ? "solid 1px red" : null }}
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          {usernameError || emailError ? (
            <div className="personal-info-input-error-texts-container">
              {usernameError ? (
                <p
                  className="personal-info-input-error-text"
                  id="personalInfoInputErrorEmail"
                >
                  {usernameError.message}
                </p>
              ) : null}
              {emailError ? (
                <p
                  className="personal-info-input-error-text"
                  id="personalInfoInputErrorUsername"
                >
                  {emailError.message}
                </p>
              ) : null}
            </div>
          ) : null}
          <button className="white-text personal-info-form-button">
            {userUpdatingLoader ? (
              <Loader type="TailSpin" color="#fff" width={28} height={28} />
            ) : (
              "Update Personal Information"
            )}
          </button>
        </form>
      ) : null}
    </Fragment>
  );
};

export default PersonalInfoForm;
