export const CHANGE_PASSWORD_CODE_ERRORS = "CHANGE_PASSWORD_CODE_ERRORS";
export const CHANGE_PASSWORD_CODE_NO_ERRORS = "CHANGE_PASSWORD_CODE_NO_ERRORS";

export const clearChangePasswordCodeErrors = () => {
  return {
    type: CHANGE_PASSWORD_CODE_NO_ERRORS,
  };
};
