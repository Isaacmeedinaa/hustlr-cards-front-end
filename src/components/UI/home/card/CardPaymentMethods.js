import React, { Fragment, useState, useEffect } from "react";

import CardPaymentMethod from "./CardPaymentMethod";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardPaymentMethods = (props) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (props.paymentMethods.length === 0) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [props.paymentMethods]);

  const renderPaymentMethods = () => {
    return props.paymentMethods.map((paymentMethod) => (
      <CardPaymentMethod
        key={paymentMethod.id}
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
        <div className="card-business-section-header-container">
          <h4 className="ui horizontal divider header">
            <span className="public-card-products-services-title-text">
              Payment Methods
            </span>
          </h4>
        </div>
      )}
      <div
        className="card-business-payment-methods-container"
        style={{
          marginTop:
            !showHeader ||
            !props.paymentMethods ||
            props.paymentMethods.length === 0
              ? 0
              : 50,
        }}
      >
        {!showHeader ||
        !props.paymentMethods ||
        props.paymentMethods.length === 0
          ? null
          : renderPaymentMethods()}
      </div>
    </Fragment>
  );
};

export default CardPaymentMethods;
