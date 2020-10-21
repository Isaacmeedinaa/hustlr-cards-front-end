import { PERSONAL_INFO_ERRORS, PERSONAL_INFO_NO_ERRORS } from "../../actions/errors/personalInfoErrors";

const personalInfoErrors = (state = [], action) => {
  switch (action.type) {
    case PERSONAL_INFO_ERRORS:
      return action.errors;
    case PERSONAL_INFO_NO_ERRORS:
      return [];
    default:
      return state;
  }
};

export default personalInfoErrors;