import {
  SET_REGISTER_VALIDATION_ERRORS,
  REMOVE_REGISTER_VALIDATION_ERRORS,
} from "../../actions/validationErrors/registerValidationErrors";

const registerValidationErrors = (state = [], action) => {
  switch (action.type) {
    case SET_REGISTER_VALIDATION_ERRORS:
      return action.validationErrors;

    case REMOVE_REGISTER_VALIDATION_ERRORS:
      const validationErrors = [];
      return validationErrors;

    default:
      return state;
  }
};

export default registerValidationErrors;
