import {
  PAYMENT_METHOD_CREATED_SUCCESSFULLY,
  PAYMENT_METHOD_CREATED_UNSUCCESSFULLY,
  PAYMENT_METHOD_DELETED_SUCCESSFULLY,
  PAYMENT_METHOD_DELETED_UNSUCCESSFULLY,
  HIDE_PAYMENT_METHOD_CREATED_NOTIFICATION,
  HIDE_PAYMENT_METHOD_DELETED_NOTIFICATION

} from "../../actions/notifications/paymentMethodsNotifications";

const intialState = {
  created: {
    show: false,
    success: false,
    message: ''
  },
  deleted: {
    show: false,
    success: false,
    message: ''
  }
};

const paymentMethodNotifications = (state = intialState, action) => {
  switch (action.type) {

    case PAYMENT_METHOD_CREATED_SUCCESSFULLY:
      return {
        ...state,
        created : {
          show: true,
          success: true,
          message: 'The payment method was added to your card!'
        }
      };

    case PAYMENT_METHOD_CREATED_UNSUCCESSFULLY:
      return {
        ...state,
        created : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_PAYMENT_METHOD_CREATED_NOTIFICATION:
      return {
        ...state,
        created : {
          show: false,
          success: undefined,
          message: ''
        }
      };

      case PAYMENT_METHOD_DELETED_SUCCESSFULLY:
        return {
          ...state,
          deleted : {
            show: true,
            success: true,
            message: 'The payment method was successfully deleted!'
          }
        };
  
      case PAYMENT_METHOD_DELETED_UNSUCCESSFULLY:
        return {
          ...state,
          deleted : {
            show: true,
            success: false,
            message: 'Oops, something went wrong. Try again later.'
          }
        };
  
      case HIDE_PAYMENT_METHOD_DELETED_NOTIFICATION:
        return {
          ...state,
          deleted : {
            show: false,
            success: undefined,
            message: ''
          }
        };

    default:
      return state;
  }
};

export default paymentMethodNotifications;