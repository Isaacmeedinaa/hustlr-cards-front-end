import Industry from "../../models/industry";
import { API_BASE_URL } from '../../constants/urls';

import {
  INDUSTRIES_ARE_LOADING,
  INDUSTRIES_ARE_NOT_LOADING,
} from "./loaders/industriesLoader";

export const SET_ORIGINAL_INDUSTRIES = "SET_ORIGINAL_INDUSTRIES";
export const SET_DROPDOWN_INDUSTRIES = "SET_DROPDOWN_INDUSTRIES";

export const fetchIndustries = () => {
  return (dispatch) => {
    dispatch({ type: INDUSTRIES_ARE_LOADING });
    fetch(`${API_BASE_URL}/industries`)
      .then((resp) => resp.json())
      .then((industries) => {
        const originalIndustries = [];

        for (const key in industries) {
          originalIndustries.push(
            new Industry(industries[key].id, industries[key].title, industries[key].icon)
          );
        }

        let dropdownIndustries = originalIndustries.map((industry) => ({
          value: industry.id,
          label: industry.title,
          icon: industry.icon
        }));

        dropdownIndustries.sort((a, b) =>  {
          if (a.value === null) {
            return -1
          }
          if (b.value === null) {
            return 1;
          }
          if ( a.label < b.label ){
            return -1;
          }
          if ( a.label > b.label ){
            return 1;
          }
          return 0;
        });

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
