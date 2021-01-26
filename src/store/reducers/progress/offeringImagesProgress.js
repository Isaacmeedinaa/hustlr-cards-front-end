import {
  OFFERING_IMAGES_ARE_PROGRESSING,
  OFFERING_IMAGES_ARE_NOT_PROGRESSING,
} from "../../actions/progress/offeringImagesProgress";

const initalState = {
  progressing: false,
  currentOfferingImgCount: 0,
  totalOfferingImgCount: 0,
};

const offeringImagesProgress = (state = initalState, action) => {
  switch (action.type) {
    case OFFERING_IMAGES_ARE_PROGRESSING:
      return {
        ...state,
        progressing: true,
        currentOfferingImgCount: action.currentOfferingImgCount,
        totalOfferingImgCount: action.totalOfferingImgCount,
      };

    case OFFERING_IMAGES_ARE_NOT_PROGRESSING:
      return {
        progressing: false,
        currentOfferingImgCount: 0,
        totalOfferingImgCount: 0,
      };

    default:
      return state;
  }
};

export default offeringImagesProgress;
