import Card from "../../models/card";

import { IS_LOADING, IS_NOT_LOADING } from "./loader";

export const FETCH_CARD = "FETCH_CARD";
export const SET_CARD = "SET_CARD";
export const SET_CARD_THEME_ID = "SET_CARD_THEME_ID";

export const fetchCard = () => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING });
    fetch(`http://localhost:4000/cards/1`)
      .then((resp) => resp.json())
      .then((card) => {
        const cardModel = new Card(
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

        dispatch({ type: SET_CARD, card: cardModel });
        localStorage.setItem("card", JSON.stringify(cardModel));
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
  return {
    type: SET_CARD,
    card: cardModel,
  };
};

export const setCardThemeId = (id) => {
  return {
    type: SET_CARD_THEME_ID,
    themeId: id,
  };
};
