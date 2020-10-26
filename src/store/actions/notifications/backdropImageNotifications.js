export const BACKDROP_IMAGE_UPLOADED_SUCCESSFULLY =
  "BACKDROP_IMAGE_UPLOADED_SUCCESSFULLY";
export const BACKDROP_IMAGE_UPLOADED_UNSUCCESSFULLY =
  "BACKDROP_IMAGE_UPLOADED_UNSUCCESSFULLY";
export const HIDE_BACKDROP_IMAGE_UPLOADED_NOTIFICATION =
  "HIDE_BACKDROP_IMAGE_UPLOADED_NOTIFICATION";

export const BACKDROP_IMAGE_DELETED_SUCCESSFULLY =
  "BACKDROP_IMAGE_DELETED_SUCCESSFULLY";
export const BACKDROP_IMAGE_DELETED_UNSUCCESSFULLY =
  "BACKDROP_IMAGE_DELETED_UNSUCCESSFULLY";
export const HIDE_BACKDROP_IMAGE_DELETED_NOTIFICATION =
  "HIDE_BACKDROP_IMAGE_DELETED_NOTIFICATION";

export const hideBackdropImageUploadedNotification = () => {
  return { type: HIDE_BACKDROP_IMAGE_UPLOADED_NOTIFICATION };
};

export const hideBackdropImageDeletedNotification = () => {
  return { type: HIDE_BACKDROP_IMAGE_DELETED_NOTIFICATION };
};