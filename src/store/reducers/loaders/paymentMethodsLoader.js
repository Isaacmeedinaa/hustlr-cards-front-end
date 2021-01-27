import {
  PAYMENT_METHOD_IS_CREATING_LOADER,
  PAYMENT_METHOD_IS_NOT_CREATING_LOADER,
  PAYMENT_METHOD_IS_DELETING_LOADER,
  PAYMENT_METHOD_IS_NOT_DELETING_LOADER,
} from "../../actions/loaders/paymentMethodsLoader";

let initialState = {
  creatingLoader: false,
  deletingLoader: false,
  deletingPaymentMethodId: 0,
}

const paymentMethodLoader = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_METHOD_IS_CREATING_LOADER:

      return {
        ...state,
        creatingLoader: true
      };

    case PAYMENT_METHOD_IS_NOT_CREATING_LOADER:

      return {
        ...state,
        creatingLoader: false
      };
      
    case PAYMENT_METHOD_IS_DELETING_LOADER:

      return {
        ...state,
        deletingLoader: true,
        deletingPaymentMethodId: action.paymentMethodId
      };

    case PAYMENT_METHOD_IS_NOT_DELETING_LOADER:

      return {
        ...state,
        deletingLoader: false,
        deletingPaymentMethodId: 0
      };

    default:
      return state;
  }
};

export default paymentMethodLoader;