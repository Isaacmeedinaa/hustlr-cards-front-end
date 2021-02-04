import {
  SET_OFFERING_VALIDATION_ERRORS,
  REMOVE_OFFERING_VALIDATION_ERRORS,
} from "../../actions/validationErrors/offeringValidationErrors";

const offeringValidationErrors = (state = [], action) => {
  switch (action.type) {
    case SET_OFFERING_VALIDATION_ERRORS:
      return action.validationErrors;

    case REMOVE_OFFERING_VALIDATION_ERRORS:
      const validationErrors = [];
      return validationErrors;

    default:
      return state;
  }
};

export default offeringValidationErrors;
