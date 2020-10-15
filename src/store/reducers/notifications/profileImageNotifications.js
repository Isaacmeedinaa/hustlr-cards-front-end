import {
  PROFILE_IMAGE_UPLOADED_SUCCESSFULLY,
  PROFILE_IMAGE_UPLOADED_UNSUCCESSFULLY,
  PROFILE_IMAGE_DELETED_SUCCESSFULLY,
  PROFILE_IMAGE_DELETED_UNSUCCESSFULLY,
  HIDE_PROFILE_IMAGE_UPLOADED_NOTIFICATION,
  HIDE_PROFILE_IMAGE_DELETED_NOTIFICATION

} from "../../actions/notifications/profileImageNotifications";

const intialState = {
  uploaded: {
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

const profileNotifications = (state = intialState, action) => {
  switch (action.type) {
    case PROFILE_IMAGE_UPLOADED_SUCCESSFULLY:
      return {
        ...state,
        uploaded : {
          show: true,
          success: true,
          message: 'Your profile image was uploaded!'
        }
      };

    case PROFILE_IMAGE_UPLOADED_UNSUCCESSFULLY:
      return {
        ...state,
        uploaded : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_PROFILE_IMAGE_UPLOADED_NOTIFICATION:
      return {
        ...state,
        uploaded : {
          show: false,
          success: undefined,
          message: ''
        }
      };

    case PROFILE_IMAGE_DELETED_SUCCESSFULLY:
      return {
        ...state,
        deleted : {
          show: true,
          success: true,
          message: 'Your profile image was deleted!'
        }
      };

    case PROFILE_IMAGE_DELETED_UNSUCCESSFULLY:
      return {
        ...state,
        deleted : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_PROFILE_IMAGE_DELETED_NOTIFICATION:
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

export default profileNotifications;