import {
  OPEN_BD_IMAGE_CROPPER_MODAL,
  CLOSE_BD_IMAGE_CROPPER_MODAL,
  SET_BD_IMAGE_CROPPER_MODAL_IMAGE_BLOB,
} from "../../actions/modals/backdropImageCropperModal";

const initialState = {
  modalIsOpen: false,
  inputImg: "",
  imageBlob: null,
};

const backdropImageCropperModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_BD_IMAGE_CROPPER_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        inputImg: action.inputImg,
      };

    case CLOSE_BD_IMAGE_CROPPER_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        inputImg: action.inputImg,
        imageBlob: action.imageBlob,
      };

    case SET_BD_IMAGE_CROPPER_MODAL_IMAGE_BLOB:
      return {
        ...state,
        imageBlob: action.imageBlob,
      };

    default:
      return state;
  }
};

export default backdropImageCropperModal;
