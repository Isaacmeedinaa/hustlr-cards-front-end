import {
  OFFERING_IS_CREATING_LOADER,
  OFFERING_IS_NOT_CREATING_LOADER,
  OFFERING_IS_DELETING_LOADER,
  OFFERING_IS_NOT_DELETING_LOADER
} from "../../actions/loaders/offeringLoader";

let initialState = {
  creatingLoader: false,
  deletingLoader: false,
  deletingOfferingId: 0,
}

const offeringImageLoader = (state = initialState, action) => {
  switch (action.type) {
    case OFFERING_IS_CREATING_LOADER:

      return {
        ...state,
        creatingLoader: true
      };

    case OFFERING_IS_NOT_CREATING_LOADER:

      return {
        ...state,
        creatingLoader: false
      };

    case OFFERING_IS_DELETING_LOADER:

      return {
        ...state,
        deletingLoader: true,
        deletingOfferingId: action.offeringId
      };

    case OFFERING_IS_NOT_DELETING_LOADER:

      return {
        ...state,
        deletingLoader: false,
        deletingOfferingId: 0
      };

    default:
      return state;
  }
};

export default offeringImageLoader;