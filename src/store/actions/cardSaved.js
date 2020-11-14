export const CARD_IS_SAVED = "CARD_IS_SAVED";
export const CARD_IS_NOT_SAVED = "CARD_IS_NOT_SAVED";

export const cardIsSaved = () => {
  return {
    type: CARD_IS_SAVED,
  };
};

export const cardIsNotSaved = () => {
  return {
    type: CARD_IS_NOT_SAVED,
  };
};
