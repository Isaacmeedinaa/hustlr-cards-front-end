import {
  OPEN_IMAGE_CROPPER_MODAL,
  CLOSE_IMAGE_CROPPER_MODAL,
} from "../../actions/modals/imageCropperModal";

const imageCropperModal = (state = false, action) => {
  switch (action.type) {
    case OPEN_IMAGE_CROPPER_MODAL:
      return true;

    case CLOSE_IMAGE_CROPPER_MODAL:
      return false;

    default:
      return state;
  }
};

export default imageCropperModal;
