import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublicCardPaymentMethod = (props) => {
  if (!props.paymentMethod || !props.primaryColor || !props.transparentColor) {
    return null;
  }

  return (
    <div
      className="public-card-payment-method-badge-wrapper"
      style={{
        backgroundColor: props.transparentColor,
        minWidth:
          props.paymentMethod.paymentMethodType.description.length === 16
            ? 170
            : 150,
      }}
    >
      <div className="public-card-payment-method-badge-container">
        <i>
          <FontAwesomeIcon
            icon={[
              props.paymentMethod.paymentMethodType.iconPrefix,
              props.paymentMethod.paymentMethodType.icon,
            ]}
            style={{ color: props.primaryColor }}
            className="public-card-payment-method-badge-icon"
          />
        </i>
        <p
          className="public-card-payment-method-badge-text"
          style={{ color: props.primaryColor }}
        >
          {props.paymentMethod.paymentMethodType.description}
        </p>
      </div>
    </div>
  );
};

export default PublicCardPaymentMethod;
