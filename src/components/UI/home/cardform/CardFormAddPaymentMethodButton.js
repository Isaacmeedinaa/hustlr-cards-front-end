import React from "react";

import { useDispatch } from "react-redux";
import { openPaymentMethodsModal } from "../../../../store/actions/modals/paymentMethodsModal";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

const CardFormAddPaymentMethodButton = (props) => {
  const dispatch = useDispatch();

  return (
    <label
      className="primary color card-form-add-payment-button"
      onClick={() => dispatch(openPaymentMethodsModal())}
    >
      <span className="card-form-button-text">
        {props.paymentMethods.length === 0
          ? "+ Add Payment Method"
          : "Edit Payment Methods"}
      </span>
    </label>
  );
};

export default CardFormAddPaymentMethodButton;
