import {
  SET_ORIGINAL_DROPDOWN_DATA,
  SET_DROPDOWNS,
} from "../actions/dropdowns";

const initialState = {
  originalIndustries: [],
  originalLinkTypes: [],
  originalPaymentTypes: [],
  dropdownLinkTypes: [],
  dropdownIndustries: [],
  dropdownPaymentTypes: [],
};

const dropdowns = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORIGINAL_DROPDOWN_DATA:
      return {
        ...state,
        originalIndustries: action.originalIndustries,
        originalLinkTypes: action.originalLinkTypes,
        originalPaymentTypes: action.originalPaymentTypes,
      };

    case SET_DROPDOWNS:
      return {
        ...state,
        dropdownIndustries: action.dropdownIndustries,
        dropdownLinkTypes: action.dropdownLinkTypes,
        dropdownPaymentTypes: action.dropdownPaymentTypes,
      };

    default:
      return state;
  }
};

export default dropdowns;
