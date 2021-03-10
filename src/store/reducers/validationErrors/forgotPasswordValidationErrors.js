import {
  SET_FORGOT_PASSWORD_VALIDATION_ERRORS,
  REMOVE_FORGOT_PASSWORD_VALIDATION_ERRORS,
} from "../../actions/validationErrors/forgotPasswordValidationErrors";

const forgotPasswordValidationErrors = (state = [], action) => {
  switch (action.type) {
    case SET_FORGOT_PASSWORD_VALIDATION_ERRORS:
      return action.validationErrors;

    case REMOVE_FORGOT_PASSWORD_VALIDATION_ERRORS:
      const validationErrors = [];
      return validationErrors;

    default:
      return state;
  }
};

export default forgotPasswordValidationErrors;
