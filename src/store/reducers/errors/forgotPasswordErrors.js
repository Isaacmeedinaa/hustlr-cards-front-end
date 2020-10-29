import {
  FORGOT_PASSWORD_ERRORS,
  FORGOT_PASSWORD_NO_ERRORS,
} from "../../actions/errors/forgotPasswordErrors";

const forgotPasswordErrors = (state = [], action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_ERRORS:
      console.log(action.errors);
      return action.errors;

    case FORGOT_PASSWORD_NO_ERRORS:
      const noForgotPasswordErrors = [];
      return noForgotPasswordErrors;

    default:
      return state;
  }
};

export default forgotPasswordErrors;
