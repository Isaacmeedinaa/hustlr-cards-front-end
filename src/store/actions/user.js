import { IS_LOADING, IS_NOT_LOADING } from "./loader";
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

    dispatch({ type: IS_LOADING });
    fetch("http://localhost:5000/api/v1/login", reqObj)
      .then((resp) => {
        if (resp.status === 401) {
          const message = ["Invalid username or password!"];
          dispatch({
            type: INVALID_LOGIN_CREDENTIALS_ERR,
            message: message,
          });
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

        dispatch({ type: IS_NOT_LOADING });
      })
      .catch((err) => console.log(err));
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
      dispatch({ type: IS_LOADING });
      fetch("http://localhost:5000/api/v1/register", reqObj)
        .then((resp) => {
          if (!resp.ok) {
            dispatch({
              type: TAKEN_REGISTER_USERNAME_EMAIL_ERR,
              message: ["Error creating account"],
            });
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
          // history.push("/home");

          dispatch({ type: IS_NOT_LOADING });
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
