import {
  CARD_SAVE_UNSUCCESSFUL,
  CARD_SAVED_SUCCESSFULLY,
  HIDE_NOTIFICATION
} from "../../actions/notifications/cardSavedNotifications";

const intialState = {
  showNotification: false,
  success: false
};

const cardSavedNotification = (state = intialState, action) => {
  switch (action.type) {
    case CARD_SAVED_SUCCESSFULLY:
      return {showNotification: true, success: true};

    case CARD_SAVE_UNSUCCESSFUL:
      return {showNotification: true, success: false};

    case HIDE_NOTIFICATION:
      return {showNotification: false, success: undefined};

    default:
      return state;
  }
};

export default cardSavedNotification;
