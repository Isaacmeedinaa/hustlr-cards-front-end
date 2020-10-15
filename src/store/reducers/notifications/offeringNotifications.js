import {
  OFFERING_CREATED_SUCCESSFULLY,
  OFFERING_CREATED_UNSUCCESSFULLY,
  OFFERING_SAVED_UNSUCCESSFULLY,
  OFFERING_SAVED_SUCCESSFULLY,
  OFFERING_DELETED_SUCCESSFULLY,
  OFFERING_DELETED_UNSUCCESSFULLY,
  HIDE_OFFERING_CREATED_NOTIFICATION,
  HIDE_OFFERING_SAVED_NOTIFICATION,
  HIDE_OFFERING_DELETED_NOTIFICATION

} from "../../actions/notifications/offeringNotifications";

const intialState = {
  saved: {
    show: false,
    success: false,
    message: ''
  },
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

const offeringNotifications = (state = intialState, action) => {
  switch (action.type) {
    case OFFERING_SAVED_SUCCESSFULLY:
      return {
        ...state,
        saved : {
          show: true,
          success: true,
          message: 'Your product/service was saved!'
        }
      };

    case OFFERING_SAVED_UNSUCCESSFULLY:
      return {
        ...state,
        saved : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_OFFERING_SAVED_NOTIFICATION:
      return {
        ...state,
        saved : {
          show: false,
          success: undefined,
          message: ''
        }
      };

    case OFFERING_CREATED_SUCCESSFULLY:
      return {
        ...state,
        created : {
          show: true,
          success: true,
          message: 'A product/service was added to your card!'
        }
      };

    case OFFERING_CREATED_UNSUCCESSFULLY:
      return {
        ...state,
        created : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_OFFERING_CREATED_NOTIFICATION:
      return {
        ...state,
        created : {
          show: false,
          success: undefined,
          message: ''
        }
      };

      case OFFERING_DELETED_SUCCESSFULLY:
        return {
          ...state,
          deleted : {
            show: true,
            success: true,
            message: 'Your product/service was successfully deleted!'
          }
        };
  
      case OFFERING_DELETED_UNSUCCESSFULLY:
        return {
          ...state,
          deleted : {
            show: true,
            success: false,
            message: 'Oops, something went wrong. Try again later.'
          }
        };
  
      case HIDE_OFFERING_DELETED_NOTIFICATION:
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

export default offeringNotifications;