import {
  LOGIN_ERRORS,
  LOGIN_NO_ERRORS,
} from "../../actions/errors/loginErrors";

const loginErrors = (state = [], action) => {
  switch (action.type) {
    case LOGIN_ERRORS:
      return action.messages;
    case LOGIN_NO_ERRORS:
      const noLoginErrors = [];
      return noLoginErrors;
    default:
      return state;
  }
};

export default loginErrors;
