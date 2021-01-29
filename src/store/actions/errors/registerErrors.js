export const REGISTER_ERRORS = "REGISTER_ERRORS";
export const REGISTER_NO_ERRORS = "REGISTER_NO_ERRORS";

export const clearRegisterErrors = () => {
  return {
    type: REGISTER_NO_ERRORS,
  };
};
