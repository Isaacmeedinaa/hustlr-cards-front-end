export const IS_LOADING = "IS_LOADING";
export const IS_NOT_LOADING = "IS_NOT_LOADING";

export const fetchCards = (pathname, history) => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING });
    fetch("http://localhost:4000/cards")
      .then((resp) => resp.json())
      .then((cards) => {
        const foundCard = cards.find((card) => card.username === pathname);
        if (!foundCard) {
          history.push("/404");
        } else {
          console.log("found!");
        }
        dispatch({ type: IS_NOT_LOADING });
      });
  };
};
