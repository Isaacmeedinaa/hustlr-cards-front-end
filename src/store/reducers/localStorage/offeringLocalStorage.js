import { TOGGLE_OFFERING_LOCAL_STORAGE } from "../../actions/localStorage/offeringLocalStorage";

const offeringLocalStorage = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_OFFERING_LOCAL_STORAGE:
      return (state = !state);

    default:
      return state;
  }
};

export default offeringLocalStorage;
