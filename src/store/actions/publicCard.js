import { CARD_IS_LOADING, CARD_IS_NOT_LOADING } from "./loaders/cardLoader";

export const SET_PUBLIC_CARD = "SET_PUBLIC_CARD";

export const fetchPublicCard = (pathname, history) => {
  return (dispatch) => {
    dispatch({ type: CARD_IS_LOADING });
    fetch(`http://localhost:5000/api/v1/cards/path/${pathname}`)
      .then((resp) => {
        if (!resp.ok) {
          history.push("/404");
          return;
        } else {
          return resp.json();
        }
      })
      .then((publicCard) => {
        if (!publicCard) {
          return;
        }
        dispatch({ type: SET_PUBLIC_CARD, publicCard: publicCard });
        dispatch({ type: CARD_IS_NOT_LOADING });
      });
  };
};
