export const OPEN_OFFERING_MODAL = "OPEN_OFFERING_MODAL";
export const CLOSE_OFFERING_MODAL = "CLOSE_OFFERING_MODAL";

export const openOfferingModal = (offering, offeringIndex) => {
  return {
    type: OPEN_OFFERING_MODAL,
    offering: offering,
    offeringIndex: offeringIndex,
  };
};

export const closeOfferingModal = () => {
  return {
    type: CLOSE_OFFERING_MODAL,
  };
};
