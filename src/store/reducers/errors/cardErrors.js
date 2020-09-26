import { CARD_ERRORS, CARD_NO_ERRORS } from "../../actions/errors/cardErrors";

const cardErrors = (state = [], action) => {
  switch (action.type) {
    case CARD_ERRORS:
      return action.errors;
    case CARD_NO_ERRORS:
      return [];
    default:
      return state;
  }
};

export default cardErrors;
