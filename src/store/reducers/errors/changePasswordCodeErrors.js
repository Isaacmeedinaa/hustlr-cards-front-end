import {
  CHANGE_PASSWORD_CODE_ERRORS,
  CHANGE_PASSWORD_CODE_NO_ERRORS,
} from "../../actions/errors/changePasswordCodeErrors";

const changePasswordCodeErrors = (state = false, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_CODE_ERRORS:
      return true;

    case CHANGE_PASSWORD_CODE_NO_ERRORS:
      return false;

    default:
      return state;
  }
};

export default changePasswordCodeErrors;
