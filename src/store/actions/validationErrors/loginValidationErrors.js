export const SET_LOGIN_VALIDATION_ERRORS = "SET_LOGIN_VALIDATION_ERRORS";
export const REMOVE_LOGIN_VALIDATION_ERRORS = "REMOVE_LOGIN_VALIDATION_ERRORS";

export const clearLoginValidationErrors = () => {
  return {
    type: REMOVE_LOGIN_VALIDATION_ERRORS,
  };
};
