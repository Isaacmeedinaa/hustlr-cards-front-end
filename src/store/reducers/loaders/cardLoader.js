import {
  CARD_IS_LOADING,
  CARD_IS_NOT_LOADING,
} from "../../actions/loaders/cardLoader";

const cardLoader = (state = false, action) => {
  switch (action.type) {
    case CARD_IS_LOADING:
      return true;

    case CARD_IS_NOT_LOADING:
      return false;

    default:
      return state;
  }
};

export default cardLoader;
