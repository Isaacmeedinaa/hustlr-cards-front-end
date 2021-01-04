export const OPEN_IMAGE_CROPPER_MODAL = "OPEN_IMAGE_CROPPER_MODAL";
export const CLOSE_IMAGE_CROPPER_MODAL = "CLOSE_IMAGE_CROPPER_MODAL";

export const openImageCropperModal = (inputImg) => {
  return {
    type: OPEN_IMAGE_CROPPER_MODAL,
    inputImg: inputImg,
  };
};

export const closeImageCropperModal = () => {
  return {
    type: CLOSE_IMAGE_CROPPER_MODAL,
  };
};
