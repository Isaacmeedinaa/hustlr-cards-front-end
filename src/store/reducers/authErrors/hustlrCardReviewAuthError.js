import {
  SET_HUSTLR_CARD_REVIEW_AUTH_ERROR,
  REMOVE_HUSTLR_CARD_REVIEW_AUTH_ERROR,
} from "../../actions/authErrors/hustlrCardReviewAuthError";

const hustlrCardReviewAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_HUSTLR_CARD_REVIEW_AUTH_ERROR:
      return action.error;

    case REMOVE_HUSTLR_CARD_REVIEW_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default hustlrCardReviewAuthError;
