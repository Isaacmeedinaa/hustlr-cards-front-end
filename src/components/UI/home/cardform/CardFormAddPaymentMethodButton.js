import React from "react";

import { useDispatch } from "react-redux";
import { openPaymentMethodsModal } from "../../../../store/actions/modals/paymentMethodsModal";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

const CardFormAddPaymentMethodButton = () => {
  const dispatch = useDispatch();

  return (
    <label
      className="primary color card-form-add-payment-button"
      onClick={() => dispatch(openPaymentMethodsModal())}
    >
      <span className="card-form-button-text">+ Add Payment Method</span>
    </label>
  );
};

export default CardFormAddPaymentMethodButton;
