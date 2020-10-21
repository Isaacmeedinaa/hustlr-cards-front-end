import {
  USER_IS_UPDATING,
  USER_IS_NOT_UPDATING,
} from "../../actions/loaders/userUpdatingLoader";

const userUpdatingLoader = (state = false, action) => {
  switch (action.type) {
    case USER_IS_UPDATING:
      return true;

    case USER_IS_NOT_UPDATING:
      return false;

    default:
      return state;
  }
};

export default userUpdatingLoader;