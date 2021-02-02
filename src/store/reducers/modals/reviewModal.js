import {
  OPEN_REVIEW_MODAL,
  CLOSE_REVIEW_MODAL,
} from "../../actions/modals/reviewModal";

const reviewModal = (state = false, action) => {
  switch (action.type) {
    case OPEN_REVIEW_MODAL:
      return true;

    case CLOSE_REVIEW_MODAL:
      return false;

    default:
      return state;
  }
};

export default reviewModal;
