import {
  SET_OFFERING_AUTH_ERROR,
  REMOVE_OFFERING_AUTH_ERROR,
} from "../../actions/authErrors/offeringAuthError";

const offeringAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_OFFERING_AUTH_ERROR:
      return action.error;

    case REMOVE_OFFERING_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default offeringAuthError;
