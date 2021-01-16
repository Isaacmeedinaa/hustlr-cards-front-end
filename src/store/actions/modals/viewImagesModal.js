export const OPEN_VIEW_IMAGES_MODAL = "OPEN_VIEW_IMAGES_MODAL";
export const CLOSE_VIEW_IMAGES_MODAL = "CLOSE_VIEW_IMAGES_MODAL";
export const NEXT_IMAGE = "NEXT_IMAGE";
export const PREVIOUS_IMAGE = "PREVIOUS_IMAGE";

export const openViewImagesModal = (images, currentImgUrl, currentImgIndex) => {
  return {
    type: OPEN_VIEW_IMAGES_MODAL,
    images: images,
    currentImgUrl: currentImgUrl,
    currentImgIndex: currentImgIndex,
  };
};

export const closeViewImagesModal = () => {
  return {
    type: CLOSE_VIEW_IMAGES_MODAL,
    images: [],
    currentImgUrl: "",
    currentImgIndex: null,
  };
};

export const nextImage = () => {
  return {
    type: NEXT_IMAGE,
  };
};

export const previousImage = () => {
  return {
    type: PREVIOUS_IMAGE,
  };
};
