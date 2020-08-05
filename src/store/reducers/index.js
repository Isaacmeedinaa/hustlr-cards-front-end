import { combineReducers } from "redux";

import loader from "./loader";
import user from "./user";
import card from "./card";
import publicCard from "./publicCard";

const rootReducer = combineReducers({
  loader,
  user,
  card,
  publicCard,
});

export default rootReducer;
