import { fetchCard } from "./card";
import { IS_LOGGING_IN, IS_NOT_LOGGING_IN } from "./loaders/loginLoader";
import { IS_REGISTERING, IS_NOT_REGISTERING } from "./loaders/registerLoader";
import { USER_IS_UPDATING, USER_IS_NOT_UPDATING } from "./loaders/userUpdatingLoader";
import { USER_UPDATED_SUCCESSFULLY, USER_UPDATED_UNSUCCESSFULLY } from './notifications/userUpdatedNotifications';
import { PERSONAL_INFO_ERRORS, PERSONAL_INFO_NO_ERRORS } from './errors/personalInfoErrors';
import { CHANGE_PASSWORD_ERRORS, CHANGE_PASSWORD_NO_ERRORS } from './errors/changePasswordErrors';
import { PASSWORD_CHANGED_SUCCESSFULLY, PASSWORD_CHANGED_UNSUCCESSFULLY } from './notifications/changePasswordNotifications';
import { PASSWORD_IS_UPDATING, PASSWORD_IS_NOT_UPDATING } from "./loaders/changePasswordLoader";
import { SET_IS_AUTHENTICATED, SET_IS_NOT_AUTHENTICATED } from './auth';
import {
  REQUEST_TIMEOUT_ERR,
  INVALID_LOGIN_CREDENTIALS_ERR,
  TAKEN_REGISTER_USERNAME_EMAIL_ERR,
  INVALID_REGISTER_EMAIL_PASSWORD_ERR,
  NOT_MATCH_REGISTER_PASSWORDS_ERR,
  NO_LOGIN_ERRORS,
  NO_REGISTER_ERRORS,
} from "./errors";

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
    fetch("http://localhost:5000/api/v1/login", reqObj)
      .then((resp) => {
        if (resp.status === 401) {
          const message = ["Invalid username or password!"];
          dispatch({
            type: INVALID_LOGIN_CREDENTIALS_ERR,
            message: message,
          });
          dispatch({ type: SET_IS_NOT_AUTHENTICATED })
          dispatch({ type: IS_NOT_LOGGING_IN });
        } else if (resp.ok) {
          dispatch({ type: NO_LOGIN_ERRORS });
          dispatch({ type: SET_IS_AUTHENTICATED })
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
      fetch(`http://localhost:5000/api/v1/autologin`, reqObj)
        .then((resp) => {
          if (!resp.ok) {
            localStorage.clear();
            dispatch({ type: SET_IS_NOT_AUTHENTICATED })
            dispatch({ type: IS_NOT_LOGGING_IN });
          } else if (resp.ok) {
            const userId = localStorage.getItem("userId");
            dispatch({ type: SET_IS_AUTHENTICATED })
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
      const message = ["Passwords do not match"];
      dispatch({
        type: NOT_MATCH_REGISTER_PASSWORDS_ERR,
        message: message,
      });
    } else {
      dispatch({ type: IS_REGISTERING });
      fetch("http://localhost:5000/api/v1/register", reqObj)
        .then((resp) => {
          if (!resp.ok) {
            dispatch({
              type: TAKEN_REGISTER_USERNAME_EMAIL_ERR,
              message: ["Error creating account"],
            });
            dispatch({ type: IS_NOT_REGISTERING });
          } else {
            dispatch({ type: NO_REGISTER_ERRORS });
            
            return resp.json();
          }
        })
        .then((json) => {
          localStorage.setItem("userToken", json.token);
          localStorage.setItem("userId", json.user.id);

          const userId = json.user.id;

          dispatch({ type: SET_IS_AUTHENTICATED })
          dispatch(fetchCard(userId));
          dispatch({ type: USER_REGISTER, user: json.user });

          history.push("/home");

          dispatch({ type: IS_NOT_REGISTERING });
        })
        .catch((err) => console.log(err));
    }
  };
};

export const userLogout = (history) => {
  return async (dispatch) => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userToken");
    localStorage.removeItem("card");
    dispatch({ type: SET_IS_NOT_AUTHENTICATED })

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
      email: email
    };

    const reqObj = {
      method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
          Accepts: "application/json",
        },
      body: JSON.stringify(userData)
    };

    dispatch({ type: USER_IS_UPDATING });
    fetch("http://localhost:5000/api/v1/users", reqObj)
      .then((resp) => {
         if (resp.ok) {
          dispatch({type: PERSONAL_INFO_NO_ERRORS});
          dispatch({ type: USER_IS_NOT_UPDATING });
          dispatch({ type: USER_UPDATED_SUCCESSFULLY });
          return resp.json();
        }
        else {
          dispatch({ type: USER_IS_NOT_UPDATING });
          resp.json().then((json) => {dispatch({type: PERSONAL_INFO_ERRORS, errors: json.errors})})
          dispatch({ type: USER_UPDATED_UNSUCCESSFULLY });
          return;
        }
      })
      .then((json) => {
        if (json) { // need this bc this method is still called even when request fails 
          const user = {
            id: json.id,
            firstName: json.firstName,
            lastName: json.lastName,
            username: json.username,
            email: json.email
          };
          dispatch({ type: USER_UPDATED, user: user });
        }
      })
      .catch((err) => {
        dispatch({ type: USER_IS_NOT_UPDATING });
        console.log(err)
      });
  };
};

export const changePassword = (oldPassword, newPassword, confirmPassword) => {
  return (dispatch, getState) => {

    const inputErrors = []
    if (!oldPassword) {
      inputErrors.push({message: "'Current Password' cannot be empty."})
    }
    if (newPassword !== confirmPassword) {
      inputErrors.push({message: "Passwords do not match."});
    }
    if (inputErrors.length > 0) {
      dispatch({type: CHANGE_PASSWORD_ERRORS, errors: inputErrors});
      dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
      return;
    }

    const user = getState().user;
    const userToken = localStorage.getItem("userToken");
    const userId = localStorage.getItem("userId");

    const passwordData = {
      username: user.username,
      oldPassword: oldPassword,
      newPassword: newPassword,
      recoveryCode: ''
    };

    const reqObj = {
      method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
          Accepts: "application/json",
        },
      body: JSON.stringify(passwordData)
    };

    dispatch({ type: PASSWORD_IS_UPDATING });
    fetch("http://localhost:5000/api/v1/changepassword", reqObj)
      .then((resp) => {
        dispatch({ type: PASSWORD_IS_NOT_UPDATING });
         if (resp.ok) {
          dispatch({type: CHANGE_PASSWORD_NO_ERRORS})
          dispatch({ type: PASSWORD_CHANGED_SUCCESSFULLY });
          return resp.json();
        }
        else if (resp.status === 401) {
          dispatch({type: CHANGE_PASSWORD_ERRORS, errors: [{message: "Invalid 'Current Password'."}]})
          dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
        }
        else {
          resp.json().then((json) => {dispatch({type: CHANGE_PASSWORD_ERRORS, errors: json.errors})})
          dispatch({ type: PASSWORD_CHANGED_UNSUCCESSFULLY });
        }
      })
      .catch((err) => {
        dispatch({ type: PASSWORD_IS_NOT_UPDATING });
        console.log(err)
      });
  };
};