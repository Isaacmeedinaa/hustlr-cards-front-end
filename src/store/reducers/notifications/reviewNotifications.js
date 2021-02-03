import {
  REVIEW_CREATED_SUCCESSFULLY,
  REVIEW_CREATED_UNSUCCESSFULLY,
  REVIEW_SAVED_SUCCESSFULLY,
  REVIEW_SAVED_UNSUCCESSFULLY,
  REVIEW_DELETED_SUCCESSFULLY,
  REVIEW_DELETED_UNSUCCESSFULLY,
  HIDE_REVIEW_CREATED_NOTIFICATION,
  HIDE_REVIEW_SAVED_NOTIFICATION,
  HIDE_REVIEW_DELETED_NOTIFICATION,
} from "../../actions/notifications/reviewNotifications";

const intialState = {
  saved: {
    show: false,
    success: false,
    message: "",
  },
  created: {
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

const reviewNotifications = (state = intialState, action) => {
  switch (action.type) {
    case REVIEW_SAVED_SUCCESSFULLY:
      return {
        ...state,
        saved: {
          show: true,
          success: true,
          message: "Your review was updated!",
        },
      };

    case REVIEW_SAVED_UNSUCCESSFULLY:
      return {
        ...state,
        saved: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_REVIEW_SAVED_NOTIFICATION:
      return {
        ...state,
        saved: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    case REVIEW_CREATED_SUCCESSFULLY:
      return {
        ...state,
        created: {
          show: true,
          success: true,
          message: "Your review was posted!",
        },
      };

    case REVIEW_CREATED_UNSUCCESSFULLY:
      return {
        ...state,
        created: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_REVIEW_CREATED_NOTIFICATION:
      return {
        ...state,
        created: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    case REVIEW_DELETED_SUCCESSFULLY:
      return {
        ...state,
        deleted: {
          show: true,
          success: true,
          message: "Your review was successfully deleted!",
        },
      };

    case REVIEW_DELETED_UNSUCCESSFULLY:
      return {
        ...state,
        deleted: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_REVIEW_DELETED_NOTIFICATION:
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

export default reviewNotifications;
