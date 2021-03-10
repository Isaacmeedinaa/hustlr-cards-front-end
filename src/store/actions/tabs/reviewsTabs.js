export const SET_SELECTED_REVIEWS_TAB = "SET_SELECTED_REVIEWS_TAB";
export const RECEIVED_REVIEWS = "RECEIVED_REVIEWS";
export const GIVEN_REVIEWS = "GIVEN_REVIEWS";

export const setSelectedTab = (tabName) => {
  return {
    type: SET_SELECTED_REVIEWS_TAB,
    tabName: tabName,
  };
};
