import { combineReducers } from "redux";
import loader from "./loader";
import user from "./user";
import publicCard from "./publicCard";

export default combineReducers({
  loader,
  user,
  publicCard,
});
