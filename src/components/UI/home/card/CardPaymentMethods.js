import React, { Fragment, useState, useEffect, useRef } from "react";

import AwesomeSlider from "react-awesome-slider";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardOfferings = (props) => {
  const [showHeader, setShowHeader] = useState(false);

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
        className="card-business-products-services-container"
        id="card-business-products-services-container"
        onWheel={onOfferingsContainerWheel}
      >
        {!showHeader || !props.offerings || props.offerings.length === 0
          ? null
          : renderOfferings()}
      </div>
    </Fragment>
  );
};

export default CardPaymentMethods;
