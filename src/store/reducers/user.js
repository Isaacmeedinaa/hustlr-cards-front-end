import { USER_LOGIN, USER_REGISTER } from "../actions/user";

const user = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.user;
    case USER_REGISTER:
      return state;
    default:
      return state;
  }
};

export default user;
