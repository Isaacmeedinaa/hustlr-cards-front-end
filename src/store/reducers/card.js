import { THEMES } from "../../data/theme";

import {
  SET_CARD,
  SET_CARD_THEME_ID,
  SET_CARD_PUBLIC,
  SET_CARD_NOT_PUBLIC,
  FETCH_CARD,
  ADD_PRODUCT_SERVICE,
  DELETE_PRODUCT_SERVICE_INDEX,
  DELETE_PRODUCT_SERVICE_ID,
} from "../actions/card";

const initialState = {
  cardData: {
    id: null,
    title: "",
    services: "",
    productsServices: [],
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
    // case FETCH_CARD:
    //   return {
    //     cardData: {
    //       id: action.cardData.id,
    //       title: action.cardData.title,
    //       services: action.cardData.services,
    //       productsServices: action.cardData.productsServices,
    //       city: action.cardData.city,
    //       state: action.cardData.state,
    //       email: action.cardData.email,
    //       phoneNumber: action.cardData.phoneNumber,
    //       imgUrl: action.cardData.imgUrl,
    //       pathToCard: action.cardData.pathToCard,
    //       isPublic: action.cardData.isPublic,
    //       facebookLink: action.cardData.facebookLink,
    //       instagramLink: action.cardData.instagramLink,
    //       twitterLink: action.cardData.twitterLink,
    //       snapchatLink: action.cardData.snapchatLink,
    //       themeId: action.cardData.themeId,
    //       industry: action.cardData.industry,
    //       userId: action.cardData.userId,
    //       photos: action.cardData.photos,
    //     },
    //     cardTheme: {
    //       primaryColor: action.cardTheme.primaryColor,
    //       transparentColor: action.cardTheme.transparentColor,
    //     },
    //   };
    case SET_CARD:
      return {
        cardData: {
          id: action.cardData.id,
          title: action.cardData.title,
          services: action.cardData.services,
          productsServices: action.cardData.productsServices,
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

    case ADD_PRODUCT_SERVICE:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          productsServices: state.cardData.productsServices.concat(
            action.productService
          ),
        },
      };

    case DELETE_PRODUCT_SERVICE_ID:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          productsServices: state.cardData.productsServices.filter(
            (productService) => productService.id !== action.id
          ),
        },
      };

    case DELETE_PRODUCT_SERVICE_INDEX:
      state.cardData.productsServices.splice(action.index, 1);

      return {
        ...state,
        cardData: {
          ...state.cardData,
          productsServices: state.cardData.productsServices,
        },
      };

    default:
      return state;
  }
};

export default card;
