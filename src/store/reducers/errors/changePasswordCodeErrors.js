import {
  CHANGE_PASSWORD_CODE_ERRORS,
  CHANGE_PASSWORD_CODE_NO_ERRORS,
} from "../../actions/errors/changePasswordCodeErrors";

const changePasswordCodeErrors = (state = [], action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_CODE_ERRORS:
      return action.errors;

    case CHANGE_PASSWORD_CODE_NO_ERRORS:
      const noChangePasswordCodeErrors = [];
      return noChangePasswordCodeErrors;

    default:
      return state;
  }
};

export default changePasswordCodeErrors;
