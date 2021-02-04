// API URL
import { API_BASE_URL } from "../../constants/urls";

// Card
import { fetchCard } from "./card";

// Notifications
import {
  USER_UPDATED_SUCCESSFULLY,
  USER_UPDATED_UNSUCCESSFULLY,
} from "./notifications/userUpdatedNotifications";
import {
  PASSWORD_CHANGED_SUCCESSFULLY,
  PASSWORD_CHANGED_UNSUCCESSFULLY,
} from "./notifications/changePasswordNotifications";

// Auth
import { SET_IS_AUTHENTICATED, SET_IS_NOT_AUTHENTICATED } from "./auth";

// Modals
import { closeAuthModal } from "./modals/authModal";
import { openReviewModal } from "./modals/reviewModal";

// Loaders
import { IS_LOGGING_IN, IS_NOT_LOGGING_IN } from "./loaders/loginLoader";
import { IS_REGISTERING, IS_NOT_REGISTERING } from "./loaders/registerLoader";
import {
  FORGOT_PASSWORD_IS_LOADING,
  FORGOT_PASSWORD_IS_NOT_LOADING,
} from "./loaders/forgotPasswordLoader";
import {
  CHANGE_PASSWORD_CODE_IS_LOADING,
  CHANGE_PASSWORD_CODE_IS_NOT_LOADING,
} from "./loaders/changePasswordCodeLoader";
import {
  USER_IS_UPDATING,
  USER_IS_NOT_UPDATING,
} from "./loaders/userUpdatingLoader";
import {
  PASSWORD_IS_UPDATING,
  PASSWORD_IS_NOT_UPDATING,
} from "./loaders/changePasswordLoader";

// Auth Errors
import {
  SET_LOGIN_AUTH_ERROR,
  REMOVE_LOGIN_AUTH_ERROR,
} from "./authErrors/loginAuthError";
import {
  SET_REGISTER_AUTH_ERROR,
  REMOVE_REGISTER_AUTH_ERROR,
} from "./authErrors/registerAuthError";
import {
  SET_FORGOT_PASSWORD_AUTH_ERROR,
  REMOVE_FORGOT_PASSWORD_AUTH_ERROR,
} from "./authErrors/forgotPasswordAuthError";
import {
  SET_CHANGE_PASSWORD_CODE_AUTH_ERROR,
  REMOVE_CHANGE_PASSWORD_CODE_AUTH_ERROR,
} from "./authErrors/changePasswordCodeAuthError";
import {
  SET_UPDATE_USER_AUTH_ERROR,
  REMOVE_UPDATE_USER_AUTH_ERROR,
} from "./authErrors/updateUserAuthError";
import {
  SET_CHANGE_PASSWORD_AUTH_ERROR,
  REMOVE_CHANGE_PASSWORD_AUTH_ERROR,
} from "./authErrors/changePasswordAuthError";
import { REMOVE_CARD_AUTH_ERROR } from "./authErrors/cardAuthError";
import { REMOVE_OFFERING_AUTH_ERROR } from "./authErrors/offeringAuthError";

// Validation Errors
import {
  SET_LOGIN_VALIDATION_ERRORS,
  REMOVE_LOGIN_VALIDATION_ERRORS,
} from "./validationErrors/loginValidationErrors";
import {
  SET_REGISTER_VALIDATION_ERRORS,
  REMOVE_REGISTER_VALIDATION_ERRORS,
} from "./validationErrors/registerValidationErrors";
import {
  SET_FORGOT_PASSWORD_VALIDATION_ERRORS,
  REMOVE_FORGOT_PASSWORD_VALIDATION_ERRORS,
} from "./validationErrors/forgotPasswordValidationErrors";
import {
  SET_CHANGE_PASSWORD_CODE_VALIDATION_ERRORS,
  REMOVE_CHANGE_PASSWORD_CODE_VALIDATION_ERRORS,
} from "./validationErrors/chagePasswordCodeValidationErrors";
import {
  SET_UPDATE_USER_VALIDATION_ERRORS,
  REMOVE_UPDATE_USER_VALIDATION_ERRORS,
} from "./validationErrors/updateUserValidationErrors";
import {
  SET_CHANGE_PASSWORD_VALIDATION_ERRORS,
  REMOVE_CHANGE_PASSWORD_VALIDATION_ERRORS,
} from "./validationErrors/changePasswordValidationErrors";
import { REMOVE_CARD_VALIDATION_ERRORS } from "./validationErrors/cardValidationErrors";
import { REMOVE_OFFERING_VALIDATION_ERRORS } from "./validationErrors/offeringValidationErrors";

