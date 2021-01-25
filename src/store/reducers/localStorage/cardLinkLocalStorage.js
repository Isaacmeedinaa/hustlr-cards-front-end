import { TOGGLE_CARD_LINK_LOCAL_STORAGE } from "../../actions/localStorage/cardLinkLocalStorage";

const cardLinkLocalStorage = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_CARD_LINK_LOCAL_STORAGE:
      return (state = !state);

    default:
      return state;
  }
};

export default cardLinkLocalStorage;
