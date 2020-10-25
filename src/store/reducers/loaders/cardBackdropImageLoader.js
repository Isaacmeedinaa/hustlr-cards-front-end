import {
  CARD_BACKDROP_IMAGE_IS_UPLOADING,
  CARD_BACKDROP_IMAGE_IS_NOT_UPLOADING,
} from "../../actions/loaders/cardBackdropImageLoader";

const cardBackdropImageLoader = (state = false, action) => {
  switch (action.type) {
    case CARD_BACKDROP_IMAGE_IS_UPLOADING:
      return true;
    case CARD_BACKDROP_IMAGE_IS_NOT_UPLOADING:
      return false;
    default:
      return state;
  }
};

export default cardBackdropImageLoader;
