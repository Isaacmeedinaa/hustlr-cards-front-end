import { combineReducers } from "redux";

// Main
import user from "./user";
import industries from "./industries";
import themes from "./themes";
import card from "./card";
import cardSaved from "./cardSaved";
import publicCard from "./publicCard";
import auth from "./auth";
import emailVerification from "./emailVerification";

// Loaders
import loginLoader from "./loaders/loginLoader";
import registerLoader from "./loaders/registerLoader";
import industriesLoader from "./loaders/industriesLoader";
import cardLoader from "./loaders/cardLoader";
import publicCardLoader from "./loaders/publicCardLoader";
import cardBackdropImageLoader from "./loaders/cardBackdropImageLoader";
import cardImageLoader from "./loaders/cardImageLoader";
import cardGalleryImageLoader from "./loaders/cardGalleryImageLoader";
import offeringLoader from "./loaders/offeringLoader";
import offeringImageLoader from "./loaders/offeringImageLoader";
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
import offeringImageNotifications from "./notifications/offeringImageNotifications";
import galleryNotifications from "./notifications/galleryNotifications";
import profileImageNotifications from "./notifications/profileImageNotifications";
import userUpdatedNotifications from "./notifications/userUpdatedNotifications";
import backdropImageNotifications from "./notifications/backdropImageNotifications";

const rootReducer = combineReducers({
  // Main
  user,
  industries,
  themes,
  card,
  cardSaved,
  publicCard,
  auth,
  emailVerification,
  // Loaders
  loginLoader,
  registerLoader,
  industriesLoader,
  cardLoader,
  publicCardLoader,
  cardBackdropImageLoader,
  cardImageLoader,
  cardGalleryImageLoader,
  offeringLoader,
  offeringImageLoader,
  cardUpdatingLoader,
  userUpdatingLoader,
  changePasswordLoader,
  forgotPasswordLoader,
  changePasswordCodeLoader,
  // Errors
  errors,
  cardErrors,
  loginErrors,
  registerErrors,
  personalInfoErrors,
  changePasswordErrors,
  forgotPasswordErrors,
  changePasswordCodeErrors,
  // Notifications
  changePasswordNotifications,
  cardSavedNotification,
  offeringNotifications,
  offeringImageNotifications,
  galleryNotifications,
  profileImageNotifications,
  userUpdatedNotifications,
  backdropImageNotifications,
});

export default rootReducer;
