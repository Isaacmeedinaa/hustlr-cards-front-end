import {
  MESSAGE_SENT_SUCCESSFULLY,
  MESSAGE_SENT_UNSUCCESSFULLY,
  HIDE_MESSAGE_SENT_NOTIFICATION

} from "../../actions/notifications/contactMessageNotification";

const intialState = {
  show: false,
  success: false,
  message: ''
};

const contactMessageNotifications = (state = intialState, action) => {
  switch (action.type) {
    case MESSAGE_SENT_SUCCESSFULLY:
      return {
        show: true,
          success: true,
          message: 'Your message was sent! We will reply to your email.'
      };

    case MESSAGE_SENT_UNSUCCESSFULLY:
      return {
        show: true,
        success: false,
        message: 'Oops, something went wrong. Try again later.'
      };

    case HIDE_MESSAGE_SENT_NOTIFICATION:
      return {
        show: false,
        success: undefined,
        message: ''
      };
    default:
      return state;
  }
};

export default contactMessageNotifications;