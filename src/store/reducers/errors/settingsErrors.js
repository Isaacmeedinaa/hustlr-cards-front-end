import { SETTINGS_ERRORS, SETTINGS_NO_ERRORS } from "../../actions/errors/settingsErrors";

const settingsErrors = (state = [], action) => {
  switch (action.type) {
    case SETTINGS_ERRORS:
      return action.errors;
    case SETTINGS_NO_ERRORS:
      return [];
    default:
      return state;
  }
};

export default settingsErrors;