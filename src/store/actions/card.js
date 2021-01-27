import Card from "../../models/card";
import {
  fetchGoogleLocationDetails,
  extractGoogleLocationDetails,
} from "../../services/GooglePlaces";
import { API_BASE_URL } from "../../constants/urls";

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
  OFFERING_DELETED_UNSUCCESSFULLY,
} from "./notifications/offeringNotifications";
import {
  // OFFERING_IMAGE_UPLOADED_SUCCESSFULLY,
  OFFERING_IMAGE_UPLOADED_UNSUCCESSFULLY,
  OFFERING_IMAGE_DELETED_SUCCESSFULLY,
  OFFERING_IMAGE_DELETED_UNSUCCESSFULLY,
} from "./notifications/offeringImageNotifications";
import {
  // GALLERY_IMAGE_UPLOADED_SUCCESSFULLY,
  GALLERY_IMAGE_UPLOADED_UNSUCCESSFULLY,
  GALLERY_IMAGE_DELETED_SUCCESSFULLY,
  GALLERY_IMAGE_DELETED_UNSUCCESSFULLY,
} from "./notifications/galleryNotifications";
import {
  PROFILE_IMAGE_UPLOADED_SUCCESSFULLY,
  PROFILE_IMAGE_UPLOADED_UNSUCCESSFULLY,
  PROFILE_IMAGE_DELETED_SUCCESSFULLY,
  PROFILE_IMAGE_DELETED_UNSUCCESSFULLY,
} from "./notifications/profileImageNotifications";
import {
  BACKDROP_IMAGE_UPLOADED_SUCCESSFULLY,
  BACKDROP_IMAGE_UPLOADED_UNSUCCESSFULLY,
  BACKDROP_IMAGE_DELETED_SUCCESSFULLY,
  BACKDROP_IMAGE_DELETED_UNSUCCESSFULLY,
} from "./notifications/backdropImageNotifications";
import {
  CARD_BACKDROP_IMAGE_IS_UPLOADING,
  CARD_BACKDROP_IMAGE_IS_NOT_UPLOADING,
} from "./loaders/cardBackdropImageLoader";
import {
  CARD_IMAGE_IS_UPLOADING,
  CARD_IMAGE_IS_NOT_UPLOADING,
} from "./loaders/cardImageLoader";
import {
  CARD_GALLERY_IMAGE_IS_LOADING,
  CARD_GALLERY_IMAGE_IS_NOT_LOADING,
} from "./loaders/cardGalleryImageLoader";
import {
  OFFERING_IMAGE_IS_LOADING,
  OFFERING_IMAGE_IS_NOT_LOADING,
} from "./loaders/offeringImageLoader";
import {
  OFFERING_IS_CREATING_LOADER,
  OFFERING_IS_NOT_CREATING_LOADER,
  OFFERING_IS_UPDATING_LOADER,
  OFFERING_IS_NOT_UPDATING_LOADER,
  OFFERING_IS_DELETING_LOADER,
  OFFERING_IS_NOT_DELETING_LOADER,
} from "./loaders/offeringLoader";

import {
  LINK_IS_CREATING_LOADER,
  LINK_IS_NOT_CREATING_LOADER,
  LINK_IS_DELETING_LOADER,
  LINK_IS_NOT_DELETING_LOADER,
  LINK_IS_UPDATING_LOADER,
  LINK_IS_NOT_UPDATING_LOADER,
} from "./loaders/socialMediaLinkLoaders";

import {
  LINK_CREATED_SUCCESSFULLY,
  LINK_CREATED_UNSUCCESSFULLY,
  LINK_SAVED_SUCCESSFULLY,
  LINK_SAVED_UNSUCCESSFULLY,
  LINK_DELETED_SUCCESSFULLY,
  LINK_DELETED_UNSUCCESSFULLY,
} from "./notifications/socialMediaLinkNotifications";

import {
  PAYMENT_METHOD_IS_CREATING_LOADER,
  PAYMENT_METHOD_IS_NOT_CREATING_LOADER,
  PAYMENT_METHOD_IS_DELETING_LOADER,
  PAYMENT_METHOD_IS_NOT_DELETING_LOADER,
} from "./loaders/paymentMethodsLoader";

import {
  PAYMENT_METHOD_CREATED_SUCCESSFULLY,
  PAYMENT_METHOD_CREATED_UNSUCCESSFULLY,
  PAYMENT_METHOD_DELETED_SUCCESSFULLY,
  PAYMENT_METHOD_DELETED_UNSUCCESSFULLY,
} from "./notifications/paymentMethodsNotifications";

