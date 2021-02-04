export const SET_UPDATE_USER_AUTH_ERROR = "SET_UPDATE_USER_AUTH_ERROR";
export const REMOVE_UPDATE_USER_AUTH_ERROR = "REMOVE_UPDATE_USER_AUTH_ERROR";

export const clearUpdateUserAuthError = () => {
  return {
    type: REMOVE_UPDATE_USER_AUTH_ERROR,
  };
};
