import { SET_CARD, SET_CARD_THEME_ID } from "../actions/card";

const initialState = {
  id: null,
  title: "",
  services: "",
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
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD:
      return {
        id: action.card.id,
        title: action.card.title,
        services: action.card.services,
        city: action.card.city,
        state: action.card.state,
        email: action.card.email,
        phoneNumber: action.card.phoneNumber,
        imgUrl: action.card.imgUrl,
        pathToCard: action.card.pathToCard,
        isPublic: action.card.isPublic,
        facebookLink: action.card.facebookLink,
        instagramLink: action.card.instagramLink,
        twitterLink: action.card.twitterLink,
        snapchatLink: action.card.snapchatLink,
        themeId: action.card.themeId,
        industry: action.card.industry,
        userId: action.card.userId,
        photos: action.card.photos,
      };

    case SET_CARD_THEME_ID:
      return {
        ...state,
        themeId: action.themeId,
      };

    default:
      return state;
  }
};

export default loader;
