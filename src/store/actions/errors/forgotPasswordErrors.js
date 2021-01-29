export const FORGOT_PASSWORD_ERRORS = "FORGOT_PASSWORD_ERRORS";
export const FORGOT_PASSWORD_NO_ERRORS = "FORGOT_PASSWORD_NO_ERRORS";

export const clearForgotPasswordErrors = () => {
  return {
    type: FORGOT_PASSWORD_NO_ERRORS,
  };
};
