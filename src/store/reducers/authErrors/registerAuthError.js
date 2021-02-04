import {
  SET_REGISTER_AUTH_ERROR,
  REMOVE_REGISTER_AUTH_ERROR,
} from "../../actions/authErrors/registerAuthError";

const registerAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_REGISTER_AUTH_ERROR:
      return action.error;

    case REMOVE_REGISTER_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default registerAuthError;
