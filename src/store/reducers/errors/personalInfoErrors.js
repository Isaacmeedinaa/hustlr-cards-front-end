import {
  PERSONAL_INFO_ERRORS,
  PERSONAL_INFO_NO_ERRORS,
} from "../../actions/errors/personalInfoErrors";

const personalInfoErrors = (state = false, action) => {
  switch (action.type) {
    case PERSONAL_INFO_ERRORS:
      return true;
    case PERSONAL_INFO_NO_ERRORS:
      return false;
    default:
      return state;
  }
};

export default personalInfoErrors;
