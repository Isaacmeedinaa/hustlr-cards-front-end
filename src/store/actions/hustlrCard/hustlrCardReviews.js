// API URL
import { API_BASE_URL, FETCH_REVIEWS_BY, DefaultReviewPageSize } from "../../../constants/urls";

// modals
import {
  DELETE_HUSTLR_CARD_REVIEW_PHOTO,
  closeHustlrCardReviewModal,
} from "../modals/hustlrCardReviewModal";

// Loaders
import {
  HUSTLR_CARD_REVIEWS_ARE_LOADING,
  HUSTLR_CARD_REVIEWS_ARE_NOT_LOADING,
  HUSTLR_CARD_NEXT_REVIEWS_ARE_LOADING,
  HUSTLR_CARD_NEXT_REVIEWS_ARE_NOT_LOADING,
  HUSTLR_CARD_REVIEW_IS_CREATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_CREATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_UPDATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER,
  HUSTLR_CARD_REVIEW_IS_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_IS_NOT_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_PHOTO_IS_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_PHOTO_IS_NOT_DELETING_LOADER,
  HUSTLR_CARD_REVIEW_LIKE_IS_LOADING,
  HUSTLR_CARD_REVIEW_LIKE_IS_NOT_LOADING,
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
  HUSTLR_CARD_REVIEW_PHOTO_DELETED_SUCCESSFULLY,
  HUSTLR_CARD_REVIEW_PHOTO_DELETED_UNSUCCESSFULLY,
} from "../notifications/hustlrCardReviewNotifications";

// Auth Errors
import {
  SET_HUSTLR_CARD_REVIEW_AUTH_ERROR,
  REMOVE_HUSTLR_CARD_REVIEW_AUTH_ERROR,
} from "../authErrors/hustlrCardReviewAuthError";

export const SET_HUSTLR_CARD_REVIEWS = "SET_HUSTLR_CARD_REVIEWS";
export const SET_NEXT_HUSTLR_CARD_REVIEWS = "SET_NEXT_HUSTLR_CARD_REVIEWS";
export const REMOVE_HUSTLR_CARD_REVIEWS_STATE =
  "REMOVE_HUSTLR_CARD_REVIEWS_STATE";
export const CREATE_HUSTLR_CARD_REVIEW = "CREATE_HUSTLR_CARD_REVIEW";
export const UPDATE_HUSTLR_CARD_REVIEW = "UPDATE_HUSTLR_CARD_REVIEW";
export const DELETE_HUSTLR_CARD_REVIEW = "DELETE_HUSTLR_CARD_REVIEW";
export const ADDED_REVIEW_ID = "ADDED_REVIEW_ID";
export const DELETE_HUSTLR_CARD_REVIEW_PHOTO_ARRAY =
  "DELETE_HUSTLR_CARD_REVIEW_PHOTO_ARRAY";
export const CREATE_HUSTLR_CARD_REVIEW_LIKE = "CREATE_HUSTLR_CARD_REVIEW_LIKE";
export const UPDATE_HUSTLR_CARD_REVIEW_LIKE = "UPDATE_HUSTLR_CARD_REVIEW_LIKE";
export const DELETE_HUSTLR_CARD_REVIEW_LIKE = "DELLETE_HUSTLR_CARD_REVIEW_LIKE";

export const resetHustlrCardReviewsState = () => {
  return {
    type: REMOVE_HUSTLR_CARD_REVIEWS_STATE,
  };
};

