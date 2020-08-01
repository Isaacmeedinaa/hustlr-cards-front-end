import { combineReducers } from "redux";
import user from "./user";
import loader from "./loader";

export default combineReducers({
  user,
  loader,
});
