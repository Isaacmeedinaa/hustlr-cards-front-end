import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  createHustlrCardReviewLike,
  updateHustlrCardReviewLike,
  deleteHustlrCardReviewLike,
} from "../../../store/actions/hustlrCard/hustlrCardReviews";
import { openAuthModal } from "../../../store/actions/modals/authModal";

import Moment from "react-moment";
import "moment-timezone";
import Carousel from "react-bootstrap/Carousel";

import IosMore from "react-ionicons/lib/IosMore";
import MdThumbsUp from "react-ionicons/lib/MdThumbsUp";
import MdThumbsDown from "react-ionicons/lib/MdThumbsDown";

import HustlrCardReviewOptionsModal from "./modals/HustlrCardReviewOptionsModal";

import "./reviewsUI.css";
import "../../../constants/colors.css";

const LIKE = "LIKE";
const DISLIKE = "DISLIKE";

const HustlrCardReview = (props) => {
  const review = props.hustlrCardReview;

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.user);
  const likeLoader = useSelector(
    (state) => state.hustlrCardReviewLoader.likeLoader
  );

  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [likedCount, setLikedCount] = useState(null);
  const [dislikedCount, setDislikedCount] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [sentimentId, setSentimentId] = useState(null);

  useEffect(() => {
    const likedArray = props.hustlrCardReview.likes.filter(
      (like) => like.isLiked === true
    );
    const dislikedArray = props.hustlrCardReview.likes.filter(
      (like) => like.isLiked === false
    );

    setLikedCount(likedArray.length);
    setDislikedCount(dislikedArray.length);

    if (!user) return;
    const userLike = props.hustlrCardReview.likes.find(
      (like) => like.userId === user.id
    );

    if (userLike && userLike.isLiked) {
      setIsLiked(true);
      setIsDisliked(false);
      setSentimentId(userLike.id);
    } else if (userLike && !userLike.isLiked) {
      setIsDisliked(true);
      setIsLiked(false);
      setSentimentId(userLike.id);
    }
  }, [user, props.hustlrCardReview.likes]);

  const hideReviewOptionsModal = () => {
    setShowOptionsModal(false);
  };

  const renderReviewPhotos = () => {
    return review.photos.map((photo) => (
      <Carousel.Item key={photo.id}>
        <img
          className="hustlr-card-review-carousel-img"
          src={photo.url}
          alt="review-img"
        />
      </Carousel.Item>
    ));
  };

  const onSentimentClick = (sentiment) => {
    if (likeLoader) return;

    if (!isLoggedIn) {
      dispatch(openAuthModal());
      return;
    }

    if (sentiment === LIKE) {
      if (isLiked) {
        // delete like
        dispatch(deleteHustlrCardReviewLike(sentimentId, review.id));
        setIsLiked(false);
        setSentimentId(null);
        setLikedCount(likedCount - 1);
      } else if (isDisliked) {
        // update to isLiked
        dispatch(updateHustlrCardReviewLike(true, sentimentId, review.id));
        setIsLiked(true);
        setIsDisliked(false);
        setLikedCount(likedCount + 1);
        setDislikedCount(dislikedCount - 1);
      } else {
        // create like
        dispatch(createHustlrCardReviewLike(true, review.id, user.id));
        setIsLiked(true);
      }
    } else if (sentiment === DISLIKE) {
      if (isDisliked) {
        // delete dislike
        dispatch(deleteHustlrCardReviewLike(sentimentId, review.id));
        setIsDisliked(false);
        setSentimentId(null);
        setDislikedCount(dislikedCount - 1);
      } else if (isLiked) {
        // update to isDisliked
        dispatch(updateHustlrCardReviewLike(false, sentimentId, review.id));
        setIsDisliked(true);
        setIsLiked(false);
        setDislikedCount(dislikedCount + 1);
        setLikedCount(likedCount - 1);
      } else {
        // create dislike
        dispatch(createHustlrCardReviewLike(false, review.id, user.id));
        setIsDisliked(true);
      }
    }
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
        {!user || user.id !== review.user.id ? null : (
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
        )}
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
        {review.photos.length !== 0 ? (
          <Carousel className="hustlr-card-review-carousel" interval={null}>
            {renderReviewPhotos()}
          </Carousel>
        ) : null}
      </div>
      <div className="hustlr-card-review-bottom-container">
        <div className="hustlr-card-review-bottom-left-container">
          <div className="hustlr-card-review-like-container">
            <MdThumbsUp
              color={props.primaryColor}
              className="hustlr-card-review-like-button"
              style={{ opacity: isLiked ? 1 : 0.5 }}
              fontSize="20px"
              onClick={() => onSentimentClick(LIKE)}
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
              style={{ opacity: isDisliked ? 1 : 0.5 }}
              fontSize="20px"
              onClick={() => onSentimentClick(DISLIKE)}
            />
            <span
              className="hustlr-card-review-unlike-count"
              style={{ color: props.primaryColor }}
            >
              {dislikedCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HustlrCardReview;