import { CARD_ERRORS, CARD_NO_ERRORS } from "./errors/cardErrors";
import { CARD_IS_SAVED, CARD_IS_NOT_SAVED } from "./cardSaved";
import CardLocation from "../../models/cardLocation";

import { openOfferingModal, closeOfferingModal } from "./modals/offeringModal";
import { TOGGLE_CARD_LINK_LOCAL_STORAGE } from "./localStorage/cardLinkLocalStorage";
import { TOGGLE_OFFERING_LOCAL_STORAGE } from "./localStorage/offeringLocalStorage";
import {
  GALLERY_IMAGES_ARE_PROGRESSING,
  GALLERY_IMAGES_ARE_NOT_PROGRESSING,
} from "./progress/galleryImagesProgress";
import {
  OFFERING_IMAGES_ARE_PROGRESSING,
  OFFERING_IMAGES_ARE_NOT_PROGRESSING,
} from "./progress/offeringImagesProgress";

export const FETCH_CARD = "FETCH_CARD";
export const SET_CARD = "SET_CARD";
export const SET_CARD_THEME_ID = "SET_CARD_THEME_ID";
export const SET_CARD_PUBLIC = "SET_CARD_PUBLIC";
export const SET_CARD_NOT_PUBLIC = "SET_CARD_NOT_PUBLIC";
export const UPLOAD_BACKDROP_IMAGE = "UPLOAD_BACKDROP_IMAGE";
export const DELETE_BACKDROP_IMAGE = "DELETE_BACKDROP_IMAGE";
export const UPLOAD_BUSINESS_PROFILE_PICTURE =
  "UPLOAD_BUSINESS_PROFILE_PICTURE";
export const DELETE_BUSINESS_PROFILE_PICTURE =
  "DELETE_BUSINESS_PROFILE_PICTURE";
export const SET_CARD_TITLE = "SET_CARD_TITLE";
export const SET_CARD_LOCATION = "SET_CARD_LOCATION";
export const SET_FULL_CARD_LOCATION = "SET_FULL_CARD_LOCATION";
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
export const UPLOAD_OFFERING_PICTURE = "UPLOAD_OFFERING_PICTURE";
export const DELETE_OFFERING_PICTURE = "DELETE_OFFERING_PICTURE";
export const SET_CARD_PATH = "SET_CARD_PATH";
export const CREATE_LINK = "CREATE_LINK";
export const DELETE_LINK = "DELETE_LINK";
export const SET_LINK = "SET_LINK";
export const SET_MULTIPLE_LINKS = "SET_MULTIPLE_LINKS";
export const CREATE_PAYMENT_METHOD = "CREATE_PAYMENT_METHOD";
export const DELETE_PAYMENT_METHOD = "DELETE_PAYMENT_METHOD";

