import {
  REGISTER_ERRORS,
  REGISTER_NO_ERRORS,
} from "../../actions/errors/registerErrors";

const registerErrors = (state = false, action) => {
  switch (action.type) {
    case REGISTER_ERRORS:
      return true;
    case REGISTER_NO_ERRORS:
      return false;
    default:
      return state;
  }
};

export default registerErrors;
