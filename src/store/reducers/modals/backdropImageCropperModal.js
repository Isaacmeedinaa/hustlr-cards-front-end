import {
  OPEN_BD_IMAGE_CROPPER_MODAL,
  CLOSE_BD_IMAGE_CROPPER_MODAL,
} from "../../actions/modals/backdropImageCropperModal";

const backdropImageCropperModal = (state = false, action) => {
  switch (action.type) {
    case OPEN_BD_IMAGE_CROPPER_MODAL:
      return true;

    case CLOSE_BD_IMAGE_CROPPER_MODAL:
      return false;

    default:
      return state;
  }
};

export default backdropImageCropperModal;
