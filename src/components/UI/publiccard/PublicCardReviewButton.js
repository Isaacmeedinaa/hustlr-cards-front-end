import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { openAuthModal } from "../../../store/actions/modals/authModal";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardReviewButton = (props) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const onReviewButtonClick = () => {
    if (!auth.isAuthenticated || !user) {
      dispatch(openAuthModal());
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
