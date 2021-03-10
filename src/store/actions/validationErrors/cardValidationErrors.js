export const SET_CARD_VALIDATION_ERRORS = "SET_CARD_VALIDATION_ERRORS";
export const REMOVE_CARD_VALIDATION_ERRORS = "REMOVE_CARD_VALIDATION_ERRORS";

export const clearCardValidationErrors = () => {
  return {
    type: REMOVE_CARD_VALIDATION_ERRORS,
  };
};
