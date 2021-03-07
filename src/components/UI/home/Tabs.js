import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab } from "../../../store/actions/tabs/tabs";

import "../../../constants/colors.css";
import "./HomeUI.css";

const Tabs = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabs);

  return (
    <div className="primary-light-bg tabs-wrapper">
      <div
        className={
          selectedTab === "EDIT"
            ? "tab-container tab-container-selected"
            : "tab-container"
        }
        onClick={() => dispatch(setSelectedTab("EDIT"))}
      >
        <span
          className={
            selectedTab === "EDIT"
              ? "tab-text-selected"
              : "tab-text-not-selected"
          }
        >
          Edit
        </span>
      </div>
      <div
        className={
          selectedTab === "PREVIEW"
            ? "tab-container tab-container-selected"
            : "tab-container"
        }
        onClick={() => dispatch(setSelectedTab("PREVIEW"))}
      >
        <span
          className={
            selectedTab === "PREVIEW"
              ? "tab-text-selected"
              : "tab-text-not-selected"
          }
        >
          Preview
        </span>
      </div>
    </div>
  );
};

export default Tabs;
