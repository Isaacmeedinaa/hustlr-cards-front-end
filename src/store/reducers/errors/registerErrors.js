import {
  REGISTER_ERRORS,
  REGISTER_NO_ERRORS,
} from "../../actions/errors/registerErrors";

const registerErrors = (state = [], action) => {
  switch (action.type) {
    case REGISTER_ERRORS:
      return action.messages;
    case REGISTER_NO_ERRORS:
      const noRegisterErrors = [];
      return noRegisterErrors;
    default:
      return state;
  }
};

export default registerErrors;
