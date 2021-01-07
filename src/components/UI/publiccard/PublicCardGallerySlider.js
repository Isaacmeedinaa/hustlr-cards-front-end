import React, { Component, Fragment } from "react";

import AwesomeSlider from "react-awesome-slider";

import "../../../constants/colors.css";
import "./PublicCardUI.css";
import "react-awesome-slider/dist/styles.css";

class PublicCardGallerySlider extends Component {
  renderGallerySliderImages = () => {
    return this.props.photos.map((photo, index) => (
      <div
        key={photo.id}
        data-src={photo.url}
        onClick={() =>
          this.props.openModal(this.props.photos, photo.url, index)
        }
      ></div>
    ));
  };

  render() {
    if (this.props.photos.length === 0) {
      return null;
    }

    return (
      <Fragment>
        <div className="public-card-products-services-title-container">
          <h4 className="ui horizontal divider header">
            <span className="public-card-products-services-title-text">
              Gallery
            </span>
          </h4>
        </div>
        <div className="public-card-gallery-slider-container">
          <AwesomeSlider bullets={false}>
            {this.renderGallerySliderImages()}
          </AwesomeSlider>
        </div>
      </Fragment>
    );
  }
}

export default PublicCardGallerySlider;