export const fetchInitialHustlrCardReviews = (pageNumber, sortValue, fetchReviewsBy) => {
  return (dispatch, getState) => {

    let url = '';

    if (fetchReviewsBy === FETCH_REVIEWS_BY.cardPath) {
      const cardPath = getState().publicCard === null ? getState().card.cardData.pathToCard : getState().publicCard.pathToCard;
      url = `${API_BASE_URL}/reviews/card/${cardPath}/${pageNumber}/${sortValue}?pageSize=${DefaultReviewPageSize}`;
    }
    else if (fetchReviewsBy === FETCH_REVIEWS_BY.userId) {
      const userId = getState().user.id;
      url = `${API_BASE_URL}/reviews/user/${userId}/${pageNumber}/${sortValue}?pageSize=${DefaultReviewPageSize}`;
    }

    dispatch({ type: REMOVE_HUSTLR_CARD_REVIEWS_STATE });
    dispatch({ type: HUSTLR_CARD_REVIEWS_ARE_LOADING });
    fetch(url)
      .then((resp) => resp.json())
      .then((hustlrCardReviews) => {
        if (hustlrCardReviews.code) {
          dispatch({ type: HUSTLR_CARD_REVIEWS_ARE_NOT_LOADING });
          dispatch({ type: HUSTLR_CARD_REVIEWS_FETCHED_UNSUCCESSFULLY });
          return;
        }

        dispatch({
          type: SET_HUSTLR_CARD_REVIEWS,
          hustlrCardReviews: hustlrCardReviews.reviews,
          totalPages: hustlrCardReviews.totalPages,
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

export const fetchNextHustlrCardReview = (pageNumber, sortValue, fetchReviewsBy) => {
  return (dispatch, getState) => {
    const addedReviewId = getState().hustlrCardReviews.addedReviewId;
    const reviewWasDeleted = getState().hustlrCardReviews.reviewWasDeleted;

    let ignoreReviewIdParam = !addedReviewId ? -1 : addedReviewId;
    let offsetByOneParam = reviewWasDeleted && !addedReviewId;

    let url = '';

    if (fetchReviewsBy === FETCH_REVIEWS_BY.cardPath) {
      const cardPath = getState().publicCard === null ? getState().card.cardData.pathToCard : getState().publicCard.pathToCard;
      url = `${API_BASE_URL}/reviews/card/${cardPath}/${pageNumber}/${sortValue}?pageSize=${DefaultReviewPageSize}&ignoreReviewId=${ignoreReviewIdParam}&offsetByOne=${offsetByOneParam}`;
    }
    else if (fetchReviewsBy === FETCH_REVIEWS_BY.userId) {
      const userId = getState().user.id;
      url = `${API_BASE_URL}/reviews/user/${userId}/${pageNumber}/${sortValue}?pageSize=${DefaultReviewPageSize}&ignoreReviewId=${ignoreReviewIdParam}&offsetByOne=${offsetByOneParam}`;
    }

    dispatch({ type: HUSTLR_CARD_NEXT_REVIEWS_ARE_LOADING });
    fetch(url)
      .then((resp) => resp.json())
      .then((hustlrCardReviews) => {
        if (hustlrCardReviews.code) {
          dispatch({ type: HUSTLR_CARD_NEXT_REVIEWS_ARE_NOT_LOADING });
          dispatch({ type: HUSTLR_CARD_REVIEWS_FETCHED_UNSUCCESSFULLY });
          return;
        }

        dispatch({
          type: SET_NEXT_HUSTLR_CARD_REVIEWS,
          nextHustlrCardReviews: hustlrCardReviews.reviews,
        });
        dispatch({ type: HUSTLR_CARD_NEXT_REVIEWS_ARE_NOT_LOADING });
        dispatch({ type: HUSTLR_CARD_REVIEWS_FETCHED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: HUSTLR_CARD_NEXT_REVIEWS_ARE_NOT_LOADING });
        dispatch({ type: HUSTLR_CARD_REVIEWS_FETCHED_UNSUCCESSFULLY });
      });
  };
};

export const createHustlrCardReview = (
  rating,
  description,
  photos,
  userId,
  cardId
) => {
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

        if (photos.length !== 0) {
          let counter = 0;
          Array.from(photos).forEach((photo) => {
            const body = new FormData();
            body.append("ReviewId", review.id);
            body.append("File", photo);

            const reqObj = {
              method: "POST",
              headers: {
                Authorization: `Bearer ${userToken}`,
                Accepts: "application/json",
              },
              body: body,
            };

            fetch(`${API_BASE_URL}/photos/review`, reqObj)
              .then((resp) => resp.json())
              .then((photo) => {
                if (photo.code) {
                  return;
                }
                review.photos = [...review.photos, photo];
                counter++;
                if (counter === photos.length) {
                  dispatch({
                    type: CREATE_HUSTLR_CARD_REVIEW,
                    review: review,
                  });

                  dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_CREATING_LOADER });
                  dispatch({ type: REMOVE_HUSTLR_CARD_REVIEW_AUTH_ERROR });
                  dispatch({ type: HUSTLR_CARD_REVIEW_CREATED_SUCCESSFULLY });
                  dispatch(closeHustlrCardReviewModal());
                }
              });
          });
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

export const updatHustlrCardReview = (
  reviewId,
  rating,
  description,
  photos
) => {
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
        console.log(review)
        if (review.code) {
          dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER });
          dispatch({
            type: SET_HUSTLR_CARD_REVIEW_AUTH_ERROR,
            error: review.message,
          });
          dispatch({ type: HUSTLR_CARD_REVIEW_SAVED_UNSUCCESSFULLY });
          return;
        }

        if (photos.length !== 0) {
          let counter = 0;
          Array.from(photos).forEach((photo) => {
            const body = new FormData();
            body.append("ReviewId", reviewId);
            body.append("File", photo);

            const reqObj = {
              method: "POST",
              headers: {
                Authorization: `Bearer ${userToken}`,
                Accepts: "application/json",
              },
              body: body,
            };

            fetch(`${API_BASE_URL}/photos/review`, reqObj)
              .then((resp) => resp.json())
              .then((photo) => {
                if (photo.code) {
                  return;
                }
                review.photos = [...review.photos, photo];
                counter++;
                if (counter === photos.length) {
                  dispatch({ type: UPDATE_HUSTLR_CARD_REVIEW, review: review });
                  dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER });
                  dispatch({ type: REMOVE_HUSTLR_CARD_REVIEW_AUTH_ERROR });
                  dispatch({ type: HUSTLR_CARD_REVIEW_SAVED_SUCCESSFULLY });
                  dispatch(closeHustlrCardReviewModal());
                }
              });
          });
          return;
        }

        dispatch({ type: UPDATE_HUSTLR_CARD_REVIEW, review: review });
        dispatch({ type: HUSTLR_CARD_REVIEW_IS_NOT_UPDATING_LOADER });
        dispatch({ type: REMOVE_HUSTLR_CARD_REVIEW_AUTH_ERROR });
        dispatch({ type: HUSTLR_CARD_REVIEW_SAVED_SUCCESSFULLY });
        dispatch(closeHustlrCardReviewModal());
      })
      .catch((err) => {
        console.log(err)
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

export const deleteHustlrCardReviewPhoto = (reviewId, photoId) => {
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

    dispatch({ type: HUSTLR_CARD_REVIEW_PHOTO_IS_DELETING_LOADER });
    fetch(`${API_BASE_URL}/photos/review/${photoId}`, reqObj)
      .then((resp) => {
        if (!resp.ok) {
          dispatch({ type: HUSTLR_CARD_REVIEW_PHOTO_DELETED_UNSUCCESSFULLY });
          dispatch({ type: HUSTLR_CARD_REVIEW_PHOTO_IS_NOT_DELETING_LOADER });
          return;
        }
        if (resp.ok) {
          dispatch({ type: DELETE_HUSTLR_CARD_REVIEW_PHOTO, photoId: photoId });
          dispatch({
            type: DELETE_HUSTLR_CARD_REVIEW_PHOTO_ARRAY,
            reviewId: reviewId,
            photoId: photoId,
          });
          dispatch({ type: HUSTLR_CARD_REVIEW_PHOTO_DELETED_SUCCESSFULLY });
          dispatch({ type: HUSTLR_CARD_REVIEW_PHOTO_IS_NOT_DELETING_LOADER });
          return;
        }
      })
      .catch((err) => {
        dispatch({ type: HUSTLR_CARD_REVIEW_PHOTO_DELETED_UNSUCCESSFULLY });
        dispatch({ type: HUSTLR_CARD_REVIEW_PHOTO_IS_NOT_DELETING_LOADER });
      });
  };
};

export const createHustlrCardReviewLike = (sentiment, reviewId, userId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reviewLikeData = {
      isLiked: sentiment,
      reviewId: reviewId,
      userId: userId,
    };

    const reqObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(reviewLikeData),
    };

    dispatch({ type: HUSTLR_CARD_REVIEW_LIKE_IS_LOADING });
    fetch(`${API_BASE_URL}/reviews/sentiment`, reqObj)
      .then((resp) => resp.json())
      .then((like) => {
        if (like.code) {
          return;
        }

        dispatch({
          type: CREATE_HUSTLR_CARD_REVIEW_LIKE,
          reviewId: reviewId,
          like: like,
        });
        dispatch({ type: HUSTLR_CARD_REVIEW_LIKE_IS_NOT_LOADING });
      });
  };
};