export const fetchCard = (userId) => {
  return async (dispatch, getState) => {
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
          card.location,
          card.email,
          card.phoneNumber,
          card.imgUrl,
          card.imgId,
          card.backdropImgUrl,
          card.backdropImgId,
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
          card.offerings,
          card.links,
          card.paymentMethods
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
  return async (dispatch, getState) => {
    const { cardData } = getState().card;
    const localStorageCard = JSON.parse(localStorage.getItem("card"));

    // The location description is stored in the redux state. Let's get the description from there and fill it in with the details from the google api
    let updatedLocation = cardData.location;

    let didNotHaveALocationSaved = !localStorageCard.location; // the local storage card location will be null if the card does not have a location yet.
    let hasNotSetLocation = !cardData.location; // the redux location will be null if a location has never been saved and the user still hasn't selected one
    let reduxStateContainsGooglePlaceId = cardData.location?.googlePlaceId; // This shows that a user has selected a new location
    let isCreatingLocationForFirstTime =
      didNotHaveALocationSaved && reduxStateContainsGooglePlaceId;

    let hasChangedLocation =
      cardData.location?.googlePlaceId !==
      localStorageCard.location?.googlePlaceId; // This will be true if the user selects a new location or clears an existing one

    // Cannot save the card unless there is a location. So set one if the user has not ever created one and is trying to save without it.
    if (didNotHaveALocationSaved && hasNotSetLocation) {
      updatedLocation = new CardLocation(); // updatedLocation === null so need to add the missing properties
      updatedLocation.cardId = cardData.id;
    }

    // Need these two cases because cannot check just 'hasChangedLocation' since it requires there to have been a location previously saved
    if (isCreatingLocationForFirstTime || hasChangedLocation) {
      // When the location is cleared, only the description is cleared. We must clear the other fields but preserve the id and cardId fields
      if (cardData.location.googlePlaceId.length === 0) {
        let locationId = cardData.location.id;
        let cardId = cardData.location.cardId;
        updatedLocation = new CardLocation();
        updatedLocation.id = locationId;
        updatedLocation.cardId = cardId;
      } else {
        const googleLocationDetails = await fetchGoogleLocationDetails(
          cardData.location.googlePlaceId
        );
        updatedLocation = extractGoogleLocationDetails(
          googleLocationDetails,
          updatedLocation,
          cardData.location.googlePlaceId
        );
      }
    }

    const updateCardData = {
      id: cardData.id,
      title: cardData.title,
      description: cardData.description,
      location: updatedLocation,
      email: cardData.email,
      phoneNumber: cardData.phoneNumber,
      imgUrl: cardData.imgUrl,
      imgId: cardData.imgId,
      backdropImgUrl: cardData.backdropImgUrl,
      backdropImgId: cardData.backdropImgId,
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
      body: JSON.stringify(updateCardData),
    };

    fetch(`${API_BASE_URL}/cards/${cardId}`, reqObj)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (!data) {
          return;
        }
        if (data.errors) {
          dispatch({ type: CARD_ERRORS, errors: data.errors });
          dispatch({ type: CARD_IS_NOT_UPDATING });
          dispatch({ type: CARD_SAVE_UNSUCCESSFUL });
          dispatch({ type: CARD_IS_NOT_SAVED });
          return;
        }
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(data));

        // Set the redux state when we create a location for the first time
        if (didNotHaveALocationSaved) {
          dispatch(setFullCardLocation(data.location));
        }

        dispatch({ type: CARD_SAVED_SUCCESSFULLY });
        dispatch({ type: CARD_IS_SAVED });
        dispatch({ type: CARD_NO_ERRORS });
        dispatch({ type: CARD_IS_NOT_UPDATING });
      })
      .catch((err) => {
        dispatch({ type: CARD_IS_NOT_UPDATING });
        dispatch({ type: CARD_SAVE_UNSUCCESSFUL });
        dispatch({ type: CARD_IS_NOT_SAVED });
        console.log(err);
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

export const uploadBackdropImage = (reqImgData, cardId) => {
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

    dispatch({ type: CARD_BACKDROP_IMAGE_IS_UPLOADING });
    fetch(`${API_BASE_URL}/photos/backdrop`, reqObj)
      .then((resp) => {
        console.log(resp);
        if (!resp.ok) {
          dispatch({ type: CARD_BACKDROP_IMAGE_IS_NOT_UPLOADING });
          resp.json().then((error) => {
            dispatch({ type: CARD_ERRORS, errors: [error] });
            dispatch({ type: BACKDROP_IMAGE_UPLOADED_UNSUCCESSFULLY });
          });
          return;
        }
        return resp.json();
      })
      .then((data) => {
        if (!data) {
          return;
        }
        dispatch({ type: CARD_NO_ERRORS });
        dispatch({
          type: UPLOAD_BACKDROP_IMAGE,
          backdropImgUrl: data.url,
          backdropImgId: data.id,
        });
        dispatch({ type: CARD_BACKDROP_IMAGE_IS_NOT_UPLOADING });
        dispatch({ type: BACKDROP_IMAGE_UPLOADED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: BACKDROP_IMAGE_UPLOADED_UNSUCCESSFULLY });
        console.log(err);
      });
  };
};

export const deleteBackdropImage = (imgId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
        Accepts: "application/json",
      },
    };

    dispatch({ type: CARD_BACKDROP_IMAGE_IS_UPLOADING });
    fetch(`${API_BASE_URL}/photos/${imgId}`, reqObj)
      .then((resp) => {
        if (resp.ok) {
          dispatch({ type: DELETE_BACKDROP_IMAGE });
          dispatch({ type: CARD_BACKDROP_IMAGE_IS_NOT_UPLOADING });
          dispatch({ type: BACKDROP_IMAGE_DELETED_SUCCESSFULLY });
        }
      })
      .catch((err) => {
        dispatch({ type: BACKDROP_IMAGE_DELETED_UNSUCCESSFULLY });
        console.log(err);
      });
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
          resp.json().then((error) => {
            dispatch({ type: CARD_ERRORS, errors: [error] });
            dispatch({ type: PROFILE_IMAGE_UPLOADED_UNSUCCESSFULLY });
          });
          return;
        }
        return resp.json();
      })
      .then((data) => {
        if (!data) {
          return;
        }
        dispatch({ type: CARD_NO_ERRORS });
        dispatch({
          type: UPLOAD_BUSINESS_PROFILE_PICTURE,
          imgUrl: data.url,
          imgId: data.id,
        });
        dispatch({ type: CARD_IMAGE_IS_NOT_UPLOADING });
        dispatch({ type: PROFILE_IMAGE_UPLOADED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_IMAGE_UPLOADED_UNSUCCESSFULLY });
        console.log(err);
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
          dispatch({ type: PROFILE_IMAGE_DELETED_SUCCESSFULLY });
        }
      })
      .catch((err) => {
        dispatch({ type: PROFILE_IMAGE_DELETED_UNSUCCESSFULLY });
        console.log(err);
      });
  };
};

