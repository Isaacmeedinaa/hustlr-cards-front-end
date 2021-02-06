import {
  SET_HUSTLR_CARD_REVIEWS,
  REMOVE_HUSTLR_CARD_REVIEWS,
  CREATE_HUSTLR_CARD_REVIEW,
  UPDATE_HUSTLR_CARD_REVIEW,
  DELETE_HUSTLR_CARD_REVIEW,
} from "../../actions/hustlrCard/hustlrCardReviews";

const hustlrCardReviews = (state = [], action) => {
  switch (action.type) {
    case SET_HUSTLR_CARD_REVIEWS:
      return action.hustlrCardReviews;

    case REMOVE_HUSTLR_CARD_REVIEWS:
      return [];

    case CREATE_HUSTLR_CARD_REVIEW:
      return [...state, action.review];

    case UPDATE_HUSTLR_CARD_REVIEW:
      const updatedHustlrCardReviews = [...state];
      const reviewIndex = updatedHustlrCardReviews.findIndex(
        (review) => review.id === action.review.id
      );
      updatedHustlrCardReviews[reviewIndex] = action.review;

      return updatedHustlrCardReviews;

    case DELETE_HUSTLR_CARD_REVIEW:
      return state.filter((review) => review.id !== action.reviewId);

    default:
      return state;
  }
};

export default hustlrCardReviews;
