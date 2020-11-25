import {
  OFFERING_IMAGE_IS_LOADING,
  OFFERING_IMAGE_IS_NOT_LOADING,
} from "../../actions/loaders/offeringImageLoader";

let initialState = {
  loading: false,
  offeringId: 0
}

const offeringImageLoader = (state = initialState, action) => {
  switch (action.type) {
    case OFFERING_IMAGE_IS_LOADING:

      return {
        loading: true,
        offeringId: action.offeringId
      };

    case OFFERING_IMAGE_IS_NOT_LOADING:

      return {
        loading: false,
        offeringId: 0
      };

    default:
      return state;
  }
};

export default offeringImageLoader;