import {
  SET_FORM_ERRORS,
  REMOVE_FORM_ERRORS,
} from "../../actions/validationErrors/formErrors";

const formErrors = (state = [], action) => {
  switch (action.type) {
    case SET_FORM_ERRORS:
      return action.formErrors;

    case REMOVE_FORM_ERRORS:
      const noFormErrors = [];
      return noFormErrors;

    default:
      return state;
  }
};

export default formErrors;
