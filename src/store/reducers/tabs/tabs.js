import { SET_SELECTED_TAB, EDIT } from "../../actions/tabs/tabs";

const tabs = (state = EDIT, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return action.tabName;

    default:
      return state;
  }
};

export default tabs;
