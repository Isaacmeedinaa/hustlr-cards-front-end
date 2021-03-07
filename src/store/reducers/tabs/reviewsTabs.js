import { SET_SELECTED_REVIEWS_TAB, RECEIVED_REVIEWS } from "../../actions/tabs/reviewsTabs";

const tabs = (state = RECEIVED_REVIEWS, action) => {
  switch (action.type) {
    case SET_SELECTED_REVIEWS_TAB:
      return action.tabName;

    default:
      return state;
  }
};

export default tabs;
