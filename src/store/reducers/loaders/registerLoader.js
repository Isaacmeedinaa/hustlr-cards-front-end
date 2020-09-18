import {
  IS_REGISTERING,
  IS_NOT_REGISTERING,
} from "../../actions/loaders/registerLoader";

const registerLoader = (state = false, action) => {
  switch (action.type) {
    case IS_REGISTERING:
      return true;

    case IS_NOT_REGISTERING:
      return false;

    default:
      return state;
  }
};

export default registerLoader;
