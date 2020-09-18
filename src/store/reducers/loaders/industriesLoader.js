import {
  INDUSTRIES_ARE_LOADING,
  INDUSTRIES_ARE_NOT_LOADING,
} from "../../actions/loaders/industriesLoader";

const industriesLoader = (state = false, action) => {
  switch (action.type) {
    case INDUSTRIES_ARE_LOADING:
      return true;

    case INDUSTRIES_ARE_NOT_LOADING:
      return false;

    default:
      return state;
  }
};

export default industriesLoader;
