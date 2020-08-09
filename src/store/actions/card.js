import Card from "../../models/card";

import { IS_LOADING, IS_NOT_LOADING } from "./loader";

export const FETCH_CARD = "FETCH_CARD";
export const SET_CARD = "SET_CARD";
export const SET_CARD_THEME_ID = "SET_CARD_THEME_ID";

export const fetchCard = () => {
  return (dispatch, getState) => {
    const { themes } = getState();

    dispatch({ type: IS_LOADING });
    fetch(`http://localhost:4000/cards/1`)
      .then((resp) => resp.json())
      .then((card) => {
        const cardDataModel = new Card(
          card.id,
          card.title,
          card.services,
          card.city,
          card.state,
          card.email,
          card.phoneNumber,
          card.imgUrl,
          card.pathToCard,
          card.isPublic,
          card.facebookLink,
          card.instagramLink,
          card.twitterLink,
          card.snapchatLink,
          card.themeId,
          card.industry,
          card.userId,
          card.photos
        );

        const cardTheme = themes.find((theme) => theme.id === card.themeId);

        dispatch({
          type: SET_CARD,
          cardData: cardDataModel,
          cardTheme: cardTheme,
        });
        localStorage.setItem("card", JSON.stringify(cardDataModel));
        dispatch({ type: IS_NOT_LOADING });
      });
  };
};

export const setCard = (
  id,
  title,
  services,
  city,
  state,
  email,
  phoneNumber,
  imgUrl,
  pathToCard,
  isPublic,
  facebookLink,
  instagramLink,
  twitterLink,
  snapchatLink,
  themeId,
  industry,
  userId,
  photos
) => {
  return (dispatch, getState) => {
    const { themes } = getState();

    const cardModel = new Card(
      id,
      title,
      services,
      city,
      state,
      email,
      phoneNumber,
      imgUrl,
      pathToCard,
      isPublic,
      facebookLink,
      instagramLink,
      twitterLink,
      snapchatLink,
      themeId,
      industry,
      userId,
      photos
    );

    const cardTheme = themes.find((theme) => theme.id === themeId);

    dispatch({ type: SET_CARD, cardData: cardModel, cardTheme: cardTheme });
  };
};

export const setCardThemeId = (id) => {
  return (dispatch, getState) => {
    const { themes } = getState();

    const cardTheme = themes.find((theme) => theme.id === id);

    dispatch({ type: SET_CARD_THEME_ID, themeId: id, cardTheme: cardTheme });
  };
};
