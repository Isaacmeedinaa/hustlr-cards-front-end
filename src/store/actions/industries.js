import Industry from "../../models/industry";

import { IS_LOADING, IS_NOT_LOADING } from "./loader";

export const SET_INDUSTRIES = "SET_INDUSTRIES";

export const fetchIndustries = () => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING });
    fetch("http://localhost:4000/industries")
      .then((resp) => resp.json())
      .then((industries) => {
        const loadedIndustries = [];

        for (const key in industries) {
          loadedIndustries.push(
            new Industry(industries[key].id, industries[key].name)
          );
        }

        dispatch({ type: SET_INDUSTRIES, industries: loadedIndustries });
        dispatch({ type: IS_NOT_LOADING });
      });
  };
};
