import { fetchCard } from "./card";
import { API_BASE_URL } from "../../constants/urls";
import { IS_LOGGING_IN, IS_NOT_LOGGING_IN } from "./loaders/loginLoader";
import { IS_REGISTERING, IS_NOT_REGISTERING } from "./loaders/registerLoader";
import {
  PASSWORD_IS_UPDATING,
  PASSWORD_IS_NOT_UPDATING,
} from "./loaders/changePasswordLoader";
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
  USER_UPDATED_SUCCESSFULLY,
  USER_UPDATED_UNSUCCESSFULLY,
} from "./notifications/userUpdatedNotifications";
import {
  PERSONAL_INFO_ERRORS,
  PERSONAL_INFO_NO_ERRORS,
} from "./errors/personalInfoErrors";
import {
  CHANGE_PASSWORD_ERRORS,
  CHANGE_PASSWORD_NO_ERRORS,
} from "./errors/changePasswordErrors";
import {
  FORGOT_PASSWORD_ERRORS,
  FORGOT_PASSWORD_NO_ERRORS,
} from "./errors/forgotPasswordErrors";
import {
  CHANGE_PASSWORD_CODE_ERRORS,
  CHANGE_PASSWORD_CODE_NO_ERRORS,
} from "./errors/changePasswordCodeErrors";
import {
  PASSWORD_CHANGED_SUCCESSFULLY,
  PASSWORD_CHANGED_UNSUCCESSFULLY,
} from "./notifications/changePasswordNotifications";
import { SET_IS_AUTHENTICATED, SET_IS_NOT_AUTHENTICATED } from "./auth";
import { LOGIN_ERRORS, LOGIN_NO_ERRORS } from "./errors/loginErrors";
import { REGISTER_ERRORS, REGISTER_NO_ERRORS } from "./errors/registerErrors";
import { SET_FORM_ERRORS, REMOVE_FORM_ERRORS } from "./formErrors/formErrors";
import { CARD_NO_ERRORS } from "./errors/cardErrors";

export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_UPDATED = "USER_UPDATED";

export const userLogin = (username, password, history) => {
  return (dispatch) => {
    let messages = [];

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
      .then((resp) => {
        if (resp.status === 401) {
          messages = [];
          messages.push("Invalid username or password.");
          dispatch({
            type: LOGIN_ERRORS,
            messages: messages,
          });
          dispatch({ type: SET_IS_NOT_AUTHENTICATED });
          dispatch({ type: IS_NOT_LOGGING_IN });
        } else if (resp.status === 422) {
          messages = [];
          messages.push("Username and Password cannot be empty.");
          dispatch({
            type: LOGIN_ERRORS,
            messages: messages,
          });
          dispatch({ type: SET_IS_NOT_AUTHENTICATED });
          dispatch({ type: IS_NOT_LOGGING_IN });
        } else if (resp.ok) {
          dispatch({ type: LOGIN_NO_ERRORS });
          dispatch({ type: SET_IS_AUTHENTICATED });
          return resp.json();
        }
      })
      .then((json) => {
        localStorage.setItem("userToken", json.token);
        localStorage.setItem("userId", json.user.id);
        const userId = json.user.id;

        dispatch(fetchCard(userId));
        dispatch({ type: USER_LOGIN, user: json.user });

        history.push("/home");

        dispatch({ type: IS_NOT_LOGGING_IN });
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
        .then((resp) => {
          if (!resp.ok) {
            localStorage.clear();
            dispatch({ type: SET_IS_NOT_AUTHENTICATED });
            dispatch({ type: IS_NOT_LOGGING_IN });
          } else if (resp.ok) {
            const userId = localStorage.getItem("userId");
            dispatch({ type: SET_IS_AUTHENTICATED });
            dispatch(fetchCard(userId));
            return resp.json();
          }
        })
        .then((user) => {
          if (!user) {
            return;
          }

          dispatch({ type: USER_LOGIN, user: user });
          dispatch({ type: IS_NOT_LOGGING_IN });
        });
    } else {
      dispatch({ type: IS_NOT_LOGGING_IN });
    }
  };
};

export const userRegister = (
  email,
  username,
  password,
  confirmPassword,
  history
) => {
  return (dispatch) => {
    const registerData = {
      email: email,
      username: username,
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
      dispatch({
        type: REGISTER_ERRORS,
      });
      const formErrors = [
        { field: "ConfirmPassword", message: "Passwords do not match." },
      ];
      dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });
    } else {
      dispatch({ type: IS_REGISTERING });
      fetch(`${API_BASE_URL}/register`, reqObj)
        .then((resp) => resp.json())
        .then((user) => {
          if (user.errors) {
            const firstFormErrors = user.errors.map((error) => error);

            if (firstFormErrors.some((error) => error.field === "Password")) {
              const formErrors = firstFormErrors.filter(
                (error) => error.field !== "Password"
              );
              formErrors.push({
                field: "Password",
                message:
                  "Password must be at least 6 characters long, must contain 1 uppercase letter, and must contain 1 lowercase letter.",
              });
              dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });

              dispatch({ type: REGISTER_ERRORS });

              dispatch({ type: IS_NOT_REGISTERING });
              return;
            }

            dispatch({ type: REGISTER_ERRORS });
            dispatch({ type: SET_FORM_ERRORS, formErrors: firstFormErrors });
            dispatch({ type: IS_NOT_REGISTERING });
            return;
          }

          dispatch({ type: REGISTER_NO_ERRORS });

          localStorage.setItem("userToken", user.token);
          localStorage.setItem("userId", user.user.id);

          const userId = user.user.id;

          dispatch({ type: SET_IS_AUTHENTICATED });
          dispatch(fetchCard(userId));
          dispatch({ type: USER_REGISTER, user: user.user });

          history.push("/home");

          dispatch({ type: IS_NOT_REGISTERING });
        })
        .catch((err) => {
          dispatch({ type: IS_NOT_REGISTERING });
        });
    }
  };
};

