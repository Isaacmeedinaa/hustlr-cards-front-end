import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { openAuthModalFromReviewButton } from "../../../store/actions/modals/authModal";
import { openHustlrCardReviewModal } from "../../../store/actions/modals/hustlrCardReviewModal";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardReviewButton = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const showReviewModal = useSelector(
    (state) => state.authModal.showReviewModal
  );

  useEffect(() => {
    if (showReviewModal && auth.isAuthenticated) {
      dispatch(openHustlrCardReviewModal(null));
    }
  }, [dispatch, showReviewModal, auth.isAuthenticated]);

  const onReviewButtonClick = () => {
    if (!auth.isAuthenticated) {
      dispatch(openAuthModalFromReviewButton());
    } else if (auth.isAuthenticated) {
      dispatch(openHustlrCardReviewModal(null));
    }
  };

  return (
    <button
      className="public-card-review-button"
      onClick={() => onReviewButtonClick()}
    >
      Add a Review
    </button>
  );
};

export default PublicCardReviewButton;
