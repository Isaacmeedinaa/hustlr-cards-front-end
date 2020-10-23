import Card from "../../models/card";
import { API_BASE_URL } from '../../constants/urls';

import { CARD_IS_LOADING, CARD_IS_NOT_LOADING } from "./loaders/cardLoader";
import {
  CARD_IS_UPDATING,
  CARD_IS_NOT_UPDATING,
} from "./loaders/cardUpdatingLoader";
import {
  CARD_SAVED_SUCCESSFULLY,
  CARD_SAVE_UNSUCCESSFUL,
} from "./notifications/cardSavedNotifications";
import {
  OFFERING_CREATED_SUCCESSFULLY,
  OFFERING_CREATED_UNSUCCESSFULLY,
  OFFERING_SAVED_SUCCESSFULLY,
  OFFERING_SAVED_UNSUCCESSFULLY,
  OFFERING_DELETED_SUCCESSFULLY,
  OFFERING_DELETED_UNSUCCESSFULLY
} from "./notifications/offeringNotifications";
import {
  GALLERY_IMAGE_UPLOADED_SUCCESSFULLY,
  GALLERY_IMAGE_UPLOADED_UNSUCCESSFULLY,
  GALLERY_IMAGE_DELETED_SUCCESSFULLY,
  GALLERY_IMAGE_DELETED_UNSUCCESSFULLY
} from "./notifications/galleryNotifications";
import {
  PROFILE_IMAGE_UPLOADED_SUCCESSFULLY,
  PROFILE_IMAGE_UPLOADED_UNSUCCESSFULLY,
  PROFILE_IMAGE_DELETED_SUCCESSFULLY,
  PROFILE_IMAGE_DELETED_UNSUCCESSFULLY
} from "./notifications/profileImageNotifications";
import {
  CARD_IMAGE_IS_UPLOADING,
  CARD_IMAGE_IS_NOT_UPLOADING,
} from "./loaders/cardImageLoader";
import {
  CARD_GALLERY_IMAGE_IS_LOADING,
  CARD_GALLERY_IMAGE_IS_NOT_LOADING,
} from "./loaders/cardGalleryImageLoader";
import { CARD_ERRORS, CARD_NO_ERRORS } from "./errors/cardErrors";

export const FETCH_CARD = "FETCH_CARD";
export const SET_CARD = "SET_CARD";
export const SET_CARD_THEME_ID = "SET_CARD_THEME_ID";
export const SET_CARD_PUBLIC = "SET_CARD_PUBLIC";
export const SET_CARD_NOT_PUBLIC = "SET_CARD_NOT_PUBLIC";
export const UPLOAD_BUSINESS_PROFILE_PICTURE =
  "UPLOAD_BUSINESS_PROFILE_PICTURE";
export const DELETE_BUSINESS_PROFILE_PICTURE =
  "DELETE_BUSINESS_PROFILE_PICTURE";
export const SET_CARD_TITLE = "SET_CARD_TITLE";
export const SET_CARD_LOCATION = "SET_CARD_LOCATION";
export const SET_CARD_INDUSTRY = "SET_CARD_INDUSTRY";
export const SET_CARD_DESCRIPTION = "SET_CARD_DESCRIPTION";
export const SET_CARD_OFFERING_TITLE = "SET_CARD_OFFERING_TITLE";
export const SET_CARD_OFFERING_PRICE = "SET_CARD_OFFERING_PRICE";
export const SET_CARD_OFFERING_DESCRIPTION = "SET_CARD_OFFERING_DESCRIPTION";
export const CREATE_OFFERING = "CREATE_OFFERING";
export const UPDATE_OFFERING = "UPDATE_OFFERING";
export const DELETE_OFFERING = "DELETE_OFFERING";
export const SET_CARD_EMAIL = "SET_CARD_EMAIL";
export const SET_CARD_PHONE_NUMBER = "SET_CARD_PHONE_NUMBER";
export const SET_CARD_SOCIAL_MEDIAS_LINK = "SET_CARD_SOCIAL_MEDIAS_LINK";
export const UPLOAD_CARD_GALLERY_PICTURE = "UPLOAD_CARD_GALLERY_PICTURE";
export const DELETE_CARD_GALLERY_PICTURE = "DELETE_CARD_GALLERY_PICTURE";
export const SET_CARD_PATH = "SET_CARD_PATH";