export const userLogout = (history) => {
  return async (dispatch) => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userToken");
    localStorage.removeItem("card");
    dispatch({ type: SET_IS_NOT_AUTHENTICATED });
    dispatch({ type: REMOVE_FORM_ERRORS });
    dispatch({ type: CARD_NO_ERRORS });
    dispatch({ type: CHANGE_PASSWORD_NO_ERRORS });
    dispatch({ type: PERSONAL_INFO_NO_ERRORS });

    await history.push("/login");

    dispatch({ type: USER_LOGOUT });
  };
};

export const updateUser = (firstName, lastName, username, email) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");
    const userId = localStorage.getItem("userId");

    const userData = {
      id: +userId,
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
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
        if (user.errors) {
          dispatch({ type: PERSONAL_INFO_ERRORS, errors: user.errors });

          const formErrors = user.errors.map((error) => error);
          dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });

          dispatch({ type: USER_UPDATED_UNSUCCESSFULLY });
          dispatch({ type: USER_IS_NOT_UPDATING });
          return;
        }

        const userObj = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
        };
        dispatch({ type: USER_UPDATED, user: userObj });
        dispatch({ type: PERSONAL_INFO_NO_ERRORS });
        dispatch({ type: REMOVE_FORM_ERRORS });
        dispatch({ type: USER_IS_NOT_UPDATING });
        dispatch({ type: USER_UPDATED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: USER_IS_NOT_UPDATING });
        dispatch({ type: USER_UPDATED_UNSUCCESSFULLY });
      });
  };
};

