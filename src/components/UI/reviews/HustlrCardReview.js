import React, { useEffect, useState } from "react";

import Moment from "react-moment";
import "moment-timezone";

import IosMore from "react-ionicons/lib/IosMore";
import MdThumbsUp from "react-ionicons/lib/MdThumbsUp";
import MdThumbsDown from "react-ionicons/lib/MdThumbsDown";
import MdDownload from "react-ionicons/lib/MdDownload";
import MdShare from "react-ionicons/lib/MdShare";

import HustlrCardReviewOptionsModal from "./modals/HustlrCardReviewOptionsModal";

import "./reviewsUI.css";
import "../../../constants/colors.css";

const HustlrCardReview = (props) => {
  const review = props.hustlrCardReview;

  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [likedCount, setLikedCount] = useState(null);
  const [dislikedCount, setDislikedCount] = useState(null);

  useEffect(() => {
    if (review) {
      const likedArray = review.likes.filter((like) => like.isLiked === true);
      const dislikedArray = review.likes.filter(
        (like) => like.isLiked === false
      );

      setLikedCount(likedArray.length);
      setDislikedCount(dislikedArray.length);
    }
  }, [review]);

  const hideReviewOptionsModal = () => {
    setShowOptionsModal(false);
  };

  return (
    <div
      className="hustlr-card-review-container"
      style={{ backgroundColor: props.transparentColor }}
    >
      <div className="hustlr-card-review-top-container">
        <div className="hustlr-card-review-top-left-container">
          <p
            className="hustlr-card-review-user-username"
            style={{ color: props.primaryColor }}
          >
            {review.user.username}
          </p>
          <Moment
            style={{ color: props.primaryColor }}
            className="hustlr-card-review-date"
            format="MMM D, YYYY"
          >
            {review.dateCreated}
          </Moment>
        </div>
        <div className="hustlr-card-review-top-right-container">
          <IosMore
            color={props.primaryColor}
            onClick={() =>
              setShowOptionsModal((showOptionsModal) => !showOptionsModal)
            }
            className="hustlr-card-review-more-button"
            fontSize="30px"
          />
          {showOptionsModal ? (
            <HustlrCardReviewOptionsModal
              review={review}
              hideReviewOptionsModal={hideReviewOptionsModal}
            />
          ) : null}
        </div>
      </div>
      <div className="hustlr-card-review-middle-container">
        <span
          className="hustlr-card-review-rating"
          style={{ color: props.primaryColor }}
        >
          {review.rating === 1
            ? "👎"
            : review.rating === 2
            ? "😕"
            : review.rating === 3
            ? "😐"
            : review.rating === 4
            ? "😊"
            : review.rating === 5
            ? "🤩"
            : null}
        </span>
        {review.description === "" || !review.description ? null : (
          <p
            className="hustlr-card-review-description"
            style={{ color: props.primaryColor }}
          >
            {review.description}
          </p>
        )}
      </div>
      <div className="hustlr-card-review-bottom-container">
        <div className="hustlr-card-review-bottom-left-container">
          <div className="hustlr-card-review-like-container">
            <MdThumbsUp
              color={props.primaryColor}
              className="hustlr-card-review-like-button"
              style={{ opacity: 0.5 }}
              fontSize="20px"
            />
            <span
              className="hustlr-card-review-like-count"
              style={{ color: props.primaryColor }}
            >
              {likedCount}
            </span>
          </div>
          <div className="hustlr-card-review-unlike-container">
            <MdThumbsDown
              color={props.primaryColor}
              className="hustlr-card-review-unlike-button"
              style={{ opacity: 0.5 }}
              fontSize="20px"
            />
            <span
              className="hustlr-card-review-unlike-count"
              style={{ color: props.primaryColor }}
            >
              {dislikedCount}
            </span>
          </div>
        </div>
        <div className="hustlr-card-review-bottom-right-container">
          <MdDownload
            color={props.primaryColor}
            className="hustlr-card-review-camera-button"
            fontSize="22px"
          />
          <MdShare
            color={props.primaryColor}
            className="hustlr-card-review-share-button"
            fontSize="18px"
          />
        </div>
      </div>
    </div>
  );
};

export default HustlrCardReview;
