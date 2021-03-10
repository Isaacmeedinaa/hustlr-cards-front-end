import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab, RECEIVED_REVIEWS, GIVEN_REVIEWS } from "../../../store/actions/tabs/reviewsTabs";

import "../../../constants/colors.css";
import "./ReviewsTabs.css";

const Tabs = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.reviewsTabs);

  return (
    <div className="primary-light-bg reviews-tabs-wrapper">
      <div
        className={
          selectedTab === RECEIVED_REVIEWS
            ? "reviews-tab-container reviews-tab-container-selected"
            : "reviews-tab-container"
        }
        onClick={() => dispatch(setSelectedTab(RECEIVED_REVIEWS))}
      >
        <span
          className={
            selectedTab === RECEIVED_REVIEWS
              ? "reviews-tab-text-selected"
              : "reviews-tab-text-not-selected"
          }
        >
          {"Received Reviews"}
        </span>
      </div>
      <div
        className={
          selectedTab === GIVEN_REVIEWS
            ? "reviews-tab-container reviews-tab-container-selected"
            : "reviews-tab-container"
        }
        onClick={() => dispatch(setSelectedTab(GIVEN_REVIEWS))}
      >
        <span
          className={
            selectedTab === GIVEN_REVIEWS
              ? "reviews-tab-text-selected"
              : "reviews-tab-text-not-selected"
          }
        >
          {"Given Reviews"}
        </span>
      </div>
    </div>
  );
};

export default Tabs;
