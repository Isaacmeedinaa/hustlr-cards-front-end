import {
  ACCOUNT_UPGRADED_SUCCESSFULLY,
  ACCOUNT_UPGRADED_UNSUCCESSFULLY,
  HIDE_ACCOUNT_UPGRADED_NOTIFICATION,
} from "../../actions/notifications/accountUpgradedNotifications";

const intialState = {
  show: false,
  success: false,
  message: "",
};

const accountUpgradedNotifications = (state = intialState, action) => {
  switch (action.type) {
    case ACCOUNT_UPGRADED_SUCCESSFULLY:
      return {
        show: true,
        success: true,
        message: "Your account was upgraded.",
      };

    case ACCOUNT_UPGRADED_UNSUCCESSFULLY:
      return {
        show: true,
        success: false,
        message: "Your account failed to upgrade.",
      };

    case HIDE_ACCOUNT_UPGRADED_NOTIFICATION:
      return {
        show: false,
        success: undefined,
        message: "",
      };
    default:
      return state;
  }
};

export default accountUpgradedNotifications;