export const setCardTitle = (title) => {
  return {
    type: SET_CARD_TITLE,
    title: title,
  };
};

export const setCardLocation = (description, googlePlaceId) => {
  return {
    type: SET_CARD_LOCATION,
    description: description,
    googlePlaceId: googlePlaceId,
  };
};

export const setFullCardLocation = (location) => {
  return {
    type: SET_FULL_CARD_LOCATION,
    location: location,
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

export const setCardOfferingDescription = (
  offeringIndex,
  offeringDescription
) => {
  return {
    type: SET_CARD_OFFERING_DESCRIPTION,
    offeringIndex: offeringIndex,
    offeringDescription: offeringDescription,
  };
};

export const createOffering = (cardId) => {
  return (dispatch) => {
    const offeringData = {
      title: "",
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

    dispatch({ type: OFFERING_IS_CREATING_LOADER });
    fetch(`${API_BASE_URL}/offerings`, reqObj)
      .then((resp) => resp.json())
      .then((offering) => {
        dispatch({ type: OFFERING_IS_NOT_CREATING_LOADER });
        // MUST add new offering to local storage card offerings array
        const localStorageCard = JSON.parse(localStorage.getItem("card"));
        localStorageCard.offerings.push(offering);
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(localStorageCard));

        dispatch({ type: CREATE_OFFERING, offering: offering });
        dispatch({ type: OFFERING_CREATED_SUCCESSFULLY });
        dispatch(
          openOfferingModal(offering, localStorageCard.offerings.length - 1)
        );
      })
      .catch((err) => {
        dispatch({ type: OFFERING_IS_NOT_CREATING_LOADER });
        dispatch({ type: OFFERING_CREATED_UNSUCCESSFULLY });
        console.log(err);
      });
  };
};

export const updateOffering = (
  id,
  title,
  price,
  description,
  cardId,
  index
) => {
  return (dispatch) => {
    const offeringData = {
      id: id,
      title: title,
      price: price,
      description: description,
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

    dispatch({ type: OFFERING_IS_UPDATING_LOADER });
    fetch(`${API_BASE_URL}/offerings/${id}`, reqObj)
      .then((resp) => resp.json())
      .then((offering) => {
        const localStorageCard = JSON.parse(localStorage.getItem("card"));
        const localStorageCardOfferings = localStorageCard.offerings;
        localStorageCardOfferings[index] = offering;
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(localStorageCard));

        dispatch({ type: TOGGLE_OFFERING_LOCAL_STORAGE });

        dispatch({
          type: UPDATE_OFFERING,
          offering: offering,
          offeringIndex: index,
        });

        dispatch({ type: OFFERING_IS_NOT_UPDATING_LOADER });
        dispatch({ type: OFFERING_SAVED_SUCCESSFULLY });
        // dispatch(closeOfferingModal());
      })
      .catch((err) => {
        dispatch({ type: OFFERING_IS_NOT_UPDATING_LOADER });
        dispatch({ type: OFFERING_SAVED_UNSUCCESSFULLY });
      });
  };
};

export const deleteOffering = (id) => {
  return (dispatch) => {
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

    dispatch({ type: OFFERING_IS_DELETING_LOADER, offeringId: id });
    fetch(`${API_BASE_URL}/offerings/${id}`, reqObj)
      .then(() => {})
      .then(() => {
        dispatch({ type: OFFERING_IS_NOT_DELETING_LOADER });
        // MUST remove offering from local storage card offerings array
        const localStorageCard = JSON.parse(localStorage.getItem("card"));
        let newOfferings = localStorageCard.offerings.filter(
          (offering) => offering.id !== id
        );
        delete localStorageCard["offerings"];
        localStorageCard["offerings"] = newOfferings;
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(localStorageCard));

        dispatch({ type: DELETE_OFFERING, id: id });
        dispatch({ type: OFFERING_DELETED_SUCCESSFULLY });
        dispatch(closeOfferingModal());
      })
      .catch((err) => {
        dispatch({ type: OFFERING_IS_NOT_DELETING_LOADER });
        dispatch({ type: OFFERING_DELETED_UNSUCCESSFULLY });
        console.log(err);
      });
  };
};

export const createLink = (linkTypeId) => {
  return (dispatch, getState) => {
    const { card } = getState();

    const linkData = {
      id: 0,
      url: "",
      title: "",
      typeId: linkTypeId,
      cardId: card.cardData.id,
    };

    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(linkData),
    };

    dispatch({ type: LINK_IS_CREATING_LOADER });
    fetch(`${API_BASE_URL}/links`, reqObj)
      .then((resp) => resp.json())
      .then((cardLink) => {
        dispatch({ type: LINK_IS_NOT_CREATING_LOADER });

        const localStorageCard = JSON.parse(localStorage.getItem("card"));
        localStorageCard.links.push(cardLink);
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(localStorageCard));

        dispatch({ type: CREATE_LINK, link: cardLink });
        dispatch({ type: LINK_CREATED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: LINK_IS_NOT_CREATING_LOADER });
        dispatch({ type: LINK_CREATED_UNSUCCESSFULLY });
        console.log(err);
      });
  };
};

