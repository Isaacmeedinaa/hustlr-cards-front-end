import React, { Component, Fragment } from "react";

import AwesomeSlider from "react-awesome-slider";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

class PublicCardOfferings extends Component {

  renderOfferingSliderImages = (offering) => {
    return offering.photos.map((photo) => (
      <div key={photo.id} data-src={photo.url}></div>
    ));
  };

  renderOfferings = () => {
    return this.props.offerings.map((offering) => {
      if ((!offering.title || offering.title === "") && (!offering.description || offering.description === "")) {
        return null;
      }

      return (
        <div
          key={offering.id}
          style={{ backgroundColor: this.props.transparentColor }}
          className="public-card-product-service-container"
        > 
          { offering.photos.length > 0 ? 
            //<img className="preview-card-offering-photo" src={offering.photos[0].url}/>
            <div className="slider-container">
              <AwesomeSlider bullets={false}>
              {this.renderOfferingSliderImages(offering)}
            </AwesomeSlider>
            </div>
            : null
          }
          <div className="public-card-offering-body">
          <div className="public-card-product-service-header">
            <p
              style={{ color: this.props.primaryColor }}
              className="public-card-product-service-title"
            >
              {offering.title}
            </p>
            <div className="public-card-product-service-price">
              <span style={{ color: this.props.primaryColor }}>
                {!offering.price ? null : "$" + offering.price}
              </span>
            </div>
          </div>
          {offering.description ? (
            <div className="public-card-product-service-description word-wrap">
              <span style={{ color: this.props.primaryColor }}>
                {offering.description}
              </span>
            </div>
          ) : null}
          </div>
        </div>
      );
    });
  };

  render() {
    if (this.props.offerings.length === 0) {
      return null;
    }

    return (
      <Fragment>
        <div className="public-card-products-services-title-container">
        <h4 className="ui horizontal divider header">
          <span className="public-card-products-services-title-text">Products &amp; Services</span>
        </h4>
        </div>
        <div className="public-card-products-services-container">
          {this.renderOfferings()}
        </div>
      </Fragment>
    );
  }
}

export default PublicCardOfferings;
