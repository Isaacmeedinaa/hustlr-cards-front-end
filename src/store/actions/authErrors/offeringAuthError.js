export const SET_OFFERING_AUTH_ERROR = "SET_OFFERING_AUTH_ERROR";
export const REMOVE_OFFERING_AUTH_ERROR = "REMOVE_OFFERING_AUTH_ERROR";

export const clearOfferingAuthError = () => {
  return {
    type: REMOVE_OFFERING_AUTH_ERROR,
  };
};
