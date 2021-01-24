import CardLocation from "../../models/cardLocation";
import {
  SET_CARD,
  SET_CARD_THEME_ID,
  SET_CARD_PUBLIC,
  SET_CARD_NOT_PUBLIC,
  UPLOAD_BACKDROP_IMAGE,
  DELETE_BACKDROP_IMAGE,
  UPLOAD_BUSINESS_PROFILE_PICTURE,
  DELETE_BUSINESS_PROFILE_PICTURE,
  SET_CARD_TITLE,
  SET_CARD_LOCATION,
  SET_FULL_CARD_LOCATION,
  SET_CARD_INDUSTRY,
  SET_CARD_DESCRIPTION,
  SET_CARD_OFFERING_TITLE,
  SET_CARD_OFFERING_PRICE,
  SET_CARD_OFFERING_DESCRIPTION,
  CREATE_OFFERING,
  UPDATE_OFFERING,
  DELETE_OFFERING,
  SET_CARD_EMAIL,
  SET_CARD_PHONE_NUMBER,
  SET_CARD_SOCIAL_MEDIAS_LINK,
  UPLOAD_CARD_GALLERY_PICTURE,
  DELETE_CARD_GALLERY_PICTURE,
  UPLOAD_OFFERING_PICTURE,
  DELETE_OFFERING_PICTURE,
  SET_CARD_PATH,
} from "../actions/card";

const initialState = {
  cardData: {
    id: null,
    title: "",
    description: "",
    city: "",
    state: "",
    email: "",
    phoneNumber: "",
    imgUrl: "",
    imgId: null,
    backdropImgUrl: "",
    backdropImgId: null,
    pathToCard: "",
    isPublic: null,
    facebookLink: "",
    instagramLink: "",
    snapchatLink: "",
    twitterLink: "",
    themeId: null,
    industryId: null,
    userId: null,
    industry: {},
    location: new CardLocation(),
    photos: [],
    offerings: [],
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
          city: action.cardData.city,
          state: action.cardData.state,
          email: action.cardData.email,
          phoneNumber: action.cardData.phoneNumber,
          imgUrl: action.cardData.imgUrl,
          imgId: action.cardData.imgId,
          backdropImgUrl: action.cardData.backdropImgUrl,
          backdropImgId: action.cardData.backdropImgId,
          pathToCard: action.cardData.pathToCard,
          isPublic: action.cardData.isPublic,
          facebookLink: action.cardData.facebookLink,
          instagramLink: action.cardData.instagramLink,
          snapchatLink: action.cardData.snapchatLink,
          twitterLink: action.cardData.twitterLink,
          themeId: action.cardData.themeId,
          industryId: action.cardData.industryId,
          userId: action.cardData.userId,
          industry: action.cardData.industry,
          photos: action.cardData.photos,
          offerings: action.cardData.offerings,
          location: action.cardData.location,
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

    case UPLOAD_BACKDROP_IMAGE:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          backdropImgId: action.backdropImgId,
          backdropImgUrl: action.backdropImgUrl,
        },
      };

    case DELETE_BACKDROP_IMAGE:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          backdropImgUrl: "",
          backdropImgId: null,
        },
      };

    case UPLOAD_BUSINESS_PROFILE_PICTURE:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          imgUrl: action.imgUrl,
          imgId: action.imgId,
        },
      };

    case DELETE_BUSINESS_PROFILE_PICTURE:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          imgUrl: "",
          imgId: null,
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
          location: {
            ...state.cardData.location,
            description: action.description,
            googlePlaceId: action.googlePlaceId,
          },
        },
      };

    case SET_FULL_CARD_LOCATION:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          location: action.location,
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
      const offeringsSnapshotTwo = [...state.cardData.offerings]; // creates a copy of all offerings in array
      const offeringSnapshotTwo = offeringsSnapshotTwo[action.offeringIndex]; // gets copy of the offering we want to modify
      offeringSnapshotTwo.price = action.offeringPrice; // modifies the

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: offeringsSnapshotTwo,
        },
      };

    case SET_CARD_OFFERING_DESCRIPTION:
      const offeringsSnapshotThree = [...state.cardData.offerings];
      const offeringSnapshotThree =
        offeringsSnapshotThree[action.offeringIndex];
      offeringSnapshotThree.description = action.offeringDescription;

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: offeringsSnapshotThree,
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
      const updateOfferings = state.cardData.offerings;
      updateOfferings[action.offeringIndex] = action.offering;

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: updateOfferings,
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

    case SET_CARD_SOCIAL_MEDIAS_LINK:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          facebookLink: action.facebookLink,
          instagramLink: action.instagramLink,
          twitterLink: action.twitterLink,
          snapchatLink: action.snapchatLink,
        },
      };

    case UPLOAD_CARD_GALLERY_PICTURE:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          photos: [action.photo, ...state.cardData.photos],
        },
      };

    case DELETE_CARD_GALLERY_PICTURE:
      const filteredGalleryPhotos = state.cardData.photos.filter(
        (photo) => photo.id !== action.photoId
      );

      return {
        ...state,
        cardData: {
          ...state.cardData,
          photos: filteredGalleryPhotos,
        },
      };

    case UPLOAD_OFFERING_PICTURE:
      const updatedOfferingsOne = state.cardData.offerings.map((offering) => {
        if (offering.id !== action.offeringId) {
          return offering;
        }

        offering.photos = [...offering.photos, action.photo];
        return offering;
      });

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: updatedOfferingsOne,
        },
      };

    case DELETE_OFFERING_PICTURE:
      const updatedOfferings = state.cardData.offerings.map((offering) => {
        if (offering.id !== action.offeringId) {
          return offering;
        }

        offering.photos = offering.photos.filter(
          (photo) => photo.id !== action.photoId
        );
        return offering;
      });

      return {
        ...state,
        cardData: {
          ...state.cardData,
          offerings: updatedOfferings,
        },
      };

    case SET_CARD_PATH:
      return {
        ...state,
        cardData: {
          ...state.cardData,
          pathToCard: action.pathToCard,
        },
      };

    default:
      return state;
  }
};

export default card;
