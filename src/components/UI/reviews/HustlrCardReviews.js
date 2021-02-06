import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchHustlrCardReviews } from "../../../store/actions/hustlrCard/hustlrCardReviews";
import {
  hideHustlrCardReviewSavedNotification,
  hideHustlrCardReviewDeletedNotification,
} from "../../../store/actions/notifications/hustlrCardReviewNotifications";

import { showToast } from "../Toasts";

import Loader from "react-loader-spinner";

import PublicCardReviewButton from "../publiccard/PublicCardReviewButton";
import HustlrCardReview from "./HustlrCardReview";

import "./reviewsUI.css";
import "../../../constants/colors.css";

const HustlrCardReviews = () => {
  const dispatch = useDispatch();

  const publicCard = useSelector((state) => state.publicCard);
  const hustlrCardReviewFetchingAllLoader = useSelector(
    (state) => state.hustlrCardReviewLoader.fetchingAll
  );
  const hustlrCardReviews = useSelector((state) => state.hustlrCardReviews);
  const hustlrCardReviewNotifications = useSelector(
    (state) => state.hustlrCardReviewNotifications
  );

  useEffect(() => {
    if (publicCard) {
      dispatch(fetchHustlrCardReviews(publicCard.id));
    }
  }, [dispatch, publicCard]);

  useEffect(() => {
    if (hustlrCardReviewNotifications.saved.show) {
      showToast(
        hustlrCardReviewNotifications.saved.success,
        hustlrCardReviewNotifications.saved.message
      );
      dispatch(hideHustlrCardReviewSavedNotification());
    }
    if (hustlrCardReviewNotifications.deleted.show) {
      showToast(
        hustlrCardReviewNotifications.deleted.success,
        hustlrCardReviewNotifications.deleted.message
      );
      dispatch(hideHustlrCardReviewDeletedNotification());
    }
  }, [dispatch, hustlrCardReviewNotifications]);

  const renderHustlrCardReviews = () => {
    return hustlrCardReviews.map((hustlrCardReview) => (
      <HustlrCardReview
        key={hustlrCardReview.id}
        hustlrCardReview={hustlrCardReview}
        primaryColor={publicCard.primaryColor}
        transparentColor={publicCard.transparentColor}
      />
    ));
  };

  return (
    <div className="hustlr-card-reviews-wrapper">
      {hustlrCardReviewFetchingAllLoader ? (
        <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
      ) : (
        <div className="primary-light-bg hustlr-card-reviews-container">
          <PublicCardReviewButton />
          {renderHustlrCardReviews()}
        </div>
      )}
    </div>
  );
};

export default HustlrCardReviews;
