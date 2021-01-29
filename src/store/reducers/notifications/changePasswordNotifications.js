import {
  PASSWORD_CHANGED_SUCCESSFULLY,
  PASSWORD_CHANGED_UNSUCCESSFULLY,
  HIDE_PASSWORD_CHANGED_NOTIFICATION,
} from "../../actions/notifications/changePasswordNotifications";

const intialState = {
  show: false,
  success: false,
  message: "",
};

const changePasswordNotifications = (state = intialState, action) => {
  switch (action.type) {
    case PASSWORD_CHANGED_SUCCESSFULLY:
      return {
        show: true,
        success: true,
        message: "Your password was changed!",
      };

    case PASSWORD_CHANGED_UNSUCCESSFULLY:
      return {
        show: true,
        success: false,
        message: "Password change unsuccessful. Please correct the errors.",
      };

    case HIDE_PASSWORD_CHANGED_NOTIFICATION:
      return {
        show: false,
        success: undefined,
        message: "",
      };
    default:
      return state;
  }
};

export default changePasswordNotifications;
