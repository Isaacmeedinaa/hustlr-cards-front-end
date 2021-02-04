import {
  SET_CHANGE_PASSWORD_CODE_AUTH_ERROR,
  REMOVE_CHANGE_PASSWORD_CODE_AUTH_ERROR,
} from "../../actions/authErrors/changePasswordCodeAuthError";

const changePasswordCodeAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_CHANGE_PASSWORD_CODE_AUTH_ERROR:
      return action.error;

    case REMOVE_CHANGE_PASSWORD_CODE_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default changePasswordCodeAuthError;
