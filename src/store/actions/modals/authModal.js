export const OPEN_AUTH_MODAL = "OPEN_AUTH_MODAL";
export const OPEN_AUTH_MODAL_FROM_REVIEW_BUTTON =
  "OPEN_AUTH_MODAL_FROM_REVIEW_BUTTON";
export const CLOSE_AUTH_MODAL = "CLOSE_AUTH_MODAL";

export const openAuthModal = () => {
  return {
    type: OPEN_AUTH_MODAL,
  };
};

export const openAuthModalFromReviewButton = () => {
  return {
    type: OPEN_AUTH_MODAL_FROM_REVIEW_BUTTON,
  };
};

export const closeAuthModal = () => {
  return {
    type: CLOSE_AUTH_MODAL,
  };
};
