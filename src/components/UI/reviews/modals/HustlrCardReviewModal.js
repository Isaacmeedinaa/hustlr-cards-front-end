import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { closeHustlrCardReviewModal } from "../../../../store/actions/modals/hustlrCardReviewModal";
import {
  createHustlrCardReview,
  updatHustlrCardReview,
} from "../../../../store/actions/hustlrCard/hustlrCardReviews";
import { clearHustlrCardReviewAuthError } from "../../../../store/actions/authErrors/hustlrCardReviewAuthError";
import { hideHustlrCardReviewCreatedNotification } from "../../../../store/actions/notifications/hustlrCardReviewNotifications";

import { showToast } from "../../Toasts";

import Modal from "react-modal";
import Loader from "react-loader-spinner";

import MdClose from "react-ionicons/lib/MdClose";

import "./modals.css";

Modal.setAppElement("#root");

const HustlrCardReviewModal = () => {
  const dispatch = useDispatch();

  const hustlrCardReviewModal = useSelector(
    (state) => state.hustlrCardReviewModal
  );
  const hustlrCardreviewCreatingLoader = useSelector(
    (state) => state.hustlrCardReviewLoader.creatingLoader
  );
  const hustlrCardreviewUpdatingLoader = useSelector(
    (state) => state.hustlrCardReviewLoader.updatingLoader
  );
  const hustlrCardReviewAuthError = useSelector(
    (state) => state.hustlrCardReviewAuthError
  );
  const hustlrCardReviewNotifications = useSelector(
    (state) => state.hustlrCardReviewNotifications
  );
  const userId = useSelector((state) => state.user.id);
  const cardId = useSelector((state) =>  state.publicCard ? state.publicCard.id : 0);

  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (hustlrCardReviewNotifications.created.show) {
      showToast(
        hustlrCardReviewNotifications.created.success,
        hustlrCardReviewNotifications.created.message
      );
      dispatch(hideHustlrCardReviewCreatedNotification());
    }
  }, [dispatch, hustlrCardReviewNotifications]);

  useEffect(() => {
    if (hustlrCardReviewModal.review) {
      setRating(hustlrCardReviewModal.review.rating);
      setDescription(hustlrCardReviewModal.review.description);
    } else if (!hustlrCardReviewModal.review) {
      setRating(null);
      setDescription("");
    }
  }, [hustlrCardReviewModal]);

  const onReviewModalClose = () => {
    dispatch(closeHustlrCardReviewModal());
    setRating(null);
    setDescription("");
    dispatch(clearHustlrCardReviewAuthError());
  };

  const onRatingContainerClick = (rating) => {
    setRating(rating);
  };

  const onPostReviewClick = () => {
    if (!hustlrCardReviewModal.review) {
      dispatch(createHustlrCardReview(description, rating, userId, cardId));
      setRating(null);
      setDescription("");
    } else if (hustlrCardReviewModal.review) {
      dispatch(
        updatHustlrCardReview(
          hustlrCardReviewModal.review.id,
          rating,
          description
        )
      );
    }
  };

  return (
    <Modal
      isOpen={hustlrCardReviewModal.isOpen}
      onRequestClose={() => onReviewModalClose()}
      contentLabel="Hustlr Card Review Modal"
      className="primary-light-bg hustlr-card-review-modal"
    >
      <div className="hustlr-card-review-modal-header">
        <h3 className="hustlr-card-review-modal-title">
          Please Fill Out the Form
        </h3>
        <div
          className="hustlr-card-review-modal-btn"
          onClick={() => onReviewModalClose()}
        >
          <MdClose color="#2ecc71" size={16} />
        </div>
      </div>
      {hustlrCardReviewAuthError ? (
        <p className="hustlr-card-review-modal-error-text">
          {hustlrCardReviewAuthError}
        </p>
      ) : null}
      <div className="hustlr-card-review-modal-ratings-container">
        <div
          className="hustlr-card-review-modal-rating-container"
          style={{
            backgroundColor: rating === 5 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(5)}
        >
          <span
            role="img"
            aria-label="amazing"
            className="hustlr-card-review-modal-rating"
          >
            🤩
          </span>
        </div>
        <div
          className="hustlr-card-review-modal-rating-container"
          style={{
            backgroundColor: rating === 4 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(4)}
        >
          <span
            role="img"
            aria-label="good"
            className="hustlr-card-review-modal-rating"
          >
            😊
          </span>
        </div>
        <div
          className="hustlr-card-review-modal-rating-container"
          style={{
            backgroundColor: rating === 3 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(3)}
        >
          <span
            role="img"
            aria-label="okay"
            className="hustlr-card-review-modal-rating"
          >
            😐
          </span>
        </div>
        <div
          className="hustlr-card-review-modal-rating-container"
          style={{
            backgroundColor: rating === 2 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(2)}
        >
          <span
            role="img"
            aria-label="ehh"
            className="hustlr-card-review-modal-rating"
          >
            😕
          </span>
        </div>
        <div
          className="hustlr-card-review-modal-rating-container"
          style={{
            backgroundColor: rating === 1 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(1)}
        >
          <span
            role="img"
            aria-label="bad"
            className="hustlr-card-review-modal-rating"
          >
            👎
          </span>
        </div>
      </div>
      <textarea
        className="hustlr-card-review-modal-description-modal"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      {!rating ? null : (
        <button
          className="hustlr-card-review-modal-post-review-btn"
          onClick={() => onPostReviewClick()}
        >
          {hustlrCardreviewCreatingLoader || hustlrCardreviewUpdatingLoader ? (
            <Loader type="TailSpin" color="#fff" width={28} height={28} />
          ) : !hustlrCardReviewModal.review ? (
            "Post Review"
          ) : (
            "Update Review"
          )}
        </button>
      )}
    </Modal>
  );
};

export default HustlrCardReviewModal;
