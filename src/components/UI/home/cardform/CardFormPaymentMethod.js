import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deletePaymentMethod,
} from "../../../../store/actions/card";

import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

const CardFormPaymentMethod = (props) => {
  const dispatch = useDispatch();

  const paymentMethodsLoader = useSelector((state) => state.paymentMethodsLoader);
  
  return (
    <div className="card-form-social-media-input-group">
      <span className="card-form-social-media-icon-wrapper">
        <FontAwesomeIcon
          icon={[props.paymentMethod.paymentMethodType.iconPrefix, props.paymentMethod.paymentMethodType.icon]}
          transform="grow-4"
        />
      </span>
      <div
        className="card-form-payment-method-wrapper"
      >
        {props.paymentMethod.paymentMethodType.description}
      </div>
      <button
        onClick={() => dispatch(deletePaymentMethod(props.paymentMethod.id))}
        className="primary-color card-form-link-btn"
      >
        {paymentMethodsLoader.deletingLoader &&
        paymentMethodsLoader.deletingPaymentMethodId === props.paymentMethod.id ? (
          <Loader type="TailSpin" color="#2ecc71" width={22} height={22} />
        ) : (
          "Delete"
        )}
      </button>
    </div>
  );
};

export default CardFormPaymentMethod;
