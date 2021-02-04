export const SET_REGISTER_AUTH_ERROR = "SET_REGISTER_AUTH_ERROR";
export const REMOVE_REGISTER_AUTH_ERROR = "REMOVE_REGISTER_AUTH_ERROR";

export const clearRegisterAuthError = () => {
  return {
    type: REMOVE_REGISTER_AUTH_ERROR,
  };
};
