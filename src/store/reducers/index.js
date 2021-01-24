import { combineReducers } from "redux";

// Main
import user from "./user";
import dropdowns from "./dropdowns";
import themes from "./themes";
import card from "./card";
import cardSaved from "./cardSaved";
import publicCard from "./publicCard";
import auth from "./auth";
import emailVerification from "./emailVerification";
import tabs from "./tabs";

// Loaders
import loginLoader from "./loaders/loginLoader";
import registerLoader from "./loaders/registerLoader";
import dropdownsLoader from "./loaders/dropdownsLoader";
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
import contactMessageLoader from "./loaders/contactMessageLoader";
import linkLoader from "./loaders/socialMediaLinkLoaders";

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
import linkNotifications from "./notifications/socialMediaLinkNotifications";
import contactMessageNotifications from "./notifications/contactMessageNotifications";

// Modals
import imageCropperModal from "./modals/imageCropperModal";
import backdropImageCropperModal from "./modals/backdropImageCropperModal";
import viewImagesModal from "./modals/viewImagesModal";
import socialMediaModal from "./modals/socialMediaModal";
import paymentMethodsModal from "./modals/paymentMethodsModal";
import offeringModal from "./modals/offeringModal";

const rootReducer = combineReducers({
  // Main
  user,
  dropdowns,
  themes,
  card,
  cardSaved,
  publicCard,
  auth,
  emailVerification,
  tabs,
  // Loaders
  loginLoader,
  registerLoader,
  dropdownsLoader,
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
  contactMessageLoader,
  linkLoader,
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
  contactMessageNotifications,
  linkNotifications,
  // Modals
  imageCropperModal,
  backdropImageCropperModal,
  viewImagesModal,
  socialMediaModal,
  paymentMethodsModal,
  offeringModal,
});

export default rootReducer;
