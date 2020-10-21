import { USER_LOGIN, USER_REGISTER, USER_LOGOUT, USER_UPDATED } from "../actions/user";

const user = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.user;
    case USER_REGISTER:
      return action.user;
    case USER_LOGOUT:
      return null;
    case USER_UPDATED:
      return action.user;
    default:
      return state;
  }
};

export default user;
