import {
  SET_LOGIN_VALIDATION_ERRORS,
  REMOVE_LOGIN_VALIDATION_ERRORS,
} from "../../actions/validationErrors/loginValidationErrors";

const loginValidationErrors = (state = [], action) => {
  switch (action.type) {
    case SET_LOGIN_VALIDATION_ERRORS:
      return action.validationErrors;

    case REMOVE_LOGIN_VALIDATION_ERRORS:
      const validationErrors = [];
      return validationErrors;

    default:
      return state;
  }
};

export default loginValidationErrors;
