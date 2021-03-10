import {
  SET_CHANGE_PASSWORD_AUTH_ERROR,
  REMOVE_CHANGE_PASSWORD_AUTH_ERROR,
} from "../../actions/authErrors/changePasswordAuthError";

const changePasswordAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_CHANGE_PASSWORD_AUTH_ERROR:
      return action.error;

    case REMOVE_CHANGE_PASSWORD_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default changePasswordAuthError;
