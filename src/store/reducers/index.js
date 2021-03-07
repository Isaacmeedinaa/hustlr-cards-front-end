import { combineReducers } from "redux";

// Main
import user from "./user";
import dropdowns from "./dropdowns";
import themes from "./themes";
import card from "./card";
import cardSaved from "./cardSaved";
import publicCard from "./hustlrCard/publicCard";
import auth from "./auth";
import emailVerification from "./emailVerification";
import tabs from "./tabs/tabs"
import reviewsTabs from "./tabs/reviewsTabs";
import hustlrCardReviews from "./hustlrCard/hustlrCardReviews";

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
import paymentMethodsLoader from "./loaders/paymentMethodsLoader";
import reviewLoader from "./loaders/reviewLoader";
import hustlrCardReviewLoader from "./loaders/hustlrCardReviewLoader";
import accountUpgradingLoader from "./loaders/accountUpgradingLoader";

// Auth Errors
import hustlrCardReviewAuthError from "./authErrors/hustlrCardReviewAuthError";
import loginAuthError from "./authErrors/loginAuthError";
import registerAuthError from "./authErrors/registerAuthError";
import forgotPasswordAuthError from "./authErrors/forgotPasswordAuthError";
import changePasswordCodeAuthError from "./authErrors/changePasswordCodeAuthError";
import updateUserAuthError from "./authErrors/updateUserAuthError";
import changePasswordAuthError from "./authErrors/changePasswordAuthError";
import cardAuthError from "./authErrors/cardAuthError";
import offeringAuthError from "./authErrors/offeringAuthError";

// Validation Errors
import loginValidationErrors from "./validationErrors/loginValidationErrors";
import registerValidationErrors from "./validationErrors/registerValidationErrors";
import forgotPasswordValidationErrors from "./validationErrors/forgotPasswordValidationErrors";
import changePasswordCodeValidationErrors from "./validationErrors/changePasswordCodeValidationErrors";
import updateUserValidationErrors from "./validationErrors/updateUserValidationErrors";
import changePasswordValidationErrors from "./validationErrors/changePasswordValidationErrors";
import cardValidationErrors from "./validationErrors/cardValidationErrors";
import offeringValidationErrors from "./validationErrors/offeringValidationErrors";

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
import paymentMethodsNotifications from "./notifications/paymentMethodNotifications";
import hustlrCardReviewNotifications from "./notifications/hustlrCardReviewNotifications";
import accountUpgradedNotifications from "./notifications/accountUpgradedNotifications";

// Modals
import imageCropperModal from "./modals/imageCropperModal";
import backdropImageCropperModal from "./modals/backdropImageCropperModal";
import viewImagesModal from "./modals/viewImagesModal";
import socialMediaModal from "./modals/socialMediaModal";
import paymentMethodsModal from "./modals/paymentMethodsModal";
import offeringModal from "./modals/offeringModal";
import authModal from "./modals/authModal";
import hustlrCardReviewModal from "./modals/hustlrCardReviewModal";

// Local Storage
import cardLinkLocalStorage from "./localStorage/cardLinkLocalStorage";
import offeringLocalStorage from "./localStorage/offeringLocalStorage";

// Progress
import galleryImagesProgress from "./progress/galleryImagesProgress";
import offeringImagesProgress from "./progress/offeringImagesProgress";

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
  reviewsTabs,
  hustlrCardReviews,
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
  paymentMethodsLoader,
  reviewLoader,
  hustlrCardReviewLoader,
  accountUpgradingLoader,
  // Auth Errors
  hustlrCardReviewAuthError,
  loginAuthError,
  registerAuthError,
  forgotPasswordAuthError,
  changePasswordCodeAuthError,
  updateUserAuthError,
  changePasswordAuthError,
  cardAuthError,
  offeringAuthError,
  // Validation Errors
  loginValidationErrors,
  registerValidationErrors,
  forgotPasswordValidationErrors,
  changePasswordCodeValidationErrors,
  updateUserValidationErrors,
  changePasswordValidationErrors,
  cardValidationErrors,
  offeringValidationErrors,
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
  paymentMethodsNotifications,
  hustlrCardReviewNotifications,
  accountUpgradedNotifications,
  // Modals
  imageCropperModal,
  backdropImageCropperModal,
  viewImagesModal,
  socialMediaModal,
  paymentMethodsModal,
  offeringModal,
  authModal,
  hustlrCardReviewModal,
  // Local Storage
  cardLinkLocalStorage,
  offeringLocalStorage,
  // Progress
  galleryImagesProgress,
  offeringImagesProgress,
});

export default rootReducer;
