export const SET_REVIEW_AUTH_ERROR = "SET_REVIEW_AUTH_ERROR";
export const REMOVE_REVIEW_AUTH_ERROR = "REMOVE_REVIEW_AUTH_ERROR";

export const clearReviewAuthError = () => {
  return {
    type: REMOVE_REVIEW_AUTH_ERROR,
  };
};
