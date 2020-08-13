import {
  REQUEST_TIMEOUT_ERR,
  INVALID_LOGIN_CREDENTIALS_ERR,
  TAKEN_REGISTER_USERNAME_EMAIL_ERR,
  INVALID_REGISTER_EMAIL_PASSWORD_ERR,
  NOT_MATCH_REGISTER_PASSWORDS_ERR,
  NO_LOGIN_ERRORS,
  NO_REGISTER_ERRORS,
} from "../actions/errors";

const errors = (state = [], action) => {
  switch (action.type) {
    case INVALID_LOGIN_CREDENTIALS_ERR:
      state = [];
      return action.message;
    case TAKEN_REGISTER_USERNAME_EMAIL_ERR:
      state = [];
      return action.message;
    case INVALID_REGISTER_EMAIL_PASSWORD_ERR:
      state = [];
      return action.messages;
    case NOT_MATCH_REGISTER_PASSWORDS_ERR:
      state = [];
      return action.message;
    case NO_LOGIN_ERRORS:
      const noLoginErrorsArr = [];
      return noLoginErrorsArr;
    case NO_REGISTER_ERRORS:
      const noRegisterErrorsArr = [];
      return noRegisterErrorsArr;
    default:
      return state;
  }
};

export default errors;
