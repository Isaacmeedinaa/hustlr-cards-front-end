export const OPEN_REVIEW_MODAL = "OPEN_REVIEW_MODAL";
export const CLOSE_REVIEW_MODAL = "CLOSE_REVIEW_MODAL";

export const openReviewModal = () => {
  return {
    type: OPEN_REVIEW_MODAL,
  };
};

export const closeReviewModal = () => {
  return {
    type: CLOSE_REVIEW_MODAL,
  };
};