// export const updateLinks = () => {
//   return (dispatch, getState) => {
//     const { card } = getState();

//     const linkData = [ ...card.cardData.links ];

//     const userToken = localStorage.getItem("userToken");

//     const reqObj = {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${userToken}`,
//         "Content-Type": "application/json",
//         Accepts: "application/json",
//       },
//       body: JSON.stringify(linkData),
//     };

//     dispatch({ type: LINK_IS_UPDATING_LOADER });
//     fetch(`${API_BASE_URL}/links`, reqObj)
//       .then((resp) => resp.json())
//       .then((cardLinks) => {
//         dispatch({ type: LINK_IS_NOT_UPDATING_LOADER });

//         const localStorageCard = JSON.parse(localStorage.getItem("card"));
//         localStorageCard.links = cardLinks;
//         localStorage.removeItem("card");
//         localStorage.setItem("card", JSON.stringify(localStorageCard));

//         dispatch({ type: SET_MULTIPLE_LINKS, links: cardLinks });
//         dispatch({ type: LINK_SAVED_SUCCESSFULLY });

//       })
//       .catch((err) => {
//         dispatch({ type: LINK_IS_NOT_UPDATING_LOADER });
//         dispatch({ type: LINK_SAVED_UNSUCCESSFULLY });
//         console.log(err);
//       });
//   };
// };

export const updateLink = (link) => {
  return (dispatch, getState) => {
    const { card } = getState();

    const linkData = {
      id: link.id,
      url: link.url,
      title: link.title,
      typeId: link.type.id,
      cardId: card.cardData.id,
    };

    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(linkData),
    };

    dispatch({ type: LINK_IS_UPDATING_LOADER, linkId: link.id });
    fetch(`${API_BASE_URL}/links/${link.id}`, reqObj)
      .then((resp) => resp.json())
      .then((cardLink) => {
        dispatch({ type: LINK_IS_NOT_UPDATING_LOADER, linkId: link.id });

        const localStorageCard = JSON.parse(localStorage.getItem("card"));
        const localStorageCardLinks = localStorageCard.links;
        const idx = localStorageCardLinks.findIndex(
          (currLink) => currLink.id === link.id
        );
        localStorageCardLinks[idx] = cardLink;
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(localStorageCard));

        dispatch({ type: TOGGLE_CARD_LINK_LOCAL_STORAGE });

        dispatch({ type: SET_LINK, link: cardLink });
        dispatch({ type: LINK_SAVED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: LINK_IS_NOT_UPDATING_LOADER, linkId: link.id });
        dispatch({ type: LINK_SAVED_UNSUCCESSFULLY });
        console.log(err);
      });
  };
};

