import {
  SET_CARD,
  SET_CARD_THEME_ID,
  SET_CARD_PUBLIC,
  SET_CARD_NOT_PUBLIC,
  UPLOAD_BUSINESS_PROFILE_PICTURE,
  CREATE_OFFERING,
  UPDATE_OFFERING,
  DELETE_OFFERING,
} from "../actions/card";

const initialState = {
  cardData: {
    id: null,
    title: "",
    description: "",
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
          description: action.cardData.description,
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

    case UPLOAD_BUSINESS_PROFILE_PICTURE:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          imgUrl: action.imgUrl,
        },
      };

    case CREATE_OFFERING:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: state.cardData.offerings.concat(action.offering),
        },
      };

    case UPDATE_OFFERING:
      const offeringIndex = state.cardData.offerings.findIndex(
        (offering) => offering.id === action.id
      );
      const updatedOfferings = [...state.cardData.offerings];
      updatedOfferings[offeringIndex] = action.offering;

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: updatedOfferings,
        },
      };

    case DELETE_OFFERING:
      const filteredOfferings = state.cardData.offerings.filter(
        (offering) => offering.id !== action.id
      );

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: filteredOfferings,
        },
      };

    default:
      return state;
  }
};

export default card;
