import React, { Fragment, useState, useEffect, useRef } from "react";

import Carousel from "react-bootstrap/Carousel";
import { addWidthToImgUrl } from "../../../../services/ImgUrlParser";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardOfferings = (props) => {
  const [showHeader, setShowHeader] = useState(false);

  const offeringsContainer = useRef();

  useEffect(() => {
    for (let idx = 0; idx < props.offerings.length; idx++) {
      let offering = props.offerings[idx];
      if (offering.title !== "") {
        setShowHeader(true);
        break;
      } else if (idx === props.offerings.length - 1) {
        setShowHeader(false);
      }
    }

    const copyOfferingsContainerCurrent = offeringsContainer.current;
    offeringsContainer.current.addEventListener(
      "wheel",
      onOfferingsContainerWheel,
      {
        passive: false,
      }
    );

    return () =>
      copyOfferingsContainerCurrent.removeEventListener(
        "wheel",
        onOfferingsContainerWheel
      );
  }, [props.offerings]);

  const onOfferingsContainerWheel = (event) => {
    event.preventDefault();

    const container = document.getElementById(
      "card-business-products-services-container"
    );
    const containerScrollPosition = document.getElementById(
      "card-business-products-services-container"
    ).scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
      behaviour: "smooth",
    });
  };

  const renderOfferingSliderImages = (offering) => {
    return offering.photos.map((photo) => (
      <Carousel.Item key={photo.id}>
        <img
          style={{
            objectFit: "cover",
            height: 215,
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          srcSet={`${addWidthToImgUrl(photo.url, 320)} 320w, ${addWidthToImgUrl(
            photo.url,
            640
          )} 640w, ${addWidthToImgUrl(photo.url, 1280)} 1280w`}
          sizes={"(max-width: 650px) 100vw, (min-width: 651px) 640px, 640px"}
          alt="img"
        />
      </Carousel.Item>
    ));
  };

  const renderOfferings = () => {
    return props.offerings.map((offering, index) => {
      if (!offering.title || offering.title === "") {
        return null;
      }
      return (
        <div
          key={offering.id}
          style={{ backgroundColor: props.transparentColor }}
          className="card-business-product-service-container"
        >
          {offering.photos.length > 0 ? (
            // <AwesomeSlider bullets={false}>
            //   {renderOfferingSliderImages(offering)}
            // </AwesomeSlider>
            <Carousel
              style={{ maxHeight: "215px", width: "100%" }}
              interval={null}
            >
              {renderOfferingSliderImages(offering)}
            </Carousel>
          ) : null}
          <div className="card-business-offering-body">
            <div className="card-business-product-service-header">
              <p
                style={{ color: props.primaryColor }}
                className="card-business-product-service-title"
              >
                {offering.title}
              </p>
              <div className="card-business-product-service-price">
                <span style={{ color: props.primaryColor }}>
                  {!offering.price ? null : "$" + offering.price}
                </span>
              </div>
            </div>
            {offering.description ? (
              <div className="card-business-product-service-description">
                <span
                  className="card-business-product-service-description wordwrap"
                  style={{ color: props.primaryColor }}
                >
                  {offering.description}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      {!showHeader ||
      !props.offerings ||
      props.offerings.length === 0 ? null : (
        <div className="card-business-section-header-container">
          <h4 className="ui horizontal divider header">
            <span className="public-card-products-services-title-text">
              Products &amp; Services
            </span>
          </h4>
        </div>
      )}
      <div
        className="card-business-products-services-container"
        id="card-business-products-services-container"
        style={{
          marginTop:
            !showHeader || !props.offerings || props.offerings.length === 0
              ? 0
              : 60,
        }}
        onWheel={onOfferingsContainerWheel}
        ref={offeringsContainer}
      >
        {!showHeader || !props.offerings || props.offerings.length === 0
          ? null
          : renderOfferings()}
      </div>
    </Fragment>
  );
};

export default CardOfferings;
