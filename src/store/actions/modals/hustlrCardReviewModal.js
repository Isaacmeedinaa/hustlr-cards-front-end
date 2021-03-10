export const OPEN_HUSTLR_CARD_REVIEW_MODAL = "OPEN_HUSTLR_CARD_REVIEW_MODAL";
export const CLOSE_HUSTLR_CARD_REVIEW_MODAL = "CLOSE_HUSTLR_CARD_REVIEW_MODAL";
export const DELETE_HUSTLR_CARD_REVIEW_PHOTO =
  "DELETE_HUSTLR_CARD_REVIEW_PHOTO";

export const openHustlrCardReviewModal = (review) => {
  return {
    type: OPEN_HUSTLR_CARD_REVIEW_MODAL,
    review: review,
  };
};

export const closeHustlrCardReviewModal = () => {
  return {
    type: CLOSE_HUSTLR_CARD_REVIEW_MODAL,
  };
};
