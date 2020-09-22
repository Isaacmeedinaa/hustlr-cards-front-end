import { fetchCard } from "./card";
import { IS_LOGGING_IN, IS_NOT_LOGGING_IN } from "./loaders/loginLoader";
import { IS_REGISTERING, IS_NOT_REGISTERING } from "./loaders/registerLoader";
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
          dispatch({ type: IS_NOT_LOGGING_IN });
        } else if (resp.ok) {
          dispatch({ type: NO_LOGIN_ERRORS });
          return resp.json();
        }
      })
      .then((json) => {
        localStorage.setItem("userToken", json.token);
        localStorage.setItem("userId", json.user.id);

        dispatch({ type: USER_LOGIN, user: json.user });

        history.push("/home");

        dispatch({ type: IS_NOT_LOGGING_IN });
      })
      .catch((err) => console.log(err));
  };
};

export const userAutoLogin = (history) => {
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
            history.push("/login");
            dispatch({ type: IS_NOT_LOGGING_IN });
          } else if (resp.ok) {
            const userId = localStorage.getItem("userId");
            dispatch(fetchCard(userId));
            return resp.json();
          }
        })
        .then((user) => {
          if (!user) {
            return;
          }
          dispatch({ type: USER_LOGIN, user: user });
          history.push("/home");
          dispatch({ type: IS_NOT_LOGGING_IN });
        });
    } else {
      history.push("/login");
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

          dispatch({ type: USER_REGISTER, user: json.user });

          // uncomment this once card creation is handled
          history.push("/home");

          dispatch({ type: IS_NOT_REGISTERING });
        })
        .catch((err) => console.log(err));
    }
  };
};

export const userLogout = (history) => {
  return (dispatch) => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userToken");
    localStorage.removeItem("card");

    history.push("/login");

    dispatch({ type: USER_LOGOUT });
  };
};
