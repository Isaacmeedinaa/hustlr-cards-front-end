import {
  CARD_GALLERY_IMAGE_IS_LOADING,
  CARD_GALLERY_IMAGE_IS_NOT_LOADING,
} from "../../actions/loaders/cardGalleryImageLoader";

const cardGalleryImageLoader = (state = false, action) => {
  switch (action.type) {
    case CARD_GALLERY_IMAGE_IS_LOADING:
      return true;
    case CARD_GALLERY_IMAGE_IS_NOT_LOADING:
      return false;
    default:
      return state;
  }
};

export default cardGalleryImageLoader;
