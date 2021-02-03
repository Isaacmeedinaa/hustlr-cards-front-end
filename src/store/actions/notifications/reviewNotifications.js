export const REVIEW_CREATED_SUCCESSFULLY = "REVIEW_CREATED_SUCCESSFULLY";
export const REVIEW_CREATED_UNSUCCESSFULLY = "REVIEW_CREATED_UNSUCCESSFULLY";
export const HIDE_REVIEW_CREATED_NOTIFICATION =
  "HIDE_REVIEW_CREATED_NOTIFICATION";

export const REVIEW_SAVED_SUCCESSFULLY = "REVIEW_SAVED_SUCCESSFULLY";
export const REVIEW_SAVED_UNSUCCESSFULLY = "REVIEW_SAVED_UNSUCCESSFULLY";
export const HIDE_REVIEW_SAVED_NOTIFICATION = "HIDE_REVIEW_SAVED_NOTIFICATION";

export const REVIEW_DELETED_SUCCESSFULLY = "REVIEW_DELETED_SUCCESSFULLY";
export const REVIEW_DELETED_UNSUCCESSFULLY = "REVIEW_DELETED_UNSUCCESSFULLY";
export const HIDE_REVIEW_DELETED_NOTIFICATION =
  "HIDE_REVIEW_DELETED_NOTIFICATION";

export const hideReviewCreatedNotification = () => {
  return { type: HIDE_REVIEW_CREATED_NOTIFICATION };
};

export const hideReviewSavedNotification = () => {
  return { type: HIDE_REVIEW_SAVED_NOTIFICATION };
};

export const hideReviewDeletedNotification = () => {
  return { type: HIDE_REVIEW_DELETED_NOTIFICATION };
};
