import { THEMES } from "../../data/theme";

import {
  SET_CARD,
  SET_CARD_THEME_ID,
  SET_CARD_PUBLIC,
  SET_CARD_NOT_PUBLIC,
  ADD_OFFERING,
  DELETE_OFFERING_INDEX,
  DELETE_OFFERING_ID,
} from "../actions/card";

const initialState = {
  cardData: {
    id: null,
    title: "",
    offerings: [],
    city: "",
    state: "",
    email: "",
    phoneNumber: "",
    imgUrl: "",
    pathToCard: "",
    isPublic: null,
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
    snapchatLink: "",
    themeId: null,
    industry: {},
    userId: null,
    photos: [],
  },
  cardTheme: {
    primaryColor: "",
    transparentColor: "",
  },
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD:
      return {
        cardData: {
          id: action.cardData.id,
          title: action.cardData.title,
          offerings: action.cardData.offerings,
          city: action.cardData.city,
          state: action.cardData.state,
          email: action.cardData.email,
          phoneNumber: action.cardData.phoneNumber,
          imgUrl: action.cardData.imgUrl,
          pathToCard: action.cardData.pathToCard,
          isPublic: action.cardData.isPublic,
          facebookLink: action.cardData.facebookLink,
          instagramLink: action.cardData.instagramLink,
          twitterLink: action.cardData.twitterLink,
          snapchatLink: action.cardData.snapchatLink,
          themeId: action.cardData.themeId,
          industry: action.cardData.industry,
          userId: action.cardData.userId,
          photos: action.cardData.photos,
        },
        cardTheme: {
          primaryColor: action.cardTheme.primaryColor,
          transparentColor: action.cardTheme.transparentColor,
        },
      };

    case SET_CARD_THEME_ID:
      return {
        cardData: {
          ...state.cardData,
          themeId: action.themeId,
        },
        cardTheme: {
          primaryColor: action.cardTheme.primaryColor,
          transparentColor: action.cardTheme.transparentColor,
        },
      };

    case SET_CARD_PUBLIC:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          isPublic: true,
        },
      };

    case SET_CARD_NOT_PUBLIC:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          isPublic: false,
        },
      };

    case ADD_OFFERING:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: state.cardData.offerings.concat(action.offering),
        },
      };

    case DELETE_OFFERING_ID:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          offering: state.cardData.offering.filter(
            (offering) => offering.id !== action.id
          ),
        },
      };

    case DELETE_OFFERING_INDEX:
      state.cardData.offerings.splice(action.index, 1);

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: state.cardData.offerings,
        },
      };

    default:
      return state;
  }
};

export default card;
