import {
  SET_UPDATE_USER_VALIDATION_ERRORS,
  REMOVE_UPDATE_USER_VALIDATION_ERRORS,
} from "../../actions/validationErrors/updateUserValidationErrors";

const updateUserValidationErrors = (state = [], action) => {
  switch (action.type) {
    case SET_UPDATE_USER_VALIDATION_ERRORS:
      return action.validationErrors;

    case REMOVE_UPDATE_USER_VALIDATION_ERRORS:
      const validationErrors = [];
      return validationErrors;

    default:
      return state;
  }
};

export default updateUserValidationErrors;
