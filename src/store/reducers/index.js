import { combineReducers } from "redux";

import loader from "./loader";
import user from "./user";
import industries from "./industries";
import card from "./card";
import publicCard from "./publicCard";

const rootReducer = combineReducers({
  loader,
  user,
  industries,
  card,
  publicCard,
});

export default rootReducer;
