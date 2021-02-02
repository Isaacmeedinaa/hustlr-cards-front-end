export const LOGIN_ERRORS = "LOGIN_ERRORS";
export const LOGIN_NO_ERRORS = "LOGIN_NO_ERRORS";

export const clearLoginErrors = () => {
  return {
    type: LOGIN_NO_ERRORS,
  };
};
