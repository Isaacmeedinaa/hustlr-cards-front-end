export const SET_LOGIN_AUTH_ERROR = "SET_LOGIN_AUTH_ERROR";
export const REMOVE_LOGIN_AUTH_ERROR = "REMOVE_LOGIN_AUTH_ERROR";

export const clearLoginAuthError = () => {
  return {
    type: REMOVE_LOGIN_AUTH_ERROR,
  };
};
