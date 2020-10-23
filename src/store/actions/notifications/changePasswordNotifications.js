export const PASSWORD_CHANGED_SUCCESSFULLY = "PASSWORD_CHANGED_SUCCESSFULLY";
export const PASSWORD_CHANGED_UNSUCCESSFULLY = "PASSWORD_CHANGED_UNSUCCESSFULLY";
export const HIDE_PASSWORD_CHANGED_NOTIFICATION = "HIDE_PASSWORD_CHANGED_NOTIFICATION";

export const hidePasswordChangedNotification = () => {
  return {type: HIDE_PASSWORD_CHANGED_NOTIFICATION};
}