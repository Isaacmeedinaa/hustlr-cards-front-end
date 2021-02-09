import {
  SET_HUSTLR_CARD_REVIEWS,
  SET_NEXT_HUSTLR_CARD_REVIEWS,
  REMOVE_HUSTLR_CARD_REVIEWS,
  // CREATE_HUSTLR_CARD_REVIEW,
  // UPDATE_HUSTLR_CARD_REVIEW,
  // DELETE_HUSTLR_CARD_REVIEW,
  RESET_PAGINATION_NUMBER_AND_SORTING_VALUE,
} from "../../actions/hustlrCard/hustlrCardReviews";

const initialState = {
  reviews: [],
  resetPaginationAndSortingValue: false,
};

const hustlrCardReviews = (state = initialState, action) => {
  switch (action.type) {
    case SET_HUSTLR_CARD_REVIEWS:
      return {
        ...state,
        reviews: action.hustlrCardReviews,
      };

    case SET_NEXT_HUSTLR_CARD_REVIEWS:
      return {
        ...state,
        reviews: [...state.reviews, ...action.nextHustlrCardReviews],
      };

    case REMOVE_HUSTLR_CARD_REVIEWS:
      return {
        ...state,
        reviews: [],
      };

    case RESET_PAGINATION_NUMBER_AND_SORTING_VALUE:
      return {
        ...state,
        resetPaginationAndSortingValue: !state.resetPaginationAndSortingValue,
      };

    // case CREATE_HUSTLR_CARD_REVIEW:
    //   return [action.review, ...state];

    // case UPDATE_HUSTLR_CARD_REVIEW:
    //   const updatedHustlrCardReviews = [...state];
    //   const reviewIndex = updatedHustlrCardReviews.findIndex(
    //     (review) => review.id === action.review.id
    //   );
    //   updatedHustlrCardReviews[reviewIndex] = action.review;

    //   return updatedHustlrCardReviews;

    // case DELETE_HUSTLR_CARD_REVIEW:
    //   return state.filter((review) => review.id !== action.reviewId);

    default:
      return state;
  }
};

export default hustlrCardReviews;
