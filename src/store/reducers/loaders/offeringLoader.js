import {
  OFFERING_IS_CREATING_LOADER,
  OFFERING_IS_NOT_CREATING_LOADER,
  OFFERING_IS_UPDATING_LOADER,
  OFFERING_IS_NOT_UPDATING_LOADER,
  OFFERING_IS_DELETING_LOADER,
  OFFERING_IS_NOT_DELETING_LOADER,
} from "../../actions/loaders/offeringLoader";

let initialState = {
  creatingLoader: false,
  updatingLoader: false,
  deletingLoader: false,
};

const offeringLoader = (state = initialState, action) => {
  switch (action.type) {
    case OFFERING_IS_CREATING_LOADER:
      return {
        ...state,
        creatingLoader: true,
      };

    case OFFERING_IS_NOT_CREATING_LOADER:
      return {
        ...state,
        creatingLoader: false,
      };

    case OFFERING_IS_UPDATING_LOADER:
      return {
        ...state,
        updatingLoader: true,
      };

    case OFFERING_IS_NOT_UPDATING_LOADER:
      return {
        ...state,
        updatingLoader: false,
      };

    case OFFERING_IS_DELETING_LOADER:
      return {
        ...state,
        deletingLoader: true,
        deletingOfferingId: action.offeringId,
      };

    case OFFERING_IS_NOT_DELETING_LOADER:
      return {
        ...state,
        deletingLoader: false,
      };

    default:
      return state;
  }
};

export default offeringLoader;
