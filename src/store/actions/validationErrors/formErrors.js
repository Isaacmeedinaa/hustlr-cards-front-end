export const SET_FORM_ERRORS = "SET_FORM_ERRORS";
export const REMOVE_FORM_ERRORS = "REMOVE_FORM_ERRORS";

export const clearFormErrors = () => {
  return {
    type: REMOVE_FORM_ERRORS,
  };
};
