export const OPEN_SOCIAL_MEDIA_MODAL = "OPEN_SOCIAL_MEDIA_MODAL";
export const CLOSE_SOCIAL_MEDIA_MODAL = "CLOSE_SOCIAL_MEDIA_MODAL";

export const openSocialMediaModal = () => {
  return {
    type: OPEN_SOCIAL_MEDIA_MODAL,
  };
};

export const closeSocialMediaModal = () => {
  return {
    type: CLOSE_SOCIAL_MEDIA_MODAL,
  };
};
