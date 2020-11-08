import {
  FORGOT_PASSWORD_IS_LOADING,
  FORGOT_PASSWORD_IS_NOT_LOADING,
} from "../../actions/loaders/forgotPasswordLoader";

const forgotPasswordLoader = (state = false, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_IS_LOADING:
      return true;

    case FORGOT_PASSWORD_IS_NOT_LOADING:
      return false;

    default:
      return state;
  }
};

export default forgotPasswordLoader;