export const setLink = (link) => {
  return {
    type: SET_LINK,
    link: link,
  };
};

export const deleteLink = (id) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    };

    dispatch({ type: LINK_IS_DELETING_LOADER, linkId: id });
    fetch(`${API_BASE_URL}/links/${id}`, reqObj)
      .then(() => {})
      .then(() => {
        dispatch({ type: LINK_IS_NOT_DELETING_LOADER });
        // MUST remove offering from local storage card offerings array
        const localStorageCard = JSON.parse(localStorage.getItem("card"));
        let newLinks = localStorageCard.links.filter((link) => link.id !== id);
        delete localStorageCard["links"];
        localStorageCard["links"] = newLinks;
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(localStorageCard));

        dispatch({ type: DELETE_LINK, id: id });
        dispatch({ type: LINK_DELETED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: LINK_IS_NOT_DELETING_LOADER });
        dispatch({ type: LINK_DELETED_UNSUCCESSFULLY });
        console.log(err);
      });
  };
};

export const createPaymentMethod = (paymentMethodTypeId) => {
  return (dispatch, getState) => {
    const { card } = getState();

    const paymentMethodData = {
      paymentMethodTypeId: paymentMethodTypeId,
      cardId: card.cardData.id,
    };

    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(paymentMethodData),
    };

    dispatch({ type: PAYMENT_METHOD_IS_CREATING_LOADER });
    fetch(`${API_BASE_URL}/paymentmethods`, reqObj)
      .then((resp) => resp.json())
      .then((paymentMethod) => {
        dispatch({ type: PAYMENT_METHOD_IS_NOT_CREATING_LOADER });

        const localStorageCard = JSON.parse(localStorage.getItem("card"));
        localStorageCard.paymentMethods.push(paymentMethod);
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(localStorageCard));

        dispatch({ type: CREATE_PAYMENT_METHOD, paymentMethod: paymentMethod });
        dispatch({ type: PAYMENT_METHOD_CREATED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: PAYMENT_METHOD_IS_NOT_CREATING_LOADER });
        dispatch({ type: PAYMENT_METHOD_CREATED_UNSUCCESSFULLY });
        console.log(err);
      });
  };
};

export const deletePaymentMethod = (id) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    };

    dispatch({ type: PAYMENT_METHOD_IS_DELETING_LOADER, paymentMethodId: id });
    fetch(`${API_BASE_URL}/paymentmethods/${id}`, reqObj)
      .then(() => {})
      .then(() => {
        dispatch({ type: PAYMENT_METHOD_IS_NOT_DELETING_LOADER });
        // MUST remove payment method from local storage card offerings array
        const localStorageCard = JSON.parse(localStorage.getItem("card"));
        let newPaymentMethods = localStorageCard.paymentMethods.filter((paymentMethod) => paymentMethod.id !== id);
        delete localStorageCard["paymentMethods"];
        localStorageCard["paymentMethods"] = newPaymentMethods;
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(localStorageCard));

        dispatch({ type: DELETE_PAYMENT_METHOD, id: id });
        dispatch({ type: PAYMENT_METHOD_DELETED_SUCCESSFULLY });
      })
      .catch((err) => {
        dispatch({ type: PAYMENT_METHOD_IS_NOT_DELETING_LOADER });
        dispatch({ type: PAYMENT_METHOD_DELETED_UNSUCCESSFULLY });
        console.log(err);
      });
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

