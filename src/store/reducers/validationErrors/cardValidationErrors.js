import {
  SET_CARD_VALIDATION_ERRORS,
  REMOVE_CARD_VALIDATION_ERRORS,
} from "../../actions/validationErrors/cardValidationErrors";

const cardValidationErrors = (state = [], action) => {
  switch (action.type) {
    case SET_CARD_VALIDATION_ERRORS:
      return action.validationErrors;

    case REMOVE_CARD_VALIDATION_ERRORS:
      const validationErrors = [];
      return validationErrors;

    default:
      return state;
  }
};

export default cardValidationErrors;
