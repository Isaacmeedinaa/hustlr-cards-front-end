import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardPaymentMethod = (props) => {
  if (!props.paymentMethod || !props.primaryColor || !props.transparentColor) {
    return null;
  }

  return (
    <div
      className="card-business-payment-method-badge-wrapper"
      style={{
        backgroundColor: props.transparentColor,
        minWidth:
          props.paymentMethod.paymentMethodType.description.length === 16
            ? 170
            : 150,
      }}
    >
      <div className="card-business-payment-method-badge-container">
        <i>
          <FontAwesomeIcon
            icon={[
              props.paymentMethod.paymentMethodType.iconPrefix,
              props.paymentMethod.paymentMethodType.icon,
            ]}
            style={{ color: props.primaryColor }}
            className="card-business-payment-method-badge-icon"
          />
        </i>
        <p
          className="card-business-payment-method-badge-text"
          style={{ color: props.primaryColor }}
        >
          {props.paymentMethod.paymentMethodType.description}
        </p>
      </div>
    </div>
  );
};

export default CardPaymentMethod;
