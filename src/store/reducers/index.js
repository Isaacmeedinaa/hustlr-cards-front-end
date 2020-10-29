import { combineReducers } from "redux";

import errors from "./errors";
import loginLoader from "./loaders/loginLoader";
import registerLoader from "./loaders/registerLoader";
import user from "./user";
import industriesLoader from "./loaders/industriesLoader";
import industries from "./industries";
import themes from "./themes";
import card from "./card";
import publicCard from "./publicCard";
import auth from "./auth";

// Loaders
import cardLoader from "./loaders/cardLoader";
import publicCardLoader from "./loaders/publicCardLoader";
import cardBackdropImageLoader from "./loaders/cardBackdropImageLoader";
import cardImageLoader from "./loaders/cardImageLoader";
import cardGalleryImageLoader from "./loaders/cardGalleryImageLoader";
import cardUpdatingLoader from "./loaders/cardUpdatingLoader";
import userUpdatingLoader from "./loaders/userUpdatingLoader";
import changePasswordLoader from "./loaders/changePasswordLoader";

// Errors
import cardErrors from "./errors/cardErrors";
import personalInfoErrors from "./errors/personalInfoErrors";
import changePasswordErrors from "./errors/changePasswordErrors";

// Notifications
import changePasswordNotifications from "./notifications/changePasswordNotifications";
import cardSavedNotification from "./notifications/cardSavedNotifications";
import offeringNotifications from "./notifications/offeringNotifications";
import galleryNotifications from "./notifications/galleryNotifications";
import profileImageNotifications from "./notifications/profileImageNotifications";
import userUpdatedNotifications from "./notifications/userUpdatedNotifications";
import backdropImageNotifications from "./notifications/backdropImageNotifications";

const rootReducer = combineReducers({
  errors,
  loginLoader,
  registerLoader,
  user,
  industriesLoader,
  industries,
  themes,
  cardLoader,
  cardBackdropImageLoader,
  cardImageLoader,
  cardGalleryImageLoader,
  cardUpdatingLoader,
  cardErrors,
  card,
  publicCard,
  cardSavedNotification,
  offeringNotifications,
  galleryNotifications,
  profileImageNotifications,
  userUpdatingLoader,
  userUpdatedNotifications,
  personalInfoErrors,
  changePasswordLoader,
  changePasswordErrors,
  changePasswordNotifications,
  auth,
  backdropImageNotifications,
  publicCardLoader,
});

export default rootReducer;
