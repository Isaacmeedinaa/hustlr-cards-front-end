import {
  CARD_PATH_IS_TAKEN_ERROR,
  CARD_INVALID_INDUSTRY_ERROR,
  CARD_NO_ERRORS,
} from "../../actions/errors/cardErrors";

const cardErrors = (state = null, action) => {
  switch (action.type) {
    case CARD_PATH_IS_TAKEN_ERROR:
      return action.message;
    case CARD_INVALID_INDUSTRY_ERROR:
      return action.message;
    case CARD_NO_ERRORS:
      return null;
    default:
      return state;
  }
};

export default cardErrors;
