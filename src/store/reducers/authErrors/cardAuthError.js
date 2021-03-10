import {
  SET_CARD_AUTH_ERROR,
  REMOVE_CARD_AUTH_ERROR,
} from "../../actions/authErrors/cardAuthError";

const cardAuthError = (state = null, action) => {
  switch (action.type) {
    case SET_CARD_AUTH_ERROR:
      return action.error;

    case REMOVE_CARD_AUTH_ERROR:
      return null;

    default:
      return state;
  }
};

export default cardAuthError;