export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_UPDATED = "USER_UPDATED";

export const userLogin = (username, password, history) => {
  return (dispatch) => {
    const loginData = {
      username: username,
      password: password,
    };

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(loginData),
    };

    dispatch({ type: IS_LOGGING_IN });
    fetch(`${API_BASE_URL}/login`, reqObj)
      .then((resp) => resp.json())
      .then((user) => {
        // auth error
        if (user.code === 401) {
          dispatch({ type: SET_IS_NOT_AUTHENTICATED });
          dispatch({ type: REMOVE_LOGIN_VALIDATION_ERRORS });
          dispatch({
            type: SET_LOGIN_AUTH_ERROR,
            error: "Invalid username or password",
          });
          dispatch({ type: IS_NOT_LOGGING_IN });
          return;
        }

        // validation errors
        if (user.errors) {
          dispatch({ type: SET_IS_NOT_AUTHENTICATED });
          dispatch({ type: REMOVE_LOGIN_AUTH_ERROR });
          dispatch({
            type: SET_LOGIN_VALIDATION_ERRORS,
            validationErrors: user.errors,
          });
          dispatch({ type: IS_NOT_LOGGING_IN });
          return;
        }

        dispatch({ type: REMOVE_LOGIN_AUTH_ERROR });
        dispatch({ type: REMOVE_LOGIN_VALIDATION_ERRORS });

        localStorage.setItem("userToken", user.token);
        localStorage.setItem("userId", user.user.id);

        const userId = user.user.id;
        dispatch(fetchCard(userId));

        dispatch({ type: USER_LOGIN, user: user.user });
        dispatch({ type: SET_IS_AUTHENTICATED });
        dispatch({ type: IS_NOT_LOGGING_IN });

        if (history) {
          history.push("/home");
        }

        dispatch(closeAuthModal());
        dispatch(openReviewModal());
      })
      .catch((err) => console.log(err));
  };
};

export const userAutoLogin = () => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      const reqObj = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accepts: "application/json",
        },
      };

      dispatch({ type: IS_LOGGING_IN });
      fetch(`${API_BASE_URL}/autologin`, reqObj)
        .then((resp) => resp.json())
        .then((user) => {
          // auth errors
          if (user.code === 401) {
            localStorage.clear();
            dispatch({ type: SET_IS_NOT_AUTHENTICATED });
            dispatch({ type: IS_NOT_LOGGING_IN });
            return;
          }

          dispatch({ type: SET_IS_AUTHENTICATED });

          const userId = localStorage.getItem("userId");
          dispatch(fetchCard(userId));

          dispatch({ type: USER_LOGIN, user: user });
          dispatch({ type: IS_NOT_LOGGING_IN });
        })
        .catch((err) => {
          dispatch({ type: SET_IS_AUTHENTICATED });
          dispatch({ type: IS_NOT_LOGGING_IN });
        });
    } else {
      dispatch({ type: SET_IS_AUTHENTICATED });
      dispatch({ type: IS_NOT_LOGGING_IN });
    }
  };
};

