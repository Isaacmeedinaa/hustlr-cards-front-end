import {
  SET_CARD,
  SET_CARD_THEME_ID,
  SET_CARD_PUBLIC,
  SET_CARD_NOT_PUBLIC,
  UPLOAD_BUSINESS_PROFILE_PICTURE,
  SET_CARD_TITLE,
  SET_CARD_LOCATION,
  SET_CARD_INDUSTRY,
  SET_CARD_DESCRIPTION,
  SET_CARD_OFFERING_TITLE,
  SET_CARD_OFFERING_PRICE,
  CREATE_OFFERING,
  UPDATE_OFFERING,
  DELETE_OFFERING,
  SET_CARD_EMAIL,
  SET_CARD_PHONE_NUMBER,
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

    case SET_CARD_TITLE:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          title: action.title,
        },
      };

    case SET_CARD_LOCATION:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          city: action.city,
          state: action.state,
        },
      };

    case SET_CARD_INDUSTRY:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          industry: action.industry,
        },
      };

    case SET_CARD_DESCRIPTION:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          description: action.description,
        },
      };

    case SET_CARD_OFFERING_TITLE:
      const offeringsSnapshotOne = [...state.cardData.offerings];
      const offeringSnapshotOne = offeringsSnapshotOne[action.offeringIndex];
      offeringSnapshotOne.title = action.offeringTitle;

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: offeringsSnapshotOne,
        },
      };

    case SET_CARD_OFFERING_PRICE:
      const offeringsSnapshotTwo = [...state.cardData.offerings];
      const offeringSnapshotTwo = offeringsSnapshotTwo[action.offeringIndex];
      offeringSnapshotTwo.price = action.offeringPrice;

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: offeringsSnapshotTwo,
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

    case SET_CARD_EMAIL:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          email: action.email,
        },
      };

    case SET_CARD_PHONE_NUMBER:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          phoneNumber: action.phoneNumber,
        },
      };

    default:
      return state;
  }
};

export default card;
