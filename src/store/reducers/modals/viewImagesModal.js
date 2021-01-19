import {
  OPEN_VIEW_IMAGES_MODAL,
  CLOSE_VIEW_IMAGES_MODAL,
} from "../../actions/modals/viewImagesModal";

const viewImagesModal = (state = false, action) => {
  switch (action.type) {
    case OPEN_VIEW_IMAGES_MODAL:
      return true;

    case CLOSE_VIEW_IMAGES_MODAL:
      return false;

    default:
      return state;
  }
};

export default viewImagesModal;
