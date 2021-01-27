import {
  GALLERY_IMAGES_ARE_PROGRESSING,
  GALLERY_IMAGES_ARE_NOT_PROGRESSING,
} from "../../actions/progress/galleryImagesProgress";

const initialState = {
  progressing: false,
  currentGalleryImgCount: 0,
  totalGalleryImgCount: 0,
};

const galleryImagesProgress = (state = initialState, action) => {
  switch (action.type) {
    case GALLERY_IMAGES_ARE_PROGRESSING:
      return {
        ...state,
        progressing: true,
        currentGalleryImgCount: action.currentGalleryImgCount,
        totalGalleryImgCount: action.totalGalleryImgCount,
      };

    case GALLERY_IMAGES_ARE_NOT_PROGRESSING:
      return {
        progressing: false,
        currentGalleryImgCount: 0,
        totalGalleryImgCount: 0,
      };

    default:
      return state;
  }
};

export default galleryImagesProgress;
