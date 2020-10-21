export const PERSONAL_INFO_ERRORS = "PERSONAL_INFO_ERRORS";
export const PERSONAL_INFO_NO_ERRORS = "PERSONAL_INFO_NO_ERRORS";

export const clearPersonalInfoErrors = () => {
  return {type: PERSONAL_INFO_NO_ERRORS};
}