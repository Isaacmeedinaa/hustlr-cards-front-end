export const OPEN_BACKDROP_IMAGE_CROPPER_MODAL =
  "OPEN_BACKDROP_IMAGE_CROPPER_MODAL";
export const CLOSE_BACKDROP_IMAGE_CROPPER_MODAL =
  "CLOSE_BACKDROP_IMAGE_CROPPER_MODAL";

export const openBackdropImageCropperModal = (inputImg) => {
  return {
    type: OPEN_BACKDROP_IMAGE_CROPPER_MODAL,
    inputImg: inputImg,
  };
};

export const closeBackdropImageCropperModal = () => {
  return {
    type: CLOSE_BACKDROP_IMAGE_CROPPER_MODAL,
  };
};
