import {
  SET_LOGIN_AUTH_ERROR,
  REMOVE_LOGIN_AUTH_ERROR,
} from "../../actions/authErrors/loginAuthError";

const loginAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_LOGIN_AUTH_ERROR:
      return action.error;

    case REMOVE_LOGIN_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default loginAuthError;
