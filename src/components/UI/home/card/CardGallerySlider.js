import React, { Component, Fragment } from "react";

import { addWidthToImgUrl } from "../../../../services/ImgUrlParser";
import Carousel from 'react-bootstrap/Carousel';

import "../../../../constants/colors.css";
import "./CardUI.css";
import "react-awesome-slider/dist/styles.css";

class CardGallerySlider extends Component {
  renderGallerySliderImages = () => {
    return this.props.photos.map((photo) => (
      <Carousel.Item key={photo.id}>
          <img
            style={{
              objectFit: 'cover',
              height: 300,
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
            srcSet={`${addWidthToImgUrl(photo.url, 320)} 320w, ${addWidthToImgUrl(photo.url, 640)} 640w, ${addWidthToImgUrl(photo.url, 1280)} 1280w`}
            sizes={'(max-width: 650px) 100vw, (min-width: 651px) 640px, 640px'}
            alt="img"
          />
        </Carousel.Item>
    ));
  };

  render() {
    const view =
      this.props.photos.length === 0 ? null : (
        <Fragment>
          <div className="card-business-section-header-container">
            <h4 className="ui horizontal divider header">
              <span className="public-card-products-services-title-text">
                Gallery
              </span>
            </h4>
          </div>
          <div className="card-business-gallery-slider-container">
            <Carousel 
              style={{height: '300px', width: '100%'}}
              interval={null}>
              {this.renderGallerySliderImages()}
            </Carousel> 
          </div>
        </Fragment>
      );

    return view;
  }
}

export default CardGallerySlider;
