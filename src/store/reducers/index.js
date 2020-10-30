import { combineReducers } from "redux";

import user from "./user";
import industries from "./industries";
import themes from "./themes";
import card from "./card";
import publicCard from "./publicCard";
import auth from "./auth";

// Loaders
import loginLoader from "./loaders/loginLoader";
import registerLoader from "./loaders/registerLoader";
import industriesLoader from "./loaders/industriesLoader";
import cardLoader from "./loaders/cardLoader";
import publicCardLoader from "./loaders/publicCardLoader";
import cardBackdropImageLoader from "./loaders/cardBackdropImageLoader";
import cardImageLoader from "./loaders/cardImageLoader";
import cardGalleryImageLoader from "./loaders/cardGalleryImageLoader";
import cardUpdatingLoader from "./loaders/cardUpdatingLoader";
import userUpdatingLoader from "./loaders/userUpdatingLoader";
import changePasswordLoader from "./loaders/changePasswordLoader";
import forgotPasswordLoader from "./loaders/forgotPasswordLoader";
import changePasswordCodeLoader from "./loaders/changePasswordCodeLoader";

// Errors
import errors from "./errors";
import cardErrors from "./errors/cardErrors";
import loginErrors from "./errors/loginErrors";
import registerErrors from "./errors/registerErrors";
import personalInfoErrors from "./errors/personalInfoErrors";
import changePasswordErrors from "./errors/changePasswordErrors";
import forgotPasswordErrors from "./errors/forgotPasswordErrors";
import changePasswordCodeErrors from "./errors/changePasswordCodeErrors";

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
  forgotPasswordErrors,
  changePasswordCodeErrors,
  forgotPasswordLoader,
  changePasswordCodeLoader,
  loginErrors,
  registerErrors,
});

export default rootReducer;
