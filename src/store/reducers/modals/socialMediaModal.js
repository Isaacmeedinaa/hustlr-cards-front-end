import {
  OPEN_SOCIAL_MEDIA_MODAL,
  CLOSE_SOCIAL_MEDIA_MODAL,
} from "../../actions/modals/socialMediaModal";

const socialMediaModal = (state = false, action) => {
  switch (action.type) {
    case OPEN_SOCIAL_MEDIA_MODAL:
      return true;

    case CLOSE_SOCIAL_MEDIA_MODAL:
      return false;

    default:
      return state;
  }
};

export default socialMediaModal;
