import {
  GALLERY_IMAGE_UPLOADED_SUCCESSFULLY,
  GALLERY_IMAGE_UPLOADED_UNSUCCESSFULLY,
  GALLERY_IMAGE_DELETED_SUCCESSFULLY,
  GALLERY_IMAGE_DELETED_UNSUCCESSFULLY,
  HIDE_GALLERY_IMAGE_UPLOADED_NOTIFICATION,
  HIDE_GALLERY_IMAGE_DELETED_NOTIFICATION

} from "../../actions/notifications/galleryNotifications";

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

const galleryNotifications = (state = intialState, action) => {
  switch (action.type) {
    case GALLERY_IMAGE_UPLOADED_SUCCESSFULLY:
      return {
        ...state,
        uploaded : {
          show: true,
          success: true,
          message: 'Your image was uploaded!'
        }
      };

    case GALLERY_IMAGE_UPLOADED_UNSUCCESSFULLY:
      return {
        ...state,
        uploaded : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_GALLERY_IMAGE_UPLOADED_NOTIFICATION:
      return {
        ...state,
        uploaded : {
          show: false,
          success: undefined,
          message: ''
        }
      };

    case GALLERY_IMAGE_DELETED_SUCCESSFULLY:
      return {
        ...state,
        deleted : {
          show: true,
          success: true,
          message: 'Your image was deleted!'
        }
      };

    case GALLERY_IMAGE_DELETED_UNSUCCESSFULLY:
      return {
        ...state,
        deleted : {
          show: true,
          success: false,
          message: 'Oops, something went wrong. Try again later.'
        }
      };

    case HIDE_GALLERY_IMAGE_DELETED_NOTIFICATION:
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

export default galleryNotifications;