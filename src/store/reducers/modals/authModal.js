import {
  OPEN_AUTH_MODAL,
  OPEN_AUTH_MODAL_FROM_REVIEW_BUTTON,
  CLOSE_AUTH_MODAL,
} from "../../actions/modals/authModal";

const initialState = {
  showReviewModal: false,
  isOpen: false,
};

const authModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_AUTH_MODAL:
      return {
        showReviewModal: false,
        isOpen: true,
      };

    case OPEN_AUTH_MODAL_FROM_REVIEW_BUTTON:
      return {
        showReviewModal: true,
        isOpen: true,
      };

    case CLOSE_AUTH_MODAL:
      return {
        showReviewModal: false,
        isOpen: false,
      };

    default:
      return state;
  }
};

export default authModal;
