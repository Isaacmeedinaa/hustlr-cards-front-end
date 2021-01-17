import {
  SEND_MESSAGE_IS_LOADING,
  SEND_MESSAGE_IS_NOT_LOADING
} from "../../actions/loaders/contactMessageLoader";

const contactMessageLoader = (state = false, action) => {
  switch (action.type) {
    case SEND_MESSAGE_IS_LOADING:
      return true;

    case SEND_MESSAGE_IS_NOT_LOADING:
      return false;

    default:
      return state;
  }
};

export default contactMessageLoader;