export const updateHustlrCardReviewLike = (
  sentiment,
  sentimentId,
  reviewId
) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reviewLikeData = {
      id: sentimentId,
      isLiked: sentiment,
    };

    const reqObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(reviewLikeData),
    };

    dispatch({ type: HUSTLR_CARD_REVIEW_LIKE_IS_LOADING });
    fetch(`${API_BASE_URL}/reviews/sentiment/${sentimentId}`, reqObj)
      .then((resp) => resp.json())
      .then((like) => {
        if (like.code) {
          return;
        }
        dispatch({
          type: UPDATE_HUSTLR_CARD_REVIEW_LIKE,
          reviewId: reviewId,
          like: like,
        });
        dispatch({ type: HUSTLR_CARD_REVIEW_LIKE_IS_NOT_LOADING });
      });
  };
};

export const deleteHustlrCardReviewLike = (sentimentId, reviewId) => {
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

    dispatch({ type: HUSTLR_CARD_REVIEW_LIKE_IS_LOADING });
    fetch(`${API_BASE_URL}/reviews/sentiment/${sentimentId}`, reqObj).then(
      (resp) => {
        if (!resp.ok) {
          return;
        }

        if (resp.ok) {
          dispatch({
            type: DELETE_HUSTLR_CARD_REVIEW_LIKE,
            reviewId: reviewId,
            sentimentId: sentimentId,
          });
          dispatch({ type: HUSTLR_CARD_REVIEW_LIKE_IS_NOT_LOADING });
          return;
        }
      }
    );
  };
};