export const fetchCard = (userId) => {
  return (dispatch, getState) => {
    const { themes } = getState();

    dispatch({ type: CARD_IS_LOADING });
    fetch(`${API_BASE_URL}/cards/${userId}`)
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
          card.city,
          card.state,
          card.email,
          card.phoneNumber,
          card.imgUrl,
          card.imgId,
          card.pathToCard,
          card.isPublic,
          card.facebookLink,
          card.instagramLink,
          card.snapchatLink,
          card.twitterLink,
          card.themeId,
          card.industryId,
          card.userId,
          card.industry,
          card.photos,
          card.offerings
        );

        const cardTheme = themes.find((theme) => theme.id === card.themeId);

        dispatch({
          type: SET_CARD,
          cardData: cardDataModel,
          cardTheme: cardTheme,
        });

        localStorage.setItem("card", JSON.stringify(cardDataModel));
        dispatch({ type: CARD_IS_NOT_LOADING });
      });
  };
};

export const saveCard = (cardId) => {
  return (dispatch, getState) => {
    const { cardData } = getState().card;

    const updateCardData = {
      id: cardData.id,
      title: cardData.title,
      description: cardData.description,
      city: cardData.city,
      state: cardData.state,
      email: cardData.email,
      phoneNumber: cardData.phoneNumber,
      imgUrl: cardData.imgUrl,
      imgId: cardData.imgId,
      pathToCard: cardData.pathToCard,
      isPublic: cardData.isPublic,
      facebookLink: cardData.facebookLink,
      instagramLink: cardData.instagramLink,
      snapchatLink: cardData.snapchatLink,
      twitterLink: cardData.twitterLink,
      themeId: cardData.themeId,
      industryId:
        cardData.industry === null || !cardData.industry.id
          ? null
          : cardData.industry.id,
      userId: cardData.userId,
    };

    const userToken = localStorage.getItem("userToken");

    dispatch({ type: CARD_IS_UPDATING });
    const reqObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(updateCardData)
    };

    fetch(`${API_BASE_URL}/cards/${cardId}`, reqObj)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.errors) {
          dispatch({ type: CARD_ERRORS, errors: data.errors });
          dispatch({ type: CARD_IS_NOT_UPDATING });
          dispatch({type: CARD_SAVE_UNSUCCESSFUL});
          return;
        }
        dispatch({type: CARD_SAVED_SUCCESSFULLY});
        dispatch({ type: CARD_NO_ERRORS });
        dispatch({ type: CARD_IS_NOT_UPDATING });
      });
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

    dispatch({ type: CARD_IMAGE_IS_UPLOADING });
    fetch(`${API_BASE_URL}/photos/profile`, reqObj)
      .then((resp) => {
        if (!resp.ok) {
          dispatch({ type: CARD_IMAGE_IS_NOT_UPLOADING });
          dispatch({type: PROFILE_IMAGE_UPLOADED_UNSUCCESSFULLY});
          return;
        }
        return resp.json();
      })
      .then((data) => {
        dispatch({
          type: UPLOAD_BUSINESS_PROFILE_PICTURE,
          imgUrl: data.url,
          imgId: data.id,
        });
        dispatch({ type: CARD_IMAGE_IS_NOT_UPLOADING });
        dispatch({type: PROFILE_IMAGE_UPLOADED_SUCCESSFULLY});
      })
      .catch((err) => {
        dispatch({type: PROFILE_IMAGE_UPLOADED_UNSUCCESSFULLY});
        console.log(err)
      });
  };
};

export const deleteBusinessImage = (imgId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
        Accepts: "application/json",
      },
    };

    dispatch({ type: CARD_IMAGE_IS_UPLOADING });
    fetch(`${API_BASE_URL}/photos/${imgId}`, reqObj)
      .then((resp) => {
        if (resp.ok) {
          dispatch({ type: DELETE_BUSINESS_PROFILE_PICTURE });
          dispatch({ type: CARD_IMAGE_IS_NOT_UPLOADING });
          dispatch({type: PROFILE_IMAGE_DELETED_SUCCESSFULLY});
        }
      })
      .catch((err) => {
        dispatch({type: PROFILE_IMAGE_DELETED_UNSUCCESSFULLY});
        console.log(err)
      });
  };
};

export const setCardTitle = (title) => {
  return {
    type: SET_CARD_TITLE,
    title: title,
  };
};

export const setCardLocation = (city, state) => {
  return {
    type: SET_CARD_LOCATION,
    city: city,
    state: state,
  };
};

export const setCardIndustry = (industry) => {
  return {
    type: SET_CARD_INDUSTRY,
    industry: industry,
  };
};

export const setCardDescription = (description) => {
  return {
    type: SET_CARD_DESCRIPTION,
    description: description,
  };
};

