import {
  OPEN_OFFERING_MODAL,
  CLOSE_OFFERING_MODAL,
} from "../../actions/modals/offeringModal";

const initialState = {
  modalIsOpen: false,
  offering: null,
  offeringIndex: null,
};

const offeringModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_OFFERING_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        offering: action.offering,
        offeringIndex: action.offeringIndex,
      };

    case CLOSE_OFFERING_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        offering: null,
        offeringIndex: null,
      };

    default:
      return state;
  }
};

export default offeringModal;
