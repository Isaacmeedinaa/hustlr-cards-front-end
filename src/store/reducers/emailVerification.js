import { SET_EMAIL_VERIFICATION } from "../actions/emailVerification";

const emailVerification = (state = {}, action) => {
  switch (action.type) {
    case SET_EMAIL_VERIFICATION:
      return action.emailVerification;
    default:
      return state;
  }
};

export default emailVerification;