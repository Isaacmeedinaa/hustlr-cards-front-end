export const OPEN = "OPENED";
export const CLOSE = "CLOSED";

export const openThemePicker = () => {
  return {
    type: OPEN,
  };
};

export const closeThemePicker = () => {
  return {
    type: CLOSE,
  };
};
