import { USER_LOGIN, USER_REGISTER, USER_LOGOUT } from "../actions/user";

const user = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.user;
    case USER_REGISTER:
      return state;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};

export default user;
