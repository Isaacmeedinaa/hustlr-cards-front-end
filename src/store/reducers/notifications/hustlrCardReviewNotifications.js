import {
  HUSTLR_CARD_REVIEWS_FETCHED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEWS_FETCHED_UNSUCCESSFULLY,
  HUSTLR_CARD_REVIEW_FETCHED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_FETCHED_UNSUCCESSFULLY,
  HUSTLR_CARD_REVIEW_CREATED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_CREATED_UNSUCCESSFULLY,
  HUSTLR_CARD_REVIEW_SAVED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_SAVED_UNSUCCESSFULLY,
  HUSTLR_CARD_REVIEW_DELETED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_DELETED_UNSUCCESSFULLY,
  HUSTLR_CARD_REVIEW_PHOTO_DELETED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_PHOTO_DELETED_UNSUCCESSFULLY,
  HIDE_HUSTLR_CARD_REVIEWS_FETCHED_NOTIFICATION,
  HIDE_HUSTLR_CARD_REVIEW_FETCHED_NOTIFICATION,
  HIDE_HUSTLR_CARD_REVIEW_CREATED_NOTIFICATION,
  HIDE_HUSTLR_CARD_REVIEW_SAVED_NOTIFICATION,
  HIDE_HUSTLR_CARD_REVIEW_DELETED_NOTIFICATION,
  HIDE_HUSTLR_CARD_REVIEW_PHOTO_DELETED_NOTIFICATION,
} from "../../actions/notifications/hustlrCardReviewNotifications";

const intialState = {
  fetchedAll: {
    show: false,
    success: false,
    message: "",
  },
  fetched: {
    show: false,
    success: false,
    message: "",
  },
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
  deletedPhoto: {
    show: false,
    success: false,
    message: "",
  },
};

const hustlrCardReviewNotifications = (state = intialState, action) => {
  switch (action.type) {
    case HUSTLR_CARD_REVIEWS_FETCHED_SUCCESSFULLY:
      return {
        ...state,
        fetchedAll: {
          show: true,
          success: true,
          message: "Reviews were fetched!",
        },
      };

    case HUSTLR_CARD_REVIEWS_FETCHED_UNSUCCESSFULLY:
      return {
        ...state,
        fetchedAll: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_HUSTLR_CARD_REVIEWS_FETCHED_NOTIFICATION:
      return {
        ...state,
        fetchedAll: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    case HUSTLR_CARD_REVIEW_FETCHED_SUCCESSFULLY:
      return {
        ...state,
        fetched: {
          show: true,
          success: true,
          message: "Review was fetched!",
        },
      };

    case HUSTLR_CARD_REVIEW_FETCHED_UNSUCCESSFULLY:
      return {
        ...state,
        fetchedAll: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_HUSTLR_CARD_REVIEW_FETCHED_NOTIFICATION:
      return {
        ...state,
        fetchedAll: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    case HUSTLR_CARD_REVIEW_CREATED_SUCCESSFULLY:
      return {
        ...state,
        created: {
          show: true,
          success: true,
          message: "Your review was posted!",
        },
      };

    case HUSTLR_CARD_REVIEW_CREATED_UNSUCCESSFULLY:
      return {
        ...state,
        created: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_HUSTLR_CARD_REVIEW_CREATED_NOTIFICATION:
      return {
        ...state,
        created: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    case HUSTLR_CARD_REVIEW_SAVED_SUCCESSFULLY:
      return {
        ...state,
        saved: {
          show: true,
          success: true,
          message: "Your review was updated!",
        },
      };

    case HUSTLR_CARD_REVIEW_SAVED_UNSUCCESSFULLY:
      return {
        ...state,
        saved: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_HUSTLR_CARD_REVIEW_SAVED_NOTIFICATION:
      return {
        ...state,
        saved: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    case HUSTLR_CARD_REVIEW_DELETED_SUCCESSFULLY:
      return {
        ...state,
        deleted: {
          show: true,
          success: true,
          message: "Your review was successfully deleted!",
        },
      };

    case HUSTLR_CARD_REVIEW_DELETED_UNSUCCESSFULLY:
      return {
        ...state,
        deleted: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_HUSTLR_CARD_REVIEW_DELETED_NOTIFICATION:
      return {
        ...state,
        deleted: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    case HUSTLR_CARD_REVIEW_PHOTO_DELETED_SUCCESSFULLY:
      return {
        ...state,
        deletedPhoto: {
          show: true,
          success: true,
          message: "Your photo was successfully deleted!",
        },
      };

    case HUSTLR_CARD_REVIEW_PHOTO_DELETED_UNSUCCESSFULLY:
      return {
        ...state,
        deletedPhoto: {
          show: true,
          success: false,
          message: "Oops, something went wrong. Try again later.",
        },
      };

    case HIDE_HUSTLR_CARD_REVIEW_PHOTO_DELETED_NOTIFICATION:
      return {
        ...state,
        deletedPhoto: {
          show: false,
          success: undefined,
          message: "",
        },
      };

    default:
      return state;
  }
};

export default hustlrCardReviewNotifications;
