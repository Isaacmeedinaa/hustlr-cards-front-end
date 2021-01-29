import {
  USER_UPDATED_SUCCESSFULLY,
  USER_UPDATED_UNSUCCESSFULLY,
  HIDE_USER_UPDATED_NOTIFICATION,
} from "../../actions/notifications/userUpdatedNotifications";

const intialState = {
  show: false,
  success: false,
  message: "",
};

const userUpdatedNotifications = (state = intialState, action) => {
  switch (action.type) {
    case USER_UPDATED_SUCCESSFULLY:
      return {
        show: true,
        success: true,
        message: "Your personal information was updated!",
      };

    case USER_UPDATED_UNSUCCESSFULLY:
      return {
        show: true,
        success: false,
        message: "Update unsucessful. Please correct the errors.",
      };

    case HIDE_USER_UPDATED_NOTIFICATION:
      return {
        show: false,
        success: undefined,
        message: "",
      };
    default:
      return state;
  }
};

export default userUpdatedNotifications;
