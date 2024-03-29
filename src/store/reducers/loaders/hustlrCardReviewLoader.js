import {
  HUSTLR_CARD_REVIEWS_ARE_LOADING,
  HUSTLR_CARD_REVIEWS_ARE_NOT_LOADING,
  HUSTLR_CARD_NEXT_REVIEWS_ARE_LOADING,
  HUSTLR_CARD_NEXT_REVIEWS_ARE_NOT_LOADING,
  HUSTLR_CARD_REVIEW_IS_LOADING,
  HUSTLR_CARD_REVIEW_IS_NOT_LOADING,
  HUSTLR_CARD_REVIEW_IS_CREATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_CREATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_UPDATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_PHOTO_IS_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_PHOTO_IS_NOT_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_LIKE_IS_LOADING,
  HUSTLR_CARD_REVIEW_LIKE_IS_NOT_LOADING,
} from "../../actions/loaders/hustlrCardReviewLoader";

let initialState = {
  fetchingAllLoader: false,
  fetchingNextLoader: false,
  fetchingLoader: false,
  creatingLoader: false,
  updatingLoader: false,
  deletingLoader: false,
  deletingPhotoLoader: false,
  likeLoader: false,
};

const hustlrCardReviewLoader = (state = initialState, action) => {
  switch (action.type) {
    case HUSTLR_CARD_REVIEWS_ARE_LOADING:
      return {
        ...state,
        fetchingAllLoader: true,
      };

    case HUSTLR_CARD_REVIEWS_ARE_NOT_LOADING:
      return {
        ...state,
        fetchingAllLoader: false,
      };

    case HUSTLR_CARD_NEXT_REVIEWS_ARE_LOADING:
      return {
        ...state,
        fetchingNextLoader: true,
      };

    case HUSTLR_CARD_NEXT_REVIEWS_ARE_NOT_LOADING:
      return {
        ...state,
        fetchingNextLoader: false,
      };

    case HUSTLR_CARD_REVIEW_IS_LOADING:
      return {
        ...state,
        fetchingLoader: true,
      };

    case HUSTLR_CARD_REVIEW_IS_NOT_LOADING:
      return {
        ...state,
        fetchingLoader: false,
      };

    case HUSTLR_CARD_REVIEW_IS_CREATING_LOADER:
      return {
        ...state,
        creatingLoader: true,
      };

    case HUSTLR_CARD_REVIEW_IS_NOT_CREATING_LOADER:
      return {
        ...state,
        creatingLoader: false,
      };

    case HUSTLR_CARD_REVIEW_IS_UPDATING_LOADER:
      return {
        ...state,
        updatingLoader: true,
      };

    case HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER:
      return {
        ...state,
        updatingLoader: false,
      };

    case HUSTLR_CARD_REVIEW_IS_DELETING_LOADER:
      return {
        ...state,
        deletingLoader: true,
        deletingOfferingId: action.offeringId,
      };

    case HUSTLR_CARD_REVIEW_IS_NOT_DELETING_LOADER:
      return {
        ...state,
        deletingLoader: false,
      };

    case HUSTLR_CARD_REVIEW_PHOTO_IS_DELETING_LOADER:
      return {
        ...state,
        deletingPhotoLoader: true,
      };

    case HUSTLR_CARD_REVIEW_PHOTO_IS_NOT_DELETING_LOADER:
      return {
        ...state,
        deletingPhotoLoader: false,
      };

    case HUSTLR_CARD_REVIEW_LIKE_IS_LOADING:
      return {
        ...state,
        likeLoader: true,
      };

    case HUSTLR_CARD_REVIEW_LIKE_IS_NOT_LOADING:
      return {
        ...state,
        likeLoader: false,
      };

    default:
      return state;
  }
};

export default hustlrCardReviewLoader;
