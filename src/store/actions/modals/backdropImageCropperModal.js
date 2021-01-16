export const OPEN_BD_IMAGE_CROPPER_MODAL = "OPEN_BD_IMAGE_CROPPER_MODAL";
export const CLOSE_BD_IMAGE_CROPPER_MODAL = "CLOSE_BD_IMAGE_CROPPER_MODAL";
export const SET_BD_IMAGE_CROPPER_MODAL_IMAGE_BLOB =
  "SET_BD_IMAGE_CROPPER_MODAL_IMAGE_BLOB";

export const openBDImageCropperModal = (inputImg) => {
  return {
    type: OPEN_BD_IMAGE_CROPPER_MODAL,
    inputImg: inputImg,
  };
};

export const closeBDImageCropperModal = () => {
  return {
    type: CLOSE_BD_IMAGE_CROPPER_MODAL,
    inputImg: "",
    imageBlob: null,
  };
};

export const setBDImageCropperModalImageBlob = (imageBlob) => {
  return {
    type: SET_BD_IMAGE_CROPPER_MODAL_IMAGE_BLOB,
    imageBlob: imageBlob,
  };
};
