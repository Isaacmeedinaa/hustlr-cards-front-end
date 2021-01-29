import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { openViewImagesModal } from "../../../store/actions/modals/viewImagesModal";

import { addWidthToImgUrl } from "../../../services/ImgUrlParser";
import Carousel from "react-bootstrap/Carousel";

import "../../../constants/colors.css";
import "./PublicCardUI.css";
import "react-awesome-slider/dist/styles.css";

class PublicCardGallerySlider extends Component {
  renderGallerySliderImages = () => {
    return this.props.photos.map((photo, index) => (
      // <div
      //   key={photo.id}
      //   data-src={photo.url}
      //   onClick={() =>
      //     this.onGalleryImageClick(this.props.photos, photo.url, index)
      //   }
      // ></div>
      <Carousel.Item key={photo.id}>
        <img
          style={{
            objectFit: "cover",
            height: 400,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          srcSet={`${addWidthToImgUrl(photo.url, 320)} 320w, ${addWidthToImgUrl(
            photo.url,
            640
          )} 640w, ${addWidthToImgUrl(photo.url, 1280)} 1280w`}
          sizes={"(max-width: 650px) 100vw, (min-width: 651px) 640px, 640px"}
          onClick={() =>
            this.onGalleryImageClick(this.props.photos, photo.url, index)
          }
          alt="img"
        />
      </Carousel.Item>
    ));
  };

  onGalleryImageClick = (images, currentImgUrl, currentImgIndex) => {
    this.props.setImagesData(images, currentImgUrl, currentImgIndex);
    this.props.openViewImagesModal();
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
          <Carousel style={{ height: "400px", width: "100%" }} interval={null}>
            {this.renderGallerySliderImages()}
          </Carousel>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openViewImagesModal: (images, currentImgUrl, currentImgindex) =>
      dispatch(openViewImagesModal(images, currentImgUrl, currentImgindex)),
  };
};

export default connect(null, mapDispatchToProps)(PublicCardGallerySlider);
