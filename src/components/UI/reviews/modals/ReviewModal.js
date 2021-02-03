import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { closeReviewModal } from "../../../../store/actions/modals/reviewModal";
import { createReview } from "../../../../store/actions/reviews";
import { clearReviewAuthError } from "../../../../store/actions/authErrors/reviewAuthError";

import Modal from "react-modal";
import Loader from "react-loader-spinner";

import MdClose from "react-ionicons/lib/MdClose";

import "./modals.css";

Modal.setAppElement("#root");

const ReviewModal = () => {
  const dispatch = useDispatch();

  const reviewModal = useSelector((state) => state.reviewModal);
  const reviewLoader = useSelector((state) => state.reviewLoader);
  const reviewAuthError = useSelector((state) => state.reviewAuthError);
  const userId = useSelector((state) => state.user.id);
  const cardId = useSelector((state) => state.publicCard.id);

  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");

  const onReviewModalClose = () => {
    dispatch(closeReviewModal());
    setRating(null);
    setDescription("");
    dispatch(clearReviewAuthError());
  };

  const onRatingContainerClick = (rating) => {
    setRating(rating);
  };

  const onPostReviewClick = () => {
    dispatch(createReview(description, rating, userId, cardId));
    setRating(null);
    setDescription("");
  };

  return (
    <Modal
      isOpen={reviewModal}
      onRequestClose={() => onReviewModalClose()}
      contentLabel="Review Modal"
      className="primary-light-bg review-modal"
    >
      <div className="review-modal-header">
        <h3 className="review-modal-title">Please Fill Out the Form</h3>
        <div className="review-modal-btn" onClick={() => onReviewModalClose()}>
          <MdClose color="#2ecc71" size={16} />
        </div>
      </div>
      {reviewAuthError ? (
        <p className="review-modal-error-text">{reviewAuthError}</p>
      ) : null}
      <div className="review-modal-ratings-container">
        <div
          className="review-modal-rating-container"
          style={{
            backgroundColor: rating === 5 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(5)}
        >
          <span role="img" aria-label="amazing" className="review-modal-rating">
            🤩
          </span>
        </div>
        <div
          className="review-modal-rating-container"
          style={{
            backgroundColor: rating === 4 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(4)}
        >
          <span role="img" aria-label="good" className="review-modal-rating">
            😊
          </span>
        </div>
        <div
          className="review-modal-rating-container"
          style={{
            backgroundColor: rating === 3 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(3)}
        >
          <span role="img" aria-label="okay" className="review-modal-rating">
            😐
          </span>
        </div>
        <div
          className="review-modal-rating-container"
          style={{
            backgroundColor: rating === 2 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(2)}
        >
          <span role="img" aria-label="ehh" className="review-modal-rating">
            😕
          </span>
        </div>
        <div
          className="review-modal-rating-container"
          style={{
            backgroundColor: rating === 1 ? "rgba(112, 112, 112, 0.06)" : null,
          }}
          onClick={() => onRatingContainerClick(1)}
        >
          <span role="img" aria-label="bad" className="review-modal-rating">
            👎
          </span>
        </div>
      </div>
      <textarea
        className="review-modal-description-modal"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      {!rating ? null : (
        <button
          className="review-modal-post-review-btn"
          onClick={() => onPostReviewClick()}
        >
          {reviewLoader ? (
            <Loader type="TailSpin" color="#fff" width={28} height={28} />
          ) : (
            "Post Review"
          )}
        </button>
      )}
    </Modal>
  );
};

export default ReviewModal;