export const uploadGalleryImages = (images, cardId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");
    let imagesArrLength = images.length;
    let counter = 0;

    Array.from(images).forEach((image) => {
      const body = new FormData();
      body.append("CardId", cardId);
      body.append("File", image);

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
        .then((resp) => {
          if (!resp.ok) {
            resp.json().then((error) => {
              dispatch({ type: GALLERY_IMAGES_ARE_NOT_PROGRESSING });
              dispatch({ type: CARD_GALLERY_IMAGE_IS_NOT_LOADING });
              dispatch({ type: CARD_ERRORS, errors: [error] });
              dispatch({ type: GALLERY_IMAGE_UPLOADED_UNSUCCESSFULLY });
            });
            return;
          }
          return resp.json();
        })
        .then((data) => {
          if (!data) {
            return;
          }

          dispatch({ type: CARD_NO_ERRORS });
          dispatch({ type: UPLOAD_CARD_GALLERY_PICTURE, photo: data });
          dispatch({ type: CARD_GALLERY_IMAGE_IS_NOT_LOADING });

          counter++;
          dispatch({
            type: GALLERY_IMAGES_ARE_PROGRESSING,
            currentGalleryImgCount: counter,
            totalGalleryImgCount: imagesArrLength,
          });

          if (counter === imagesArrLength) {
            setTimeout(() => {
              dispatch({ type: GALLERY_IMAGES_ARE_NOT_PROGRESSING });
            }, 1200);
          }
          // dispatch({ type: GALLERY_IMAGE_UPLOADED_SUCCESSFULLY });
        })
        .catch((err) => {
          dispatch({ type: GALLERY_IMAGES_ARE_NOT_PROGRESSING });
          dispatch({ type: CARD_GALLERY_IMAGE_IS_NOT_LOADING });
          dispatch({ type: GALLERY_IMAGE_UPLOADED_UNSUCCESSFULLY });
        });
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
        dispatch({ type: GALLERY_IMAGE_DELETED_SUCCESSFULLY });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: CARD_GALLERY_IMAGE_IS_NOT_LOADING });
        dispatch({ type: GALLERY_IMAGE_DELETED_UNSUCCESSFULLY });
      });
  };
};

export const uploadOfferingImages = (images, offeringId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");
    let imagesArrLength = images.length;
    let counter = 0;

    Array.from(images).forEach((image) => {
      const body = new FormData();
      body.append("OfferingId", offeringId);
      body.append("File", image);

      const reqObj = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          Accepts: "application/json",
        },
        body: body,
      };

      dispatch({ type: OFFERING_IMAGE_IS_LOADING, offeringId: offeringId });
      fetch(`${API_BASE_URL}/photos/offering`, reqObj)
        .then((resp) => {
          dispatch({ type: OFFERING_IMAGE_IS_NOT_LOADING });
          if (!resp.ok) {
            resp.json().then((error) => {
              dispatch({ type: CARD_ERRORS, errors: [error] });
              dispatch({ type: OFFERING_IMAGE_UPLOADED_UNSUCCESSFULLY });
            });
            return;
          }
          // dispatch({ type: OFFERING_IMAGE_UPLOADED_SUCCESSFULLY });
          return resp.json();
        })
        .then((data) => {
          if (!data) {
            return;
          }

          dispatch({ type: CARD_NO_ERRORS });
          dispatch({
            type: UPLOAD_OFFERING_PICTURE,
            photo: data,
            offeringId: offeringId,
          });

          counter++;
          dispatch({
            type: OFFERING_IMAGES_ARE_PROGRESSING,
            currentOfferingImgCount: counter,
            totalOfferingImgCount: imagesArrLength,
          });

          if (counter === imagesArrLength) {
            setTimeout(() => {
              dispatch({ type: OFFERING_IMAGES_ARE_NOT_PROGRESSING });
            }, 1200);
          }
        })
        .catch((err) => {
          dispatch({ type: OFFERING_IMAGE_IS_NOT_LOADING });
          dispatch({ type: OFFERING_IMAGE_UPLOADED_UNSUCCESSFULLY });
        });
    });
  };
};

export const deleteOfferingImage = (photoId, offeringId) => {
  return (dispatch) => {
    const userToken = localStorage.getItem("userToken");

    const reqObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    dispatch({ type: OFFERING_IMAGE_IS_LOADING, offeringId: offeringId });
    fetch(`${API_BASE_URL}/photos/offering/${photoId}`, reqObj)
      .then((resp) => {
        dispatch({ type: OFFERING_IMAGE_IS_NOT_LOADING });
        if (resp.ok) {
          dispatch({
            type: DELETE_OFFERING_PICTURE,
            photoId: photoId,
            offeringId: offeringId,
          });
          dispatch({ type: OFFERING_IMAGE_DELETED_SUCCESSFULLY });
        } else {
          dispatch({ type: OFFERING_IMAGE_DELETED_UNSUCCESSFULLY });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: OFFERING_IMAGE_IS_NOT_LOADING });
        dispatch({ type: OFFERING_IMAGE_DELETED_UNSUCCESSFULLY });
      });
  };
};

export const setCardPath = (pathToCard) => {
  return {
    type: SET_CARD_PATH,
    pathToCard: pathToCard,
  };
};
