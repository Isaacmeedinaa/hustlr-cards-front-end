import {
  PASSWORD_IS_UPDATING,
  PASSWORD_IS_NOT_UPDATING,
} from "../../actions/loaders/changePasswordLoader";

const changePasswordLoader = (state = false, action) => {
  switch (action.type) {
    case PASSWORD_IS_UPDATING:
      return true;

    case PASSWORD_IS_NOT_UPDATING:
      return false;

    default:
      return state;
  }
};

export default changePasswordLoader;