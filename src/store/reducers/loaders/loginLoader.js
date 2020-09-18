import {
  IS_LOGGING_IN,
  IS_NOT_LOGGING_IN,
} from "../../actions/loaders/loginLoader";

const loginLoader = (state = false, action) => {
  switch (action.type) {
    case IS_LOGGING_IN:
      return true;

    case IS_NOT_LOGGING_IN:
      return false;

    default:
      return state;
  }
};

export default loginLoader;
