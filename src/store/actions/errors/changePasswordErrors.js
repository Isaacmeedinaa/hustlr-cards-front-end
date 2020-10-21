export const CHANGE_PASSWORD_ERRORS = "CHANGE_PASSWORD_ERRORS";
export const CHANGE_PASSWORD_NO_ERRORS = "CHANGE_PASSWORD_NO_ERRORS";

export const clearChangePasswordErrors = () => {
  return {type: CHANGE_PASSWORD_NO_ERRORS};
}