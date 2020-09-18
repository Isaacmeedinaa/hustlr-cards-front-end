import {
  CARD_IMAGE_IS_UPLOADING,
  CARD_IMAGE_IS_NOT_UPLOADING,
} from "../../actions/loaders/cardImageLoader";

const cardLoader = (state = false, action) => {
  switch (action.type) {
    case CARD_IMAGE_IS_UPLOADING:
      return true;

    case CARD_IMAGE_IS_NOT_UPLOADING:
      return false;

    default:
      return state;
  }
};

export default cardLoader;
