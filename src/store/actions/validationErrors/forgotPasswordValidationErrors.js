export const SET_FORGOT_PASSWORD_VALIDATION_ERRORS =
  "SET_FORGOT_PASSWORD_VALIDATION_ERRORS";
export const REMOVE_FORGOT_PASSWORD_VALIDATION_ERRORS =
  "REMOVE_FORGOT_PASSWORD_VALIDATION_ERRORS";

export const clearForgotPasswordValidationErrors = () => {
  return {
    type: REMOVE_FORGOT_PASSWORD_VALIDATION_ERRORS,
  };
};