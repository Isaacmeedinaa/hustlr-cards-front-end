import {
  SET_UPDATE_USER_AUTH_ERROR,
  REMOVE_UPDATE_USER_AUTH_ERROR,
} from "../../actions/authErrors/updateUserAuthError";

const updateUserAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_UPDATE_USER_AUTH_ERROR:
      return action.error;

    case REMOVE_UPDATE_USER_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default updateUserAuthError;
