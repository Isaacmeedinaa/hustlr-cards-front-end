import {
  REQUEST_TIMEOUT_ERR,
  INVALID_LOGIN_CREDENTIALS_ERR,
  INVALID_REGISTER_CREDENTIALS_ERR,
  NO_LOGIN_ERRORS,
} from "./errors";

export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";

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

    fetch("http://localhost:5000/api/v1/login", reqObj)
      .then((resp) => {
        if (resp.status === 401) {
          dispatch({
            type: INVALID_LOGIN_CREDENTIALS_ERR,
            message: "Invalid username or password!",
          });
        } else if (resp.ok) {
          dispatch({ type: NO_LOGIN_ERRORS });
          return resp.json();
        }
      })
      .then((json) => {
        localStorage.setItem("userToken", json.token);
        dispatch({ type: USER_LOGIN, user: json.user });
        history.push("/home");
      })
      .catch((err) => console.log(err));
  };
};
