export const SET_CARD = "SET_CARD";

export const setCard = (
  businessName,
  businessService,
  businessPhoneNumber,
  businessEmail
) => {
  return {
    type: SET_CARD,
    card: { businessName, businessService, businessPhoneNumber, businessEmail },
  };
};
