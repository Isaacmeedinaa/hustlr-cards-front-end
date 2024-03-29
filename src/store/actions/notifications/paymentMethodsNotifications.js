export const PAYMENT_METHOD_CREATED_SUCCESSFULLY = "PAYMENT_METHOD_CREATED_SUCCESSFULLY";
export const PAYMENT_METHOD_CREATED_UNSUCCESSFULLY = "PAYMENT_METHOD_CREATED_UNSUCCESSFULLY";
export const HIDE_PAYMENT_METHOD_CREATED_NOTIFICATION = "HIDE_PAYMENT_METHOD_CREATED_NOTIFICATION";

export const PAYMENT_METHOD_DELETED_SUCCESSFULLY = "PAYMENT_METHOD_DELETED_SUCCESSFULLY";
export const PAYMENT_METHOD_DELETED_UNSUCCESSFULLY = "PAYMENT_METHOD_DELETED_UNSUCCESSFULLY";
export const HIDE_PAYMENT_METHOD_DELETED_NOTIFICATION = "HIDE_PAYMENT_METHOD_DELETED_NOTIFICATION";

export const hidePaymentMethodCreatedNotification = () => {
  return {type: HIDE_PAYMENT_METHOD_CREATED_NOTIFICATION};
}

export const hidePaymentMethodDeletedNotification = () => {
  return {type: HIDE_PAYMENT_METHOD_DELETED_NOTIFICATION};
}