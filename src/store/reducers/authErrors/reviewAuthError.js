import {
  SET_REVIEW_AUTH_ERROR,
  REMOVE_REVIEW_AUTH_ERROR,
} from "../../actions/authErrors/reviewAuthError";

const reviewAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_REVIEW_AUTH_ERROR:
      return action.error;

    case REMOVE_REVIEW_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default reviewAuthError;
