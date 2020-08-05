import { IS_LOADING, IS_NOT_LOADING } from "./loader";

export const SET_PUBLIC_CARD = "SET_PUBLIC_CARD";

export const fetchPublicCard = (pathname, history) => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING });
    fetch(`http://localhost:4000/publicCards/${pathname}`)
      .then((resp) => {
        if (!resp.ok) {
          history.push("/404");
        } else {
          return resp.json();
        }
      })
      .then((publicCard) => {
        if (!publicCard) {
          return;
        }
        dispatch({ type: SET_PUBLIC_CARD, publicCard: publicCard });
        dispatch({ type: IS_NOT_LOADING });
      });
  };
};
