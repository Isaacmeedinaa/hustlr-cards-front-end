import {
  CARD_SAVE_UNSUCCESSFUL,
  CARD_SAVED_SUCCESSFULLY,
  HIDE_NOTIFICATION
} from "../../actions/notifications/cardSavedNotifications";

const intialState = {
  show: false,
  success: false,
  message: ''
};

const cardSavedNotification = (state = intialState, action) => {
  switch (action.type) {
    case CARD_SAVED_SUCCESSFULLY:
      return {show: true, success: true, message: 'Your card was saved!'};

    case CARD_SAVE_UNSUCCESSFUL:
      return {show: true, success: false, message: 'Oops, something went wrong. Try again later!'};

    case HIDE_NOTIFICATION:
      return {show: false, success: undefined, message: ''};

    default:
      return state;
  }
};

export default cardSavedNotification;
