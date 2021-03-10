import {
  SET_FORGOT_PASSWORD_AUTH_ERROR,
  REMOVE_FORGOT_PASSWORD_AUTH_ERROR,
} from "../../actions/authErrors/forgotPasswordAuthError";

const forgotPasswordAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_FORGOT_PASSWORD_AUTH_ERROR:
      return action.error;

    case REMOVE_FORGOT_PASSWORD_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default forgotPasswordAuthError;
