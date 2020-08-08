import {
  SET_ORIGINAL_INDUSTRIES,
  SET_DROPDOWN_INDUSTRIES,
} from "../actions/industries";

const initialState = {
  originalIndustries: [],
  dropdownIndustries: [],
};

const industries = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORIGINAL_INDUSTRIES:
      return {
        ...state,
        originalIndustries: action.originalIndustries,
      };

    case SET_DROPDOWN_INDUSTRIES:
      return {
        ...state,
        dropdownIndustries: action.dropdownIndustries,
      };

    default:
      return state;
  }
};

export default industries;
