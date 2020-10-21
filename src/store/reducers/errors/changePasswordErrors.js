import { CHANGE_PASSWORD_ERRORS, CHANGE_PASSWORD_NO_ERRORS } from "../../actions/errors/changePasswordErrors";

const changePasswordErrors = (state = [], action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_ERRORS:
      return action.errors;
    case CHANGE_PASSWORD_NO_ERRORS:
      return [];
    default:
      return state;
  }
};

export default changePasswordErrors;