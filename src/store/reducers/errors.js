import {
  REQUEST_TIMEOUT_ERR,
  INVALID_LOGIN_CREDENTIALS_ERR,
  INVALID_REGISTER_CREDENTIALS_ERR,
  NO_LOGIN_ERRORS,
} from "../actions/errors";

const errors = (state = [], action) => {
  switch (action.type) {
    case INVALID_LOGIN_CREDENTIALS_ERR:
      return state.concat(action.message);
    case NO_LOGIN_ERRORS:
      const noErrorsArr = [];
      return noErrorsArr;
    default:
      return state;
  }
};

export default errors;
