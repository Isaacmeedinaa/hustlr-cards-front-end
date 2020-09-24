import { combineReducers } from "redux";

import errors from "./errors";
import loginLoader from "./loaders/loginLoader";
import registerLoader from "./loaders/registerLoader";
import user from "./user";
import industriesLoader from "./loaders/industriesLoader";
import industries from "./industries";
import themes from "./themes";
import cardLoader from "./loaders/cardLoader";
import cardImageLoader from "./loaders/cardImageLoader";
import cardUpdatingLoader from "./loaders/cardUpdatingLoader";
import cardErrors from "./errors/cardErrors";
import card from "./card";
import publicCard from "./publicCard";

const rootReducer = combineReducers({
  errors,
  loginLoader,
  registerLoader,
  user,
  industriesLoader,
  industries,
  themes,
  cardLoader,
  cardImageLoader,
  cardUpdatingLoader,
  cardErrors,
  card,
  publicCard,
});

export default rootReducer;
