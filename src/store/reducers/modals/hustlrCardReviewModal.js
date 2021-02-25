import {
  OPEN_HUSTLR_CARD_REVIEW_MODAL,
  CLOSE_HUSTLR_CARD_REVIEW_MODAL,
  DELETE_HUSTLR_CARD_REVIEW_PHOTO,
} from "../../actions/modals/hustlrCardReviewModal";

const intialState = {
  isOpen: false,
  review: null,
};

const hustlrCardReviewModal = (state = intialState, action) => {
  switch (action.type) {
    case OPEN_HUSTLR_CARD_REVIEW_MODAL:
      return {
        ...state,
        isOpen: true,
        review: action.review,
      };

    case CLOSE_HUSTLR_CARD_REVIEW_MODAL:
      return {
        ...state,
        isOpen: false,
        review: null,
      };

    case DELETE_HUSTLR_CARD_REVIEW_PHOTO:
      return {
        ...state,
        review: {
          ...state.review,
          photos: state.review.photos.filter(
            (photo) => photo.id !== action.photoId
          ),
        },
      };

    default:
      return state;
  }
};

export default hustlrCardReviewModal;
