import {
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL,
} from "../../actions/modals/authModal";

const authModal = (state = false, action) => {
  switch (action.type) {
    case OPEN_AUTH_MODAL:
      return true;

    case CLOSE_AUTH_MODAL:
      return false;

    default:
      return state;
  }
};

export default authModal;
