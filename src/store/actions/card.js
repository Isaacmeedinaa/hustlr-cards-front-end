import Card from "../../models/card";

import { IS_LOADING, IS_NOT_LOADING } from "./loader";

export const FETCH_CARD = "FETCH_CARD";
export const SET_CARD = "SET_CARD";
export const SET_CARD_THEME_ID = "SET_CARD_THEME_ID";
export const SET_CARD_PUBLIC = "SET_CARD_PUBLIC";
export const SET_CARD_NOT_PUBLIC = "SET_CARD_NOT_PUBLIC";
export const ADD_PRODUCT_SERVICE = "ADD_PRODUCT_SERVICE";
export const DELETE_PRODUCT_SERVICE_ID = "DELETE_PRODUCT_SERVICE_ID";
export const DELETE_PRODUCT_SERVICE_INDEX = "DELETE_PRODUCT_SERVICE_INDEX";

export const fetchCard = (userId) => {
  return (dispatch, getState) => {
    const { themes } = getState();

    dispatch({ type: IS_LOADING });
    fetch(`http://localhost:5000/api/v1/cards/${userId}`)
      .then((resp) => {
        if (resp.status === 401) {
          console.log("error");
        } else if (resp.ok) {
          return resp.json();
        }
      })
      .then((card) => {
        const productsServices = [
          { id: 1, title: "One Page Website", price: 5.79 },
          { id: 2, title: "Multi Page Website", price: 9.99 },
          { id: 3, title: "Ecommerce Website", price: 0.85 },
        ];

        const cardDataModel = new Card(
          card.id,
          card.title,
          card.services,
          productsServices,
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
  productsServices,
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
      productsServices,
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

export const setIsPublic = (isPublic) => {
  return (dispatch) => {
    if (!isPublic) {
      dispatch({ type: SET_CARD_NOT_PUBLIC });
    } else {
      dispatch({ type: SET_CARD_PUBLIC });
    }
  };
};

export const addProductService = () => {
  return {
    type: ADD_PRODUCT_SERVICE,
    productService: { id: 0, title: "", price: null },
  };
};

export const deleteProductService = (id, index) => {
  return (dispatch) => {
    if (id !== 0) {
      // do fetch delete
      // call dispatch action
      dispatch({ type: DELETE_PRODUCT_SERVICE_ID, id: id });
      console.log("testing");
    } else {
      dispatch({ type: DELETE_PRODUCT_SERVICE_INDEX, index: index });
    }
  };
};
