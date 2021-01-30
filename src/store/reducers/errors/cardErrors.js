import { CARD_ERRORS, CARD_NO_ERRORS } from "../../actions/errors/cardErrors";

const cardErrors = (state = false, action) => {
  switch (action.type) {
    case CARD_ERRORS:
      return true;
    case CARD_NO_ERRORS:
      return false;
    default:
      return state;
  }
};

export default cardErrors;
