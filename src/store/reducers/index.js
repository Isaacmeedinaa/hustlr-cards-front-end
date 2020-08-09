import { combineReducers } from "redux";

import loader from "./loader";
import user from "./user";
import industries from "./industries";
import themes from "./themes";
import card from "./card";
import themePicker from "./themePicker";
import publicCard from "./publicCard";

const rootReducer = combineReducers({
  loader,
  user,
  industries,
  themes,
  card,
  themePicker,
  publicCard,
});

export default rootReducer;
