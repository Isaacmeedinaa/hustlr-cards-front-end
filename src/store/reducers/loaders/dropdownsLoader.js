import {
  DROPDOWNS_ARE_LOADING,
  DROPDOWNS_ARE_NOT_LOADING,
} from "../../actions/loaders/dropdownsLoader";

const dropdownsLoader = (state = false, action) => {
  switch (action.type) {
    case DROPDOWNS_ARE_LOADING:
      return true;

    case DROPDOWNS_ARE_NOT_LOADING:
      return false;

    default:
      return state;
  }
};

export default dropdownsLoader;
