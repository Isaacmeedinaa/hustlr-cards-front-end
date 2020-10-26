import {
  PUBLIC_CARD_IS_LOADING,
  PUBLIC_CARD_IS_NOT_LOADING,
} from "../../actions/loaders/publicCardLoader";

const publicCardLoader = (state = false, action) => {
  switch (action.type) {
    case PUBLIC_CARD_IS_LOADING:
      return true;

    case PUBLIC_CARD_IS_NOT_LOADING:
      return false;

    default:
      return state;
  }
};

export default publicCardLoader;