export const userRegister = (
  email,
  username,
  isHustlr,
  password,
  confirmPassword,
  history
) => {
  return (dispatch) => {
    const registerData = {
      email: email,
      username: username,
      isHustlr: isHustlr,
      password: password,
      confirmPassword: confirmPassword,
    };

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(registerData),
    };

    if (password !== confirmPassword) {
      const validationErrors = [
        { field: "ConfirmPassword", message: "Passwords do not match." },
      ];
      dispatch({
        type: SET_REGISTER_VALIDATION_ERRORS,
        validationErrors: validationErrors,
      });
      return;
    }

    dispatch({ type: IS_REGISTERING });
    fetch(`${API_BASE_URL}/register`, reqObj)
      .then((resp) => resp.json())
      .then((user) => {
        // Auth Errors
        if (user.code) {
          dispatch({ type: REMOVE_REGISTER_VALIDATION_ERRORS });
          dispatch({ type: SET_REGISTER_AUTH_ERROR, error: user.message });
          dispatch({ type: IS_NOT_REGISTERING });
          return;
        }

        // Validation Errors
        if (user.errors) {
          const firstValidationErrors = user.errors.map((error) => error);

          if (
            firstValidationErrors.some((error) => error.field === "Password")
          ) {
            const validationErrors = firstValidationErrors.filter(
              (error) => error.field !== "Password"
            );
            validationErrors.push({
              field: "Password",
              message:
                "Password must be at least 6 characters long, must contain 1 uppercase letter, and must contain 1 lowercase letter.",
            });
            dispatch({
              type: SET_REGISTER_VALIDATION_ERRORS,
              validationErrors: validationErrors,
            });
            dispatch({ type: REMOVE_REGISTER_AUTH_ERROR });

            dispatch({ type: IS_NOT_REGISTERING });
            return;
          }

          dispatch({
            type: SET_REGISTER_VALIDATION_ERRORS,
            validationErrors: firstValidationErrors,
          });
          dispatch({ type: REMOVE_REGISTER_AUTH_ERROR });
          dispatch({ type: IS_NOT_REGISTERING });
          return;
        }

        dispatch({ type: REMOVE_REGISTER_AUTH_ERROR });
        dispatch({ type: REMOVE_REGISTER_VALIDATION_ERRORS });

        localStorage.setItem("userToken", user.token);
        localStorage.setItem("userId", user.user.id);

        const userId = user.user.id;
        dispatch(fetchCard(userId));

        dispatch({ type: USER_REGISTER, user: user.user });
        dispatch({ type: SET_IS_AUTHENTICATED });

        dispatch({ type: IS_NOT_REGISTERING });

        if (history) {
          history.push("/home");
        }

        dispatch(closeAuthModal());
        dispatch(openReviewModal());
      })
      .catch((err) => {
        dispatch({ type: IS_NOT_REGISTERING });
      });
  };
};

export const userLogout = (history) => {
  return async (dispatch) => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userToken");
    localStorage.removeItem("card");
    dispatch({ type: SET_IS_NOT_AUTHENTICATED });

    dispatch({ type: REMOVE_OFFERING_AUTH_ERROR });
    dispatch({ type: REMOVE_OFFERING_VALIDATION_ERRORS });

    dispatch({ type: REMOVE_CARD_AUTH_ERROR });
    dispatch({ type: REMOVE_CARD_VALIDATION_ERRORS });

    dispatch({ type: REMOVE_UPDATE_USER_AUTH_ERROR });
    dispatch({ type: REMOVE_UPDATE_USER_VALIDATION_ERRORS });

    dispatch({ type: REMOVE_CHANGE_PASSWORD_AUTH_ERROR });
    dispatch({ type: REMOVE_CHANGE_PASSWORD_VALIDATION_ERRORS });

    await history.push("/login");

    dispatch({ type: USER_LOGOUT });
  };
};

