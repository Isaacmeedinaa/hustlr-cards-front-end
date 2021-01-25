import {
  LINK_IS_CREATING_LOADER,
  LINK_IS_NOT_CREATING_LOADER,
  LINK_IS_DELETING_LOADER,
  LINK_IS_NOT_DELETING_LOADER,
  LINK_IS_UPDATING_LOADER,
  LINK_IS_NOT_UPDATING_LOADER
} from "../../actions/loaders/socialMediaLinkLoaders";

let initialState = {
  creatingLoader: false,
  deletingLoader: false,
  updatingLoader: false,
  deletingLinkId: 0,
  updatingLinkId: 0,
}

const linkLoader = (state = initialState, action) => {
  switch (action.type) {
    case LINK_IS_CREATING_LOADER:

      return {
        ...state,
        creatingLoader: true
      };

    case LINK_IS_NOT_CREATING_LOADER:

      return {
        ...state,
        creatingLoader: false
      };

    case LINK_IS_UPDATING_LOADER:

      return {
        ...state,
        updatingLoader: true,
        updatingLinkId: action.linkId,
      };

    case LINK_IS_NOT_UPDATING_LOADER:

      return {
        ...state,
        updatingLoader: false,
        updatingLinkId: 0,
      };

    case LINK_IS_DELETING_LOADER:

      return {
        ...state,
        deletingLoader: true,
        deletingLinkId: action.linkId
      };

    case LINK_IS_NOT_DELETING_LOADER:

      return {
        ...state,
        deletingLoader: false,
        deletingLinkId: 0
      };

    default:
      return state;
  }
};

export default linkLoader;