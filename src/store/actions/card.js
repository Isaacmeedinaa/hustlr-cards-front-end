import Card from "../../models/card";

import { IS_LOADING, IS_NOT_LOADING } from "./loader";

export const FETCH_CARD = "FETCH_CARD";
export const SET_CARD = "SET_CARD";
export const SET_CARD_THEME_ID = "SET_CARD_THEME_ID";
export const SET_CARD_PUBLIC = "SET_CARD_PUBLIC";
export const SET_CARD_NOT_PUBLIC = "SET_CARD_NOT_PUBLIC";
export const UPLOAD_BUSINESS_PROFILE_PICTURE =
  "UPLOAD_BUSINESS_PROFILE_PICTURE";
export const CREATE_OFFERING = "CREATE_OFFERING";
export const UPDATE_OFFERING = "UPDATE_OFFERING";
export const DELETE_OFFERING = "DELETE_OFFERING";

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
        const cardDataModel = new Card(
          card.id,
          card.title,
          card.description,
          card.offerings,
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
  description,
  offerings,
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
      description,
      offerings,
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

export const uploadBusinessProfilePicture = (reqImgData, cardId) => {
  return (dispatch) => {
    const body = new FormData();
    body.append("CardId", cardId);
    body.append("File", reqImgData);

    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        Accepts: "application/json",
      },
      body: body,
    };

    fetch("http://localhost:5000/api/v1/photos/profile", reqObj)
      .then((resp) => {
        if (!resp.ok) {
          return;
        }
        return resp.json();
      })
      .then((data) => {
        dispatch({
          type: UPLOAD_BUSINESS_PROFILE_PICTURE,
          imgUrl: data.url,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const createOffering = (cardId) => {
  return (dispatch) => {
    const offeringData = {
      title: "Your Service or Product Title",
      description: "",
      price: "",
      offerType: 0,
      cardId: cardId,
    };

    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(offeringData),
    };

    fetch("http://localhost:5000/api/v1/offerings", reqObj)
      .then((resp) => resp.json())
      .then((offering) => {
        dispatch({ type: CREATE_OFFERING, offering: offering });
      })
      .catch((err) => console.log(err));
  };
};

export const updateOffering = (id, title, price, cardId) => {
  return (dispatch) => {
    const offeringData = {
      id: id,
      title: title,
      description: "",
      price: price,
      offerType: 0,
      cardId: cardId,
    };

    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(offeringData),
    };

    fetch(`http://localhost:5000/api/v1/offerings/${id}`, reqObj)
      .then((resp) => resp.json())
      .then((offering) => {
        dispatch({
          type: UPDATE_OFFERING,
          id: offering.id,
          offering: offering,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteOffering = (id, index) => {
  return async (dispatch) => {
    const offeringData = {
      id: id,
    };

    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(offeringData),
    };

    await fetch(
      `http://localhost:5000/api/v1/offerings/${id}`,
      reqObj
    ).catch((err) => console.log(err));
    dispatch({ type: DELETE_OFFERING, id: id });
  };
};
