import {
  LINK_CREATED_SUCCESSFULLY,
  LINK_CREATED_UNSUCCESSFULLY,
  LINK_SAVED_UNSUCCESSFULLY,
  LINK_SAVED_SUCCESSFULLY,
  LINK_DELETED_SUCCESSFULLY,
  LINK_DELETED_UNSUCCESSFULLY,
  HIDE_LINK_CREATED_NOTIFICATION,
  HIDE_LINK_SAVED_NOTIFICATION,
  HIDE_LINK_DELETED_NOTIFICATION

} from "../../actions/notifications/socialMediaLinkNotifications";

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

const linkNotifications = (state = intialState, action) => {
  switch (action.type) {
    case LINK_SAVED_SUCCESSFULLY:
      return {
        ...state,
        saved : {
          show: true,
          success: true,
          message: 'Your links were saved!'
        }
      };

    case LINK_SAVED_UNSUCCESSFULLY:
      return {
        ...state,
        saved : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_LINK_SAVED_NOTIFICATION:
      return {
        ...state,
        saved : {
          show: false,
          success: undefined,
          message: ''
        }
      };

    case LINK_CREATED_SUCCESSFULLY:
      return {
        ...state,
        created : {
          show: true,
          success: true,
          message: 'Your link was added to your card!'
        }
      };

    case LINK_CREATED_UNSUCCESSFULLY:
      return {
        ...state,
        created : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_LINK_CREATED_NOTIFICATION:
      return {
        ...state,
        created : {
          show: false,
          success: undefined,
          message: ''
        }
      };

      case LINK_DELETED_SUCCESSFULLY:
        return {
          ...state,
          deleted : {
            show: true,
            success: true,
            message: 'Your link was successfully deleted!'
          }
        };
  
      case LINK_DELETED_UNSUCCESSFULLY:
        return {
          ...state,
          deleted : {
            show: true,
            success: false,
            message: 'Oops, something went wrong. Try again later.'
          }
        };
  
      case HIDE_LINK_DELETED_NOTIFICATION:
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

export default linkNotifications;