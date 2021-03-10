import {
  SET_CHANGE_PASSWORD_VALIDATION_ERRORS,
  REMOVE_CHANGE_PASSWORD_VALIDATION_ERRORS,
} from "../../actions/validationErrors/changePasswordValidationErrors";

const changePasswordValidationErrors = (state = [], action) => {
  switch (action.type) {
    case SET_CHANGE_PASSWORD_VALIDATION_ERRORS:
      return action.validationErrors;

    case REMOVE_CHANGE_PASSWORD_VALIDATION_ERRORS:
      const validationErrors = [];
      return validationErrors;

    default:
      return state;
  }
};

export default changePasswordValidationErrors;
