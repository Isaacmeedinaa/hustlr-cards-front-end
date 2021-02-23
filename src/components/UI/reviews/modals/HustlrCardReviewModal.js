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
import Carousel from "react-bootstrap/Carousel";

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
  const cardId = useSelector((state) => state.publicCard.id);

  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");
  const [localPhotos, setLocalPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);

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
      setPhotos(hustlrCardReviewModal.review.photos);
    } else if (!hustlrCardReviewModal.review) {
      setRating(null);
      setDescription("");
      setLocalPhotos([]);
      setPhotos([]);
    }
  }, [hustlrCardReviewModal]);

  const onReviewModalClose = () => {
    dispatch(closeHustlrCardReviewModal());
    setRating(null);
    setDescription("");
    setLocalPhotos([]);
    setPhotos([]);
    dispatch(clearHustlrCardReviewAuthError());
  };

  const onRatingContainerClick = (rating) => {
    setRating(rating);
  };

  const onPhotosChangeHandler = (e) => {
    const selectedLocalPhotos = e.target.files;
    const newLocalPhotosArray = Array.from(selectedLocalPhotos);
    if (!hustlrCardReviewModal.review) {
      setLocalPhotos([...localPhotos, ...newLocalPhotosArray]);
    } else if (hustlrCardReviewModal.review) {
      setPhotos([...photos, ...newLocalPhotosArray]);
    }
  };

  const renderReviewPhotos = () => {
    if (!hustlrCardReviewModal.review) {
      let localPhotosUrls = [];
      for (let i = 0; i < localPhotos.length; i++) {
        const localPhoto = localPhotos[i];
        let localPhotoURL = URL.createObjectURL(localPhoto);
        localPhotosUrls.push(localPhotoURL);
      }
      return localPhotosUrls.map((photo, index) => (
        <Carousel.Item key={index}>
          <img
            className="hustlr-card-review-modal-carousel-img"
            src={photo}
            alt="review-img"
          />
        </Carousel.Item>
      ));
    } else if (hustlrCardReviewModal.review) {
      let localCloudPhotos = [...photos.filter((photo) => photo.url)];
      let localPhotosArray = photos.filter((photo) => !photo.url);

      for (let i = 0; i < localPhotosArray.length; i++) {
        const localPhoto = localPhotosArray[i];
        let localPhotoURL = URL.createObjectURL(localPhoto);
        localCloudPhotos.push(localPhotoURL);
      }

      return localCloudPhotos.map((photo, index) => (
        <Carousel.Item key={photo.id ? photo.id : index}>
          <img
            className="hustlr-card-review-modal-carousel-img"
            src={photo.url ? photo.url : photo}
            alt="review-img"
          />
        </Carousel.Item>
      ));
    }
  };

  const onPostReviewClick = () => {
    if (!hustlrCardReviewModal.review) {
      dispatch(
        createHustlrCardReview(rating, description, localPhotos, userId, cardId)
      );
    } else if (hustlrCardReviewModal.review) {
      const localPhotos = photos.filter((photo) => !photo.url);

      dispatch(
        updatHustlrCardReview(
          hustlrCardReviewModal.review.id,
          rating,
          description,
          localPhotos
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
      <label
        className="hustlr-card-review-modal-add-photo-button"
        htmlFor="reviewPhotoSelector"
      >
        Add Photo
      </label>
      <input
        className="hustlr-card-review-modal-file-input"
        id="reviewPhotoSelector"
        onChange={onPhotosChangeHandler}
        type="file"
        accept="image/x-png,image/jpeg"
        multiple
      />
      {photos.length > 0 || localPhotos.length > 0 ? (
        <div className="hustlr-card-review-modal-carousel-container">
          <Carousel
            className="hustlr-card-review-modal-carousel"
            interval={null}
          >
            {renderReviewPhotos()}
          </Carousel>
        </div>
      ) : null}
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
