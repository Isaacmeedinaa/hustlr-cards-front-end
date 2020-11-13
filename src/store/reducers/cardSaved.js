import { CARD_IS_SAVED, CARD_IS_NOT_SAVED } from "../actions/cardSaved";

const cardSaved = (state = true, action) => {
  switch (action.type) {
    case CARD_IS_SAVED:
      return true;

    case CARD_IS_NOT_SAVED:
      return false;

    default:
      return state;
  }
};

export default cardSaved;