export const updateUser = (firstName, lastName, username, email, isHustlr) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");
    const userId = localStorage.getItem("userId");

    const userData = {
      id: +userId,
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      isHustlr: isHustlr,
    };

    const reqObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(userData),
    };

    dispatch({ type: USER_IS_UPDATING });
    fetch(`${API_BASE_URL}/users`, reqObj)
      .then((resp) => resp.json())
      .then((user) => {
        // Auth Errors
        if (user.code) {
          dispatch({ type: REMOVE_UPDATE_USER_VALIDATION_ERRORS });
          dispatch({ type: SET_UPDATE_USER_AUTH_ERROR, error: user.message });
          dispatch({ type: USER_IS_NOT_UPDATING });
          return;
        }

        // Validation Errors
        if (user.errors) {
          dispatch({ type: REMOVE_UPDATE_USER_AUTH_ERROR });
          const validationErrors = user.errors.map((error) => error);
          dispatch({
            type: SET_UPDATE_USER_VALIDATION_ERRORS,
            validationErrors: validationErrors,
          });

          dispatch({ type: USER_UPDATED_UNSUCCESSFULLY });
          dispatch({ type: USER_IS_NOT_UPDATING });
          return;
        }

        dispatch({ type: REMOVE_UPDATE_USER_AUTH_ERROR });
        dispatch({ type: REMOVE_UPDATE_USER_VALIDATION_ERRORS });
        dispatch({ type: USER_UPDATED_SUCCESSFULLY });

        const userObj = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          isHustlr: user.isHustlr,
        };
        dispatch({ type: USER_UPDATED, user: userObj });
        dispatch({ type: USER_IS_NOT_UPDATING });
      })
      .catch((err) => {
        dispatch({ type: USER_IS_NOT_UPDATING });
        dispatch({ type: USER_UPDATED_UNSUCCESSFULLY });
      });
  };
};

export const userForgotPassword = (username, history) => {
  return (dispatch) => {
    const userForgotPasswordData = {
      username: username,
    };

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(userForgotPasswordData),
    };

    dispatch({ type: FORGOT_PASSWORD_IS_LOADING });
    fetch(`${API_BASE_URL}/recoverpassword`, reqObj)
      .then((resp) => {
        if (resp.ok) {
          dispatch({ type: REMOVE_FORGOT_PASSWORD_AUTH_ERROR });
          dispatch({ type: REMOVE_FORGOT_PASSWORD_VALIDATION_ERRORS });

          dispatch({ type: FORGOT_PASSWORD_IS_NOT_LOADING });
          history.push("/change-password");
          return;
        } else {
          return resp.json();
        }
      })
      .then((data) => {
        // Auth Errors
        if (data.code) {
          dispatch({ type: REMOVE_FORGOT_PASSWORD_VALIDATION_ERRORS });
          dispatch({
            type: SET_FORGOT_PASSWORD_AUTH_ERROR,
            error: data.message,
          });
          dispatch({ type: FORGOT_PASSWORD_IS_NOT_LOADING });
          return;
        }

        // Validation Errors
        if (data.errors) {
          dispatch({ type: REMOVE_FORGOT_PASSWORD_AUTH_ERROR });
          dispatch({
            type: SET_FORGOT_PASSWORD_VALIDATION_ERRORS,
            validationErrors: data.errors,
          });
          dispatch({ type: FORGOT_PASSWORD_IS_NOT_LOADING });
          return;
        }
      })
      .catch((err) => {
        dispatch({ type: FORGOT_PASSWORD_IS_NOT_LOADING });
      });
  };
};

