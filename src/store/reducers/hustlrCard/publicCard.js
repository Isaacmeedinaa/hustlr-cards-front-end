import { SET_PUBLIC_CARD } from "../../actions/hustlrCard/publicCard";
import { 
CREATE_HUSTLR_CARD_REVIEW, 
UPDATE_HUSTLR_CARD_REVIEW, 
DELETE_HUSTLR_CARD_REVIEW } 
from "../../actions/hustlrCard/hustlrCardReviews";

const publicCard = (state = null, action) => {
  switch (action.type) {
    case SET_PUBLIC_CARD:
      return action.publicCard;

    case CREATE_HUSTLR_CARD_REVIEW:
      if (state === null) {
        return null;
      }
      return {
        ...state,
        reviews: [action.review, ...state.reviews]
      };

    case UPDATE_HUSTLR_CARD_REVIEW:
      if (state === null) {
        return null;
      }
      const updatedHustlrCardReviews = [...state.reviews];
      const reviewIndex = updatedHustlrCardReviews.findIndex(
        (review) => review.id === action.review.id
      );
      updatedHustlrCardReviews[reviewIndex] = action.review;

      return {
        ...state,
        reviews: updatedHustlrCardReviews,
      };

    case DELETE_HUSTLR_CARD_REVIEW:
      if (state === null) {
        return null;
      }
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review.id !== action.reviewId
        )
      };

      default:
      return state;
  }
};

export default publicCard;
