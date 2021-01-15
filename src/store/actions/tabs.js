export const SET_SELECTED_TAB = "SET_SELECTED_TAB";
export const EDIT = "EDIT";
export const PREVIEW = "PREVIEW";

export const setSelectedTab = (tabName) => {
  return {
    type: SET_SELECTED_TAB,
    tabName: tabName,
  };
};
