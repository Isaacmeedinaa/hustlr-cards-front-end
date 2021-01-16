export const OPEN_VIEW_IMAGES_MODAL = "OPEN_VIEW_IMAGES_MODAL";
export const CLOSE_VIEW_IMAGES_MODAL = "CLOSE_VIEW_IMAGES_MODAL";

export const openViewImagesModal = () => {
  return {
    type: OPEN_VIEW_IMAGES_MODAL,
  };
};

export const closeViewImagesModal = () => {
  return {
    type: CLOSE_VIEW_IMAGES_MODAL,
  };
};
