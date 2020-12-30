import PublicCard from "../../models/publicCard";

import {
  PUBLIC_CARD_IS_LOADING,
  PUBLIC_CARD_IS_NOT_LOADING,
} from "./loaders/publicCardLoader";
import { API_BASE_URL } from "../../constants/urls";

export const SET_PUBLIC_CARD = "SET_PUBLIC_CARD";

export const fetchPublicCard = (pathname, history) => {
  return (dispatch, getState) => {
    dispatch({ type: PUBLIC_CARD_IS_LOADING });
    fetch(`${API_BASE_URL}/cards/path/${pathname}`)
      .then((resp) => {
        if (!resp.ok) {
          history.push("/404");
          dispatch({ type: PUBLIC_CARD_IS_NOT_LOADING });
          return;
        } else {
          return resp.json();
        }
      })
      .then((publicCard) => {
        const { themes } = getState();

        if (!publicCard) {
          return;
        }

        const publicCardTheme = themes.find(
          (theme) => theme.id === publicCard.themeId
        );

        const primaryColor = publicCardTheme.primaryColor;
        const transparentColor = publicCardTheme.transparentColor;

        const publicCardModel = new PublicCard(
          publicCard.id,
          publicCard.title,
          publicCard.description,
          publicCard.location,
          publicCard.email,
          publicCard.phoneNumber,
          publicCard.imgUrl,
          publicCard.imgId,
          publicCard.backdropImgUrl,
          publicCard.backdropImgId,
          publicCard.pathToCard,
          publicCard.isPublic,
          publicCard.facebookLink,
          publicCard.instagramLink,
          publicCard.snapchatLink,
          publicCard.twitterLink,
          publicCard.themeId,
          publicCard.industryId,
          publicCard.userId,
          publicCard.industry,
          publicCard.photos,
          publicCard.offerings,
          primaryColor,
          transparentColor
        );

        dispatch({ type: SET_PUBLIC_CARD, publicCard: publicCardModel });
        dispatch({ type: PUBLIC_CARD_IS_NOT_LOADING });
      })
      .catch((err) => {
        dispatch({ type: PUBLIC_CARD_IS_NOT_LOADING });
        console.log(err);
      });
  };
};
