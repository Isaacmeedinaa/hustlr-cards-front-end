import {
  REVIEW_IS_LOADING,
  REVIEW_IS_NOT_LOADING,
} from "../../actions/loaders/reviewLoader";

const reviewLoader = (state = false, action) => {
  switch (action.type) {
    case REVIEW_IS_LOADING:
      return true;

    case REVIEW_IS_NOT_LOADING:
      return false;

    default:
      return state;
  }
};

export default reviewLoader;
