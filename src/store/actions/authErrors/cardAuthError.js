export const SET_CARD_AUTH_ERROR = "SET_CARD_AUTH_ERROR";
export const REMOVE_CARD_AUTH_ERROR = "REMOVE_CARD_AUTH_ERROR";

export const clearCardAuthError = () => {
  return {
    type: REMOVE_CARD_AUTH_ERROR,
  };
};
