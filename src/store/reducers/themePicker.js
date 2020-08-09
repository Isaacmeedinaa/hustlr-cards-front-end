import { OPEN, CLOSE } from "../actions/themePicker";

const themePicker = (state = false, action) => {
  switch (action.type) {
    case OPEN:
      return true;

    case CLOSE:
      return false;

    default:
      return state;
  }
};

export default themePicker;