export const userChangePasswordCode = (
  username,
  recoveryCode,
  newPassword,
  history
) => {
  return (dispatch) => {
    const userRecoverPasswordData = {
      username: username,
      recoveryCode: recoveryCode,
      newPassword: newPassword,
    };

    const reqObj = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(userRecoverPasswordData),
    };

    dispatch({ type: CHANGE_PASSWORD_CODE_IS_LOADING });
    fetch(`${API_BASE_URL}/changepassword`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        // Auth Errors
        if (data.code === 401) {
          dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
          dispatch({ type: REMOVE_CHANGE_PASSWORD_CODE_VALIDATION_ERRORS });
          dispatch({
            type: SET_CHANGE_PASSWORD_CODE_AUTH_ERROR,
            error: "Invalid recovery code.",
          });
          return;
        }

        if (data.code) {
          dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
          dispatch({ type: REMOVE_CHANGE_PASSWORD_CODE_VALIDATION_ERRORS });
          dispatch({
            type: SET_CHANGE_PASSWORD_CODE_AUTH_ERROR,
            error: data.message,
          });
          return;
        }

        // Validation Errors
        if (data.errors) {
          dispatch({ type: REMOVE_CHANGE_PASSWORD_CODE_AUTH_ERROR });
          const firstValidationErrors = data.errors.map((error) => error);

          if (
            firstValidationErrors.some((error) => error.field === "NewPassword")
          ) {
            const validationErrors = firstValidationErrors.filter(
              (error) => error.field !== "NewPassword"
            );
            validationErrors.push({
              field: "NewPassword",
              message:
                "New password must be at least 6 characters long, must contain 1 uppercase letter, and must contain 1 lowercase letter.",
            });
            dispatch({
              type: SET_CHANGE_PASSWORD_CODE_VALIDATION_ERRORS,
              validationErrors: validationErrors,
            });
            dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
            return;
          }

          dispatch({
            type: SET_CHANGE_PASSWORD_CODE_VALIDATION_ERRORS,
            validationErrors: firstValidationErrors,
          });
          dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
          return;
        }

        dispatch({ type: REMOVE_CHANGE_PASSWORD_CODE_AUTH_ERROR });
        dispatch({ type: REMOVE_CHANGE_PASSWORD_CODE_VALIDATION_ERRORS });
        dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });

        // user login
        dispatch(userLogin(username, newPassword, history));
      })
      .catch((err) => {
        dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
      });
  };
};

export const changePassword = (oldPassword, newPassword, confirmPassword) => {
  return (dispatch, getState) => {
    dispatch({ type: PASSWORD_IS_UPDATING });

    if (!oldPassword.length === 0 || !oldPassword) {
      const validationErrors = [
        { field: "OldPassword", message: "Current password cannot be empty." },
      ];
      dispatch({
        type: SET_CHANGE_PASSWORD_VALIDATION_ERRORS,
        validationErrors: validationErrors,
      });
      dispatch({ type: PASSWORD_IS_NOT_UPDATING });
      dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
      return;
    }

    if (newPassword !== confirmPassword) {
      const validationErrors = [
        { field: "ConfirmPassword", message: "Passwords do not match." },
      ];
      dispatch({
        type: SET_CHANGE_PASSWORD_VALIDATION_ERRORS,
        validationErrors: validationErrors,
      });
      dispatch({ type: PASSWORD_IS_NOT_UPDATING });
      dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
      return;
    }

    const user = getState().user;
    const userToken = localStorage.getItem("userToken");

    const passwordData = {
      username: user.username,
      oldPassword: oldPassword,
      newPassword: newPassword,
      recoveryCode: "",
    };

    const reqObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(passwordData),
    };

    dispatch({ type: PASSWORD_IS_UPDATING });
    fetch(`${API_BASE_URL}/changepassword`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.code) {
          dispatch({ type: REMOVE_CHANGE_PASSWORD_VALIDATION_ERRORS });
          dispatch({
            type: SET_CHANGE_PASSWORD_AUTH_ERROR,
            error: "Current password is incorrect.",
          });
          dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
          dispatch({ type: PASSWORD_IS_NOT_UPDATING });
          return;
        }

        if (data.errors) {
          dispatch({ type: REMOVE_CHANGE_PASSWORD_AUTH_ERROR });
          const validationErrors = [
            {
              field: "NewPassword",
              message:
                "Password must be at least 6 characters long, must contain 1 uppercase letter, and must contain 1 lowercase letter.",
            },
          ];
          dispatch({
            type: SET_CHANGE_PASSWORD_VALIDATION_ERRORS,
            validationErrors: validationErrors,
          });
          dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
          dispatch({ type: PASSWORD_IS_NOT_UPDATING });
          return;
        }

        dispatch({ type: REMOVE_CHANGE_PASSWORD_AUTH_ERROR });
        dispatch({ type: REMOVE_CHANGE_PASSWORD_VALIDATION_ERRORS });

        dispatch({ type: PASSWORD_CHANGED_SUCCESSFULLY });
        dispatch({ type: PASSWORD_IS_NOT_UPDATING });
      })
      .catch((err) => {
        dispatch({ type: PASSWORD_IS_NOT_UPDATING });
        dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
      });
  };
};
