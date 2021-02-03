import { API_BASE_URL } from "../../constants/urls";

// loaders
import {
  REVIEW_IS_LOADING,
  REVIEW_IS_NOT_LOADING,
} from "./loaders/reviewLoader";

// modals
import { closeReviewModal } from "./modals/reviewModal";

// errors
import {
  SET_REVIEW_AUTH_ERROR,
  REMOVE_REVIEW_AUTH_ERROR,
} from "./authErrors/reviewAuthError";

// notifications
import {
  REVIEW_CREATED_SUCCESSFULLY,
  REVIEW_CREATED_UNSUCCESSFULLY,
} from "./notifications/reviewNotifications";

export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const SET_REVIEW = "SET_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

export const createReview = (description, rating, userId, cardId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reviewObj = {
      title: "",
      description: description,
      rating: rating,
      userId: userId,
      cardId: cardId,
    };

    const reqObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(reviewObj),
    };

    dispatch({ type: REVIEW_IS_LOADING });
    fetch(`${API_BASE_URL}/reviews`, reqObj)
      .then((resp) => resp.json())
      .then((review) => {
        if (review.code) {
          dispatch({ type: REVIEW_IS_NOT_LOADING });
          dispatch({ type: SET_REVIEW_AUTH_ERROR, error: review.message });
          dispatch({ type: REVIEW_CREATED_UNSUCCESSFULLY });
          return;
        }

        dispatch({ type: REVIEW_IS_NOT_LOADING });
        dispatch({ type: REMOVE_REVIEW_AUTH_ERROR });
        dispatch({ type: REVIEW_CREATED_SUCCESSFULLY });
        dispatch(closeReviewModal());
      })
      .catch((err) => {
        dispatch({ type: REVIEW_IS_NOT_LOADING });
        dispatch({ type: REVIEW_CREATED_UNSUCCESSFULLY });
      });
  };
};
