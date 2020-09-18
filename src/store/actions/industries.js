import Industry from "../../models/industry";

import {
  INDUSTRIES_ARE_LOADING,
  INDUSTRIES_ARE_NOT_LOADING,
} from "./loaders/industriesLoader";

export const SET_ORIGINAL_INDUSTRIES = "SET_ORIGINAL_INDUSTRIES";
export const SET_DROPDOWN_INDUSTRIES = "SET_DROPDOWN_INDUSTRIES";

export const fetchIndustries = () => {
  return (dispatch) => {
    dispatch({ type: INDUSTRIES_ARE_LOADING });
    fetch("http://localhost:5000/api/v1/industries")
      .then((resp) => resp.json())
      .then((industries) => {
        const originalIndustries = [];
        const firstOption = new Industry(null, "Select Industry");

        originalIndustries.push(firstOption);

        for (const key in industries) {
          originalIndustries.push(
            new Industry(industries[key].id, industries[key].title)
          );
        }

        const dropdownIndustries = originalIndustries.map((industry) => ({
          value: industry.id,
          label: industry.title,
        }));

        dispatch({
          type: SET_ORIGINAL_INDUSTRIES,
          originalIndustries: originalIndustries,
        });
        dispatch({
          type: SET_DROPDOWN_INDUSTRIES,
          dropdownIndustries: dropdownIndustries,
        });
        dispatch({ type: INDUSTRIES_ARE_NOT_LOADING });
      });
  };
};
