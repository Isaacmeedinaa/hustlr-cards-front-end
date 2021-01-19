export const OPEN_BD_IMAGE_CROPPER_MODAL = "OPEN_BD_IMAGE_CROPPER_MODAL";
export const CLOSE_BD_IMAGE_CROPPER_MODAL = "CLOSE_BD_IMAGE_CROPPER_MODAL";

export const openBDImageCropperModal = () => {
  return {
    type: OPEN_BD_IMAGE_CROPPER_MODAL,
  };
};

export const closeBDImageCropperModal = () => {
  return {
    type: CLOSE_BD_IMAGE_CROPPER_MODAL,
  };
};
