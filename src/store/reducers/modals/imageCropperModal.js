import {
  OPEN_IMAGE_CROPPER_MODAL,
  CLOSE_IMAGE_CROPPER_MODAL,
} from "../../actions/modals/imageCropperModal";

const initialState = {
  openModal: false,
  inputImg: "",
};

const imageCropperModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_IMAGE_CROPPER_MODAL:
      return { ...state, openModal: true, inputImg: action.inputImg };

    case CLOSE_IMAGE_CROPPER_MODAL:
      return { ...state, openModal: false, inputImg: "" };

    default:
      return state;
  }
};

export default imageCropperModal;
