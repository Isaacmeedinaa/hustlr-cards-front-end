export const OPEN_PAYMENT_METHODS_MODAL = "OPEN_PAYMENT_METHODS_MODAL";
export const CLOSE_PAYMENT_METHODS_MODAL = "CLOSE_PAYMENT_METHODS_MODAL";

export const openPaymentMethodsModal = () => {
  return {
    type: OPEN_PAYMENT_METHODS_MODAL,
  };
};

export const closePaymentMethodsModal = () => {
  return {
    type: CLOSE_PAYMENT_METHODS_MODAL,
  };
};
