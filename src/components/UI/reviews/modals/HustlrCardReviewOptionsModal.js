import React, { Fragment, useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteHustlrCardReview } from "../../../../store/actions/hustlrCard/hustlrCardReviews";
import { openHustlrCardReviewModal } from "../../../../store/actions/modals/hustlrCardReviewModal";

import useOutsideComponentAlerter from "../../../../hooks/useOutsideComponentAlerter";

import Loader from "react-loader-spinner";

import "./modals.css";

const HustlrCardReviewOptionsModal = (props) => {
  const reviewOptionsModal = useRef(null);
  useOutsideComponentAlerter(reviewOptionsModal, props.hideReviewOptionsModal);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const hustlrCardReviewDeletingLoader = useSelector(
    (state) => state.hustlrCardReviewLoader.deletingLoader
  );

  const [showDeleteQuestion, setShowDeleteQuestion] = useState(false);

  return (
    <div
      ref={reviewOptionsModal}
      className="primary-light-bg hustlr-card-review-options-modal"
      style={{
        width: showDeleteQuestion ? "160px" : null,
        padding: showDeleteQuestion ? "15px 20px" : null,
        marginLeft: showDeleteQuestion ? "-132px" : null,
      }}
    >
      {!showDeleteQuestion ? (
        <Fragment>
          {!user || props.review.user.id !== user.id ? null : (
            <button
              className="primary-light-bg hustlr-card-review-options-modal-button"
              onClick={() => dispatch(openHustlrCardReviewModal(props.review))}
            >
              Edit
            </button>
          )}
          {!user || props.review.user.id !== user.id ? null : (
            <button
              className="primary-light-bg hustlr-card-review-options-modal-button"
              onClick={() => setShowDeleteQuestion(true)}
            >
              {hustlrCardReviewDeletingLoader ? (
                <Loader
                  type="TailSpin"
                  color="#2ecc71"
                  width={16}
                  height={16}
                />
              ) : (
                "Delete"
              )}
            </button>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <span>Are you sure?</span>
          <div>
            <button
              className="hustlr-card-review-options-modal-delete-button"
              onClick={() => dispatch(deleteHustlrCardReview(props.review.id))}
            >
              Yes
            </button>
            <button
              className="hustlr-card-review-options-modal-delete-button"
              onClick={() => props.hideReviewOptionsModal()}
            >
              No
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default HustlrCardReviewOptionsModal;
