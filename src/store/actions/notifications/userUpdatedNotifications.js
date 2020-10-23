export const USER_UPDATED_SUCCESSFULLY = "USER_UPDATED_SUCCESSFULLY";
export const USER_UPDATED_UNSUCCESSFULLY = "USER_UPDATED_UNSUCCESSFULLY";
export const HIDE_USER_UPDATED_NOTIFICATION = "HIDE_USER_UPDATED_NOTIFICATION";

export const hideUserUpdatedNotification = () => {
  return {type: HIDE_USER_UPDATED_NOTIFICATION};
}