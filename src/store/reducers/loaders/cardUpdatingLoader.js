import {
  CARD_IS_UPDATING,
  CARD_IS_NOT_UPDATING,
} from "../../actions/loaders/cardUpdatingLoader";

const cardUpdatingLoader = (state = false, action) => {
  switch (action.type) {
    case CARD_IS_UPDATING:
      return true;

    case CARD_IS_NOT_UPDATING:
      return false;

    default:
      return state;
  }
};

export default cardUpdatingLoader;