export const userForgotPassword = (username, history) => {
  return (dispatch) => {
    let errors = [];

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
          history.push("/change-password");
          dispatch({ type: FORGOT_PASSWORD_IS_NOT_LOADING });
          return;
        } else if (resp.status === 422) {
          errors = [];
          errors.push("Username cannot be empty.");
          dispatch({ type: FORGOT_PASSWORD_ERRORS, errors: errors });
          dispatch({
            type: SET_FORM_ERRORS,
            formErrors: [
              { field: "Username", message: "Username cannot be empty." },
            ],
          });
          return;
        } else {
          dispatch({ type: FORGOT_PASSWORD_NO_ERRORS });
          return resp.json();
        }
      })
      .then((data) => {
        if (data === undefined) {
          dispatch({ type: FORGOT_PASSWORD_IS_NOT_LOADING });
        } else if (data.code === 7) {
          errors = [];
          errors.push(data.message);
          dispatch({ type: FORGOT_PASSWORD_ERRORS, errors: errors });
          dispatch({
            type: SET_FORM_ERRORS,
            formErrors: [
              { field: "Username", message: "Username cannot be found." },
            ],
          });
          dispatch({ type: FORGOT_PASSWORD_IS_NOT_LOADING });
          return;
        }
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
      .then((resp) => {
        if (resp.status === 401) {
          dispatch({ type: CHANGE_PASSWORD_CODE_ERRORS });

          const formErrors = [
            { field: "RecoveryCode", message: "Invalid recovery code." },
          ];
          dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });

          dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
          return;
        } else if (resp.status === 404) {
          dispatch({ type: CHANGE_PASSWORD_CODE_ERRORS });

          const formErrors = [
            { field: "Username", message: "Username was not found." },
          ];
          dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });

          dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
          return;
        }
        return resp.json();
      })
      .then((data) => {
        if (data === undefined) {
          dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
          return;
        }

        if (data.errors) {
          const firstFormErrors = data.errors.map((error) => error);

          if (firstFormErrors.some((error) => error.field === "NewPassword")) {
            const formErrors = firstFormErrors.filter(
              (error) => error.field !== "NewPassword"
            );
            formErrors.push({
              field: "NewPassword",
              message:
                "New password must be at least 6 characters long, must contain 1 uppercase letter, and must contain 1 lowercase letter.",
            });
            dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });

            dispatch({ type: CHANGE_PASSWORD_CODE_ERRORS });

            dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
            return;
          }

          dispatch({ type: CHANGE_PASSWORD_CODE_ERRORS });

          dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
          return;
        }

        // user login
        dispatch(userLogin(username, newPassword, history));

        dispatch({ type: CHANGE_PASSWORD_CODE_NO_ERRORS });
        dispatch({ type: CHANGE_PASSWORD_CODE_IS_NOT_LOADING });
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
      dispatch({ type: CHANGE_PASSWORD_ERRORS });
      const formErrors = [
        { field: "OldPassword", message: "Current password cannot be empty." },
      ];
      dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });
      dispatch({ type: PASSWORD_IS_NOT_UPDATING });
      dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
      return;
    }

    if (newPassword !== confirmPassword) {
      dispatch({ type: CHANGE_PASSWORD_ERRORS });
      const formErrors = [
        { field: "ConfirmPassword", message: "Passwords do not match." },
      ];
      dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });
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
      .then((resp) => {
        if (resp.status === 401) {
          const formErrors = [
            {
              field: "OldPassword",
              message: "Old password is incorrect.",
            },
          ];
          console.log(formErrors);
          dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });
          return;
        }

        return resp.json();
      })
      .then((data) => {
        if (data.errors) {
          dispatch({ type: CHANGE_PASSWORD_ERRORS });

          const formErrors = [
            {
              field: "NewPassword",
              message:
                "Password must be at least 6 characters long, must contain 1 uppercase letter, and must contain 1 lowercase letter.",
            },
          ];
          dispatch({ type: SET_FORM_ERRORS, formErrors: formErrors });
          dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
          dispatch({ type: PASSWORD_IS_NOT_UPDATING });
          return;
        }

        dispatch({ type: CHANGE_PASSWORD_NO_ERRORS });
        dispatch({ type: REMOVE_FORM_ERRORS });
        dispatch({ type: PASSWORD_CHANGED_SUCCESSFULLY });
        dispatch({ type: PASSWORD_IS_NOT_UPDATING });
      })
      .catch((err) => {
        dispatch({ type: PASSWORD_IS_NOT_UPDATING });
        dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
      });
  };
};
