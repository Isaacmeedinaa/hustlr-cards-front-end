export const OPEN_IMAGE_CROPPER_MODAL = "OPEN_IMAGE_CROPPER_MODAL";
export const CLOSE_IMAGE_CROPPER_MODAL = "CLOSE_IMAGE_CROPPER_MODAL";
export const SET_IMAGE_CROPPER_MODAL_IMAGE_BLOB =
  "SET_IMAGE_CROPPER_MODAL_IMAGE_BLOB";

export const openImageCropperModal = (inputImg) => {
  return {
    type: OPEN_IMAGE_CROPPER_MODAL,
    inputImg: inputImg,
  };
};

export const closeImageCropperModal = () => {
  return {
    type: CLOSE_IMAGE_CROPPER_MODAL,
    inputImg: "",
    imageBlob: null,
  };
};

export const setImageCropperModalImageBlob = (imageBlob) => {
  return {
    type: SET_IMAGE_CROPPER_MODAL_IMAGE_BLOB,
    imageBlob: imageBlob,
  };
};
