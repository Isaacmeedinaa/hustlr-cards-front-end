import React, { Fragment, useState, useEffect } from "react";

import PublicCardPaymentMethod from "./PublicCardPaymentMethod";

const PublicCardPaymentMethods = (props) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (props.paymentMethods.length === 0) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [props.paymentMethods]);

  if (!props.paymentMethods || !props.primaryColor || !props.transparentColor) {
    return null;
  }

  const renderPaymentMethods = () => {
    return props.paymentMethods.map((paymentMethod) => (
      <PublicCardPaymentMethod
        paymentMethod={paymentMethod}
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
      />
    ));
  };

  return (
    <Fragment>
      {!showHeader ||
      !props.paymentMethods ||
      props.paymentMethods.length === 0 ? null : (
        <div className="public-card-payment-methods-title-container">
          <h4 className="ui horizontal divider header">
            <span className="public-card-payment-methods-title-text">
              Payment Methods
            </span>
          </h4>
        </div>
      )}
      <div
        className="public-card-payment-methods-container"
        style={{
          marginTop:
            !showHeader ||
            !props.paymentMethods ||
            props.paymentMethods.length === 0
              ? 0
              : 50,
        }}
      >
        {props.paymentMethods.length === 0 ? null : renderPaymentMethods()}
      </div>
    </Fragment>
  );
};

export default PublicCardPaymentMethods;
