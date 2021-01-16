import {
  OPEN_IMAGE_CROPPER_MODAL,
  CLOSE_IMAGE_CROPPER_MODAL,
  SET_IMAGE_CROPPER_MODAL_IMAGE_BLOB,
} from "../../actions/modals/imageCropperModal";

const initialState = {
  modalIsOpen: false,
  inputImg: "",
  imageBlob: null,
};

const imageCropperModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_IMAGE_CROPPER_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        inputImg: action.inputImg,
      };

    case CLOSE_IMAGE_CROPPER_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        inputImg: action.inputImg,
        imageBlob: action.imageBlob,
      };

    case SET_IMAGE_CROPPER_MODAL_IMAGE_BLOB:
      return {
        ...state,
        imageBlob: action.imageBlob,
      };

    default:
      return state;
  }
};

export default imageCropperModal;
