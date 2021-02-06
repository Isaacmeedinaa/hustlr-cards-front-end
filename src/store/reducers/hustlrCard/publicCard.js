import { SET_PUBLIC_CARD } from "../../actions/hustlrCard/publicCard";

const publicCard = (state = null, action) => {
  switch (action.type) {
    case SET_PUBLIC_CARD:
      return action.publicCard;
    default:
      return state;
  }
};

export default publicCard;
