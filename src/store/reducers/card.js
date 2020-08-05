import { SET_CARD } from "../actions/card";

const initialState = {
  id: null,
  businessName: "",
  businessIndustry: "",
  businessServices: "",
  businessPhoneNumber: "",
  businessEmail: "",
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD:
      return {
        id: action.card.id,
        businessName: action.card.businessName,
        businessIndustry: action.card.businessIndustry,
        businessServices: action.card.businessServices,
        businessPhoneNumber: action.card.businessPhoneNumber,
        businessEmail: action.card.businessEmail,
      };

    default:
      return state;
  }
};

export default loader;
