import {
  OPEN_PAYMENT_METHODS_MODAL,
  CLOSE_PAYMENT_METHODS_MODAL,
} from "../../actions/modals/paymentMethodsModal";

const paymentMethodsModal = (state = false, action) => {
  switch (action.type) {
    case OPEN_PAYMENT_METHODS_MODAL:
      return true;

    case CLOSE_PAYMENT_METHODS_MODAL:
      return false;

    default:
      return state;
  }
};

export default paymentMethodsModal;
