import {
  CHANGE_PASSWORD_CODE_IS_LOADING,
  CHANGE_PASSWORD_CODE_IS_NOT_LOADING,
} from "../../actions/loaders/changePasswordCodeLoader";

const changePasswordCodeLoader = (state = false, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_CODE_IS_LOADING:
      return true;

    case CHANGE_PASSWORD_CODE_IS_NOT_LOADING:
      return false;

    default:
      return state;
  }
};

export default changePasswordCodeLoader;
