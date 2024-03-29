import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchInitialHustlrCardReviews,
  fetchNextHustlrCardReview,
  resetHustlrCardReviewsState,
} from "../../../store/actions/hustlrCard/hustlrCardReviews";
import {
  hideHustlrCardReviewSavedNotification,
  hideHustlrCardReviewDeletedNotification,
} from "../../../store/actions/notifications/hustlrCardReviewNotifications";

import { showToast } from "../Toasts";

import Loader from "react-loader-spinner";
import Select from "react-select";

import PublicCardReviewButton from "../publiccard/PublicCardReviewButton";
import HustlrCardReview from "./HustlrCardReview";
import ReviewsTabs from "./ReviewsTabs";

import { sortOptions } from "../../../constants/sortOptions";

import "./reviewsUI.css";
import "../../../constants/colors.css";
import { Fragment } from "react";

const HustlrCardReviews = (props) => {
  const dispatch = useDispatch();

  const publicCard = useSelector((state) => state.publicCard);
  const user = useSelector((state) => state.user);

  const hustlrCardReviewFetchingAllLoader = useSelector(
    (state) => state.hustlrCardReviewLoader.fetchingAllLoader
  );
  const hustlrCardReviewFetchingNextLoader = useSelector(
    (state) => state.hustlrCardReviewLoader.fetchingNextLoader
  );
  const hustlrCardReviews = useSelector(
    (state) => state.hustlrCardReviews.reviews
  );
  const hustlrCardReviewNotifications = useSelector(
    (state) => state.hustlrCardReviewNotifications
  );
  const hustlrCardTotalReviewPages = useSelector(
    (state) => state.hustlrCardReviews.totalPages
  );

  const [pageNumber, setPageNumber] = useState(1);
  const [sortOption, setSortOption] = useState(sortOptions[2]);

  // initial fetch (first page)
  useEffect(() => {
    if (publicCard || props.fetchReviewsBy !== null) {
      dispatch(fetchInitialHustlrCardReviews(1, sortOptions[2].value, props.fetchReviewsBy));
    }
  }, [dispatch, publicCard, props.fetchReviewsBy]);

  // next fetch (next pages)
  useEffect(() => {
    if (pageNumber === 1) return;
    dispatch(fetchNextHustlrCardReview(pageNumber, sortOption.value, props.fetchReviewsBy));
  }, [dispatch, pageNumber, sortOption, props.fetchReviewsBy]);

  useEffect(() => {
    return () => {
      dispatch(resetHustlrCardReviewsState());
    };
  }, [dispatch]);

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
        primaryColor={publicCard !== null ? publicCard.primaryColor : '#28af60'}
        transparentColor={publicCard !== null ? publicCard.transparentColor : '#28af601a'}
      />
    ));
  };

  const onSortSelectChange = (e) => {
    setSortOption(e);
    setPageNumber(1);
    dispatch(fetchInitialHustlrCardReviews(1, e.value, props.fetchReviewsBy));
  };

  const onViewMoreClick = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="hustlr-card-reviews-wrapper">
      <div className="primary-light-bg hustlr-card-reviews-container">
        {hustlrCardReviewFetchingAllLoader ? (
          <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
        ) : (
          <Fragment>
            {!props.publicReviews && user.isHustlr ? 
              <ReviewsTabs/> :
              <h2 className="hustlr-card-reviews-header">{props.title}</h2>}
            <div className="hustlr-card-reviews-toolbar">
              <Select
                className="hustlr-card-reviews-sort-options-select"
                options={sortOptions}
                defaultValue={sortOption}
                onChange={(e) => onSortSelectChange(e)}
                isSearchable={false}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    background: "#f1f1f1",
                    border: "none",
                    boxShadow: null,
                    fontWeight: 500,
                  }),
                  menu: (base) => ({
                    ...base,
                    color: "#000",
                    boxShadow: "0px 5px 0px -1px #cdcdd2",
                    borderRadius: 5,
                    border: "1px solid #cdcdd2",
                  }),
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "#2ecc71" : "black",
                    backgroundColor: state.isSelected
                      ? "rgba(46, 204, 113, 0.25)"
                      : "white",
                    "&:hover": {
                      backgroundColor: "#f1f1f1",
                      cursor: "pointer",
                    },
                    "&:active": {
                      color: "#2ecc71",
                      backgroundColor: "rgba(46, 204, 113, 0.25)",
                    },
                  }),
                }}
              />
              {props.publicReviews ? <PublicCardReviewButton /> : null}
            </div>
            { hustlrCardReviews.length === 0 ? 
              <div className="hustlr-card-no-reviews">No Reviews</div> :
              renderHustlrCardReviews()
            } 
            {pageNumber >= hustlrCardTotalReviewPages ? null : (
              <div className="hustlr-card-reviews-view-more-text-container">
                {!hustlrCardReviewFetchingNextLoader ? (
                  <span
                    className="hustlr-card-reviews-view-more-text"
                    onClick={onViewMoreClick}
                  >
                    View More
                  </span>
                ) : (
                  <Loader
                    type="TailSpin"
                    color="#2ecc71"
                    width={12}
                    height={12}
                  />
                )}
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default HustlrCardReviews;
