import { SET_CARD } from "../actions/card";

const initialState = {};

const loader = (state = false, action) => {
  switch (action.type) {
    case SET_CARD:
      return true;

    default:
      return state;
  }
};

export default loader;
