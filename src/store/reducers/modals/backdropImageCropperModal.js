import {
  OPEN_BACKDROP_IMAGE_CROPPER_MODAL,
  CLOSE_BACKDROP_IMAGE_CROPPER_MODAL,
} from "../../actions/modals/backdropImageCropperModal";

const initialState = {
  openModal: false,
  inputImg: "",
};

const backdropImageCropperModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_BACKDROP_IMAGE_CROPPER_MODAL:
      return { ...state, openModal: true, inputImg: action.inputImg };

    case CLOSE_BACKDROP_IMAGE_CROPPER_MODAL:
      return { ...state, openModal: false, inputImg: "" };

    default:
      return state;
  }
};

export default backdropImageCropperModal;