export const setCardOfferingTitle = (offeringIndex, offeringTitle) => {
  return {
    type: SET_CARD_OFFERING_TITLE,
    offeringIndex: offeringIndex,
    offeringTitle: offeringTitle,
  };
};

export const setCardOfferingPrice = (offeringIndex, offeringPrice) => {
  return {
    type: SET_CARD_OFFERING_PRICE,
    offeringIndex: offeringIndex,
    offeringPrice: offeringPrice,
  };
};

export const setCardOfferingDescription = (offeringIndex, offeringDescription) => {
  return {
    type: SET_CARD_OFFERING_DESCRIPTION,
    offeringIndex: offeringIndex,
    offeringDescription: offeringDescription,
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

    fetch(`${API_BASE_URL}/offerings`, reqObj)
      .then((resp) => resp.json())
      .then((offering) => {
        dispatch({ type: CREATE_OFFERING, offering: offering });
        dispatch({type: OFFERING_CREATED_SUCCESSFULLY});
      })
      .catch((err) => {
        dispatch({type: OFFERING_CREATED_UNSUCCESSFULLY});
        console.log(err)
      });
  };
};

export const updateOffering = (id, title, description, price, cardId) => {
  return (dispatch) => {
    const offeringData = {
      id: id,
      title: title,
      description: description,
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

    fetch(`${API_BASE_URL}/offerings/${id}`, reqObj)
      .then((resp) => resp.json())
      .then((offering) => {
        dispatch({
          type: UPDATE_OFFERING,
          id: offering.id,
          offering: offering,
        });
        dispatch({type: OFFERING_SAVED_SUCCESSFULLY});
      })
      .catch((err) => {
          dispatch({type: OFFERING_SAVED_UNSUCCESSFULLY});
          console.log(err)
        }
      );
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

    await fetch(`${API_BASE_URL}/offerings/${id}`, reqObj)
      .then(() => {})
      .then(() => {
        dispatch({ type: DELETE_OFFERING, id: id });
        dispatch({type: OFFERING_DELETED_SUCCESSFULLY});
      })
      .catch((err) => {
        dispatch({type: OFFERING_DELETED_UNSUCCESSFULLY});
        console.log(err)
      }
    );
  };
};

export const setCardEmail = (email) => {
  return {
    type: SET_CARD_EMAIL,
    email: email,
  };
};

export const setCardPhoneNumber = (phoneNumber) => {
  return {
    type: SET_CARD_PHONE_NUMBER,
    phoneNumber: phoneNumber,
  };
};

export const setCardSocialMediaLinks = (
  facebookLink,
  instagramLink,
  twitterLink,
  snapchatLink
) => {
  return {
    type: SET_CARD_SOCIAL_MEDIAS_LINK,
    facebookLink: facebookLink,
    instagramLink: instagramLink,
    twitterLink: twitterLink,
    snapchatLink: snapchatLink,
  };
};

export const uploadGalleryImage = (reqImgData, cardId) => {
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

    dispatch({ type: CARD_GALLERY_IMAGE_IS_LOADING });
    fetch(`${API_BASE_URL}/photos`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: UPLOAD_CARD_GALLERY_PICTURE, photo: data });
        dispatch({ type: CARD_GALLERY_IMAGE_IS_NOT_LOADING });
        dispatch({type: GALLERY_IMAGE_UPLOADED_SUCCESSFULLY});
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: CARD_GALLERY_IMAGE_IS_NOT_LOADING });
        dispatch({type: GALLERY_IMAGE_UPLOADED_UNSUCCESSFULLY});
      });
  };
};

export const deleteGalleryImage = (photoId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    dispatch({ type: CARD_GALLERY_IMAGE_IS_LOADING });
    fetch(`${API_BASE_URL}/photos/${photoId}`, reqObj)
      .then((resp) => {
        if (resp.ok) {
          dispatch({ type: DELETE_CARD_GALLERY_PICTURE, photoId: photoId });
        }
        dispatch({ type: CARD_GALLERY_IMAGE_IS_NOT_LOADING });
        dispatch({type: GALLERY_IMAGE_DELETED_SUCCESSFULLY});
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: CARD_GALLERY_IMAGE_IS_NOT_LOADING });
        dispatch({type: GALLERY_IMAGE_DELETED_UNSUCCESSFULLY});
      });
  };
};

export const setCardPath = (pathToCard) => {
  return {
    type: SET_CARD_PATH,
    pathToCard: pathToCard,
  };
};
