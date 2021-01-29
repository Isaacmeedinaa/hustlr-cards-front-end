import {
  OFFERING_IMAGE_UPLOADED_SUCCESSFULLY,
  OFFERING_IMAGE_UPLOADED_UNSUCCESSFULLY,
  OFFERING_IMAGE_DELETED_SUCCESSFULLY,
  OFFERING_IMAGE_DELETED_UNSUCCESSFULLY,
  HIDE_OFFERING_IMAGE_UPLOADED_NOTIFICATION,
  HIDE_OFFERING_IMAGE_DELETED_NOTIFICATION,
} from "../../actions/notifications/offeringImageNotifications";

const intialState = {
  uploaded: {
    show: false,
    success: false,
    message: "",
  },
  deleted: {
    show: false,
    success: false,
    message: "",
  },
};

const offeringNotifications = (state = intialState, action) => {
  switch (action.type) {
    case OFFERING_IMAGE_UPLOADED_SUCCESSFULLY:
      return {
        ...state,
        uploaded: {
          show: true,
          success: true,
          message: "Your image was uploaded!",
        },
      };

    case OFFERING_IMAGE_UPLOADED_UNSUCCESSFULLY:
      return {
        ...state,
        uploaded: {
          show: true,
          success: false,
          message:
            "Oops, your image failed to upload. Ensure your image is less than 5MB.",
        },
      };

    case HIDE_OFFERING_IMAGE_UPLOADED_NOTIFICATION:
      return {
        ...state,
        uploaded: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    case OFFERING_IMAGE_DELETED_SUCCESSFULLY:
      return {
        ...state,
        deleted: {
          show: true,
          success: true,
          message: "Your image was deleted!",
        },
      };

    case OFFERING_IMAGE_DELETED_UNSUCCESSFULLY:
      return {
        ...state,
        deleted: {
          show: true,
          success: false,
          message: "Oops, your image failed to delete. Try again later.",
        },
      };

    case HIDE_OFFERING_IMAGE_DELETED_NOTIFICATION:
      return {
        ...state,
        deleted: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    default:
      return state;
  }
};

export default offeringNotifications;
