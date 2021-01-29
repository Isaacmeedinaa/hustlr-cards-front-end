import {
  CHANGE_PASSWORD_ERRORS,
  CHANGE_PASSWORD_NO_ERRORS,
} from "../../actions/errors/changePasswordErrors";

const changePasswordErrors = (state = false, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_ERRORS:
      return true;
    case CHANGE_PASSWORD_NO_ERRORS:
      return false;
    default:
      return state;
  }
};

export default changePasswordErrors;
