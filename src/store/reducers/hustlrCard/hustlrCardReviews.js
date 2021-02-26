import {
  SET_HUSTLR_CARD_REVIEWS,
  SET_NEXT_HUSTLR_CARD_REVIEWS,
  REMOVE_HUSTLR_CARD_REVIEWS_STATE,
  CREATE_HUSTLR_CARD_REVIEW,
  UPDATE_HUSTLR_CARD_REVIEW,
  DELETE_HUSTLR_CARD_REVIEW,
  DELETE_HUSTLR_CARD_REVIEW_PHOTO_ARRAY,
  CREATE_HUSTLR_CARD_REVIEW_LIKE,
  UPDATE_HUSTLR_CARD_REVIEW_LIKE,
  DELETE_HUSTLR_CARD_REVIEW_LIKE,
} from "../../actions/hustlrCard/hustlrCardReviews";

const initialState = {
  reviews: [],
  totalPages: null,
  addedReviewId: null,
  reviewWasDeleted: false,
};

const hustlrCardReviews = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_HUSTLR_CARD_REVIEWS_STATE:
      return {
        reviews: [],
        totalPages: null,
        addedReviewId: null,
        reviewWasDeleted: false,
      };

    case SET_HUSTLR_CARD_REVIEWS:
      return {
        ...state,
        reviews: action.hustlrCardReviews,
        totalPages: action.totalPages,
      };

    case SET_NEXT_HUSTLR_CARD_REVIEWS:
      return {
        ...state,
        reviews: [...state.reviews, ...action.nextHustlrCardReviews],
      };

    case CREATE_HUSTLR_CARD_REVIEW:
      return {
        ...state,
        reviews: [action.review, ...state.reviews],
        addedReviewId: action.review.id,
      };

    case UPDATE_HUSTLR_CARD_REVIEW:
      const updatedHustlrCardReviews = [...state.reviews];
      const updateReviewIndex = updatedHustlrCardReviews.findIndex(
        (review) => review.id === action.review.id
      );
      updatedHustlrCardReviews[updateReviewIndex] = action.review;

      return {
        ...state,
        reviews: updatedHustlrCardReviews,
      };

    case DELETE_HUSTLR_CARD_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review.id !== action.reviewId
        ),
        reviewWasDeleted: true,
      };

    case DELETE_HUSTLR_CARD_REVIEW_PHOTO_ARRAY:
      const newHustlrCardReviews = [...state.reviews];
      const deletePhotoReviewIndex = newHustlrCardReviews.findIndex(
        (review) => review.id === action.reviewId
      );
      const review = newHustlrCardReviews.find(
        (review) => review.id === action.reviewId
      );
      const newReviewPhotos = review.photos.filter(
        (photo) => photo.id !== action.photoId
      );
      review.photos = newReviewPhotos;
      newHustlrCardReviews[deletePhotoReviewIndex] = review;

      return {
        ...state,
        reviews: newHustlrCardReviews,
      };

    case CREATE_HUSTLR_CARD_REVIEW_LIKE:
      const reviewsArrayCopy = [...state.reviews];
      const reviewCopyIndex = reviewsArrayCopy.findIndex(
        (review) => review.id === action.reviewId
      );
      const reviewCopy = reviewsArrayCopy.find(
        (review) => review.id === action.reviewId
      );
      const reviewLikesArrayCopy = [...reviewCopy.likes, action.like];
      reviewCopy.likes = reviewLikesArrayCopy;
      reviewsArrayCopy[reviewCopyIndex] = reviewCopy;

      return {
        ...state,
        reviews: reviewsArrayCopy,
      };

    case UPDATE_HUSTLR_CARD_REVIEW_LIKE:
      const updateReviewsCopy = [...state.reviews];
      const updateReviewIndexCopy = updateReviewsCopy.findIndex(
        (review) => review.id === action.reviewId
      );
      const updateReviewCopy = updateReviewsCopy.find(
        (review) => review.id === action.reviewId
      );
      const udpateReviewLikeIndexCopy = updateReviewCopy.likes.findIndex(
        (like) => like.id === action.like.id
      );
      updateReviewCopy.likes[udpateReviewLikeIndexCopy] = action.like;
      updateReviewsCopy[updateReviewIndexCopy] = updateReviewCopy;

      return {
        ...state,
        reviews: updateReviewsCopy,
      };

    case DELETE_HUSTLR_CARD_REVIEW_LIKE:
      const deleteReviewsCopy = [...state.reviews];
      const deleteReviewIndexCopy = deleteReviewsCopy.findIndex(
        (review) => review.id === action.reviewId
      );
      const deleteReviewCopy = deleteReviewsCopy.find(
        (review) => review.id === action.reviewId
      );
      const deleteReviewLikesCopy = deleteReviewCopy.likes.filter(
        (review) => review.id !== action.sentimentId
      );
      deleteReviewCopy.likes = deleteReviewLikesCopy;
      deleteReviewsCopy[deleteReviewIndexCopy] = deleteReviewCopy;

      return {
        ...state,
        reviews: deleteReviewsCopy,
      };

    default:
      return state;
  }
};

export default hustlrCardReviews;
