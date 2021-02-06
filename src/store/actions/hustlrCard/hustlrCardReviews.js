// API URL
import { API_BASE_URL } from "../../../constants/urls";

// modals
import { closeHustlrCardReviewModal } from "../modals/hustlrCardReviewModal";

// Loaders
import {
  HUSTLR_CARD_REVIEWS_ARE_LOADING,
  HUSTLR_CARD_REVIEWS_ARE_NOT_LOADING,
  HUSTLR_CARD_REVIEW_IS_CREATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_CREATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_UPDATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_DELETING_LOADER,
} from "../loaders/hustlrCardReviewLoader";

// Notifications
import {
  HUSTLR_CARD_REVIEWS_FETCHED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEWS_FETCHED_UNSUCCESSFULLY,
  HUSTLR_CARD_REVIEW_CREATED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_CREATED_UNSUCCESSFULLY,
  HUSTLR_CARD_REVIEW_SAVED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_SAVED_UNSUCCESSFULLY,
  HUSTLR_CARD_REVIEW_DELETED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_DELETED_UNSUCCESSFULLY,
} from "../notifications/hustlrCardReviewNotifications";

// Auth Errors
import {
  SET_HUSTLR_CARD_REVIEW_AUTH_ERROR,
  REMOVE_HUSTLR_CARD_REVIEW_AUTH_ERROR,
} from "../authErrors/hustlrCardReviewAuthError";

export const SET_HUSTLR_CARD_REVIEWS = "SET_HUSTLR_CARD_REVIEWS";
export const REMOVE_HUSTLR_CARD_REVIEWS = "REMOVE_HUSTLR_CARD_REVIEWS";
export const CREATE_HUSTLR_CARD_REVIEW = "CREATE_HUSTLR_CARD_REVIEW";
export const UPDATE_HUSTLR_CARD_REVIEW = "UPDATE_HUSTLR_CARD_REVIEW";
export const DELETE_HUSTLR_CARD_REVIEW = "DELETE_HUSTLR_CARD_REVIEW";

export const fetchHustlrCardReviews = (cardId) => {
  return (dispatch) => {
    dispatch({ type: HUSTLR_CARD_REVIEWS_ARE_LOADING });
    fetch(`${API_BASE_URL}/reviews/card/${cardId}`)
      .then((resp) => resp.json())
      .then((hustlrCardReviews) => {
        if (hustlrCardReviews.code) {
          dispatch({ type: HUSTLR_CARD_REVIEWS_ARE_NOT_LOADING });
          dispatch({ type: HUSTLR_CARD_REVIEWS_FETCHED_UNSUCCESSFULLY });
          return;
        }

        dispatch({
          type: SET_HUSTLR_CARD_REVIEWS,
          hustlrCardReviews: hustlrCardReviews,
        });
        dispatch({ type: HUSTLR_CARD_REVIEWS_ARE_NOT_LOADING });
        dispatch({ type: HUSTLR_CARD_REVIEWS_FETCHED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: HUSTLR_CARD_REVIEWS_ARE_NOT_LOADING });
        dispatch({ type: HUSTLR_CARD_REVIEWS_FETCHED_UNSUCCESSFULLY });
      });
  };
};

export const createHustlrCardReview = (description, rating, userId, cardId) => {
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

    dispatch({ type: HUSTLR_CARD_REVIEW_IS_CREATING_LOADER });
    fetch(`${API_BASE_URL}/reviews`, reqObj)
      .then((resp) => resp.json())
      .then((review) => {
        if (review.code) {
          dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_CREATING_LOADER });
          dispatch({
            type: SET_HUSTLR_CARD_REVIEW_AUTH_ERROR,
            error: review.message,
          });
          dispatch({ type: HUSTLR_CARD_REVIEW_CREATED_UNSUCCESSFULLY });
          return;
        }

        dispatch({ type: CREATE_HUSTLR_CARD_REVIEW, review: review });
        dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_CREATING_LOADER });
        dispatch({ type: REMOVE_HUSTLR_CARD_REVIEW_AUTH_ERROR });
        dispatch({ type: HUSTLR_CARD_REVIEW_CREATED_SUCCESSFULLY });
        dispatch(closeHustlrCardReviewModal());
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_CREATING_LOADER });
        dispatch({ type: HUSTLR_CARD_REVIEW_CREATED_UNSUCCESSFULLY });
      });
  };
};

export const updatHustlrCardReview = (reviewId, rating, description) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reviewObj = {
      id: reviewId,
      title: "",
      description: description,
      rating: rating,
    };

    const reqObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(reviewObj),
    };

    dispatch({ type: HUSTLR_CARD_REVIEW_IS_UPDATING_LOADER });
    fetch(`${API_BASE_URL}/reviews`, reqObj)
      .then((resp) => resp.json())
      .then((review) => {
        if (review.code) {
          dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER });
          dispatch({
            type: SET_HUSTLR_CARD_REVIEW_AUTH_ERROR,
            error: review.message,
          });
          dispatch({ type: HUSTLR_CARD_REVIEW_SAVED_UNSUCCESSFULLY });
          return;
        }

        dispatch({ type: UPDATE_HUSTLR_CARD_REVIEW, review: review });
        dispatch({ type: HUSTLR_CARD_REVIEW_SAVED_SUCCESSFULLY });
        dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER });
        dispatch(closeHustlrCardReviewModal());
      })
      .catch((err) => {
        dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER });
        dispatch({ type: HUSTLR_CARD_REVIEW_SAVED_UNSUCCESSFULLY });
      });
  };
};

export const deleteHustlrCardReview = (reviewId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    };

    dispatch({ type: HUSTLR_CARD_REVIEW_IS_DELETING_LOADER });
    fetch(`${API_BASE_URL}/reviews/${reviewId}`, reqObj)
      .then((resp) => {
        if (!resp.ok) {
          dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_DELETING_LOADER });
          dispatch({ type: HUSTLR_CARD_REVIEW_DELETED_UNSUCCESSFULLY });
          return;
        }

        if (resp.ok) {
          dispatch({ type: DELETE_HUSTLR_CARD_REVIEW, reviewId: reviewId });
          dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_DELETING_LOADER });
          dispatch({ type: HUSTLR_CARD_REVIEW_DELETED_SUCCESSFULLY });
          return;
        }
      })
      .catch((err) => {
        dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_DELETING_LOADER });
        dispatch({ type: HUSTLR_CARD_REVIEW_DELETED_UNSUCCESSFULLY });
      });
  };
};
