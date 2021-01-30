import React, { Component } from "react";

import { connect } from "react-redux";
import { deleteGalleryImage } from "../../../../store/actions/card";

import Carousel from "react-bootstrap/Carousel";
import { addWidthToImgUrl } from "../../../../services/ImgUrlParser";

import MdTrash from "react-ionicons/lib/MdTrash";

import "../../../../constants/colors.css";
import "./CardFormUI.css";
import "react-awesome-slider/dist/styles.css";

class CardFormGallerySlider extends Component {
  state = {
    photos: this.props.photos,
  };

  componentDidUpdate(prevProps) {
    if (this.props.photos.length !== prevProps.photos.length) {
      this.setState({
        photos: this.props.photos,
      });
    }
  }

  renderSliderImages = () => {
    return this.state.photos.map((photo) => {
      return (
        <Carousel.Item key={photo.id}>
          <img
            style={{
              objectFit: "cover",
              height: 300,
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            srcSet={`${addWidthToImgUrl(
              photo.url,
              320
            )} 320w, ${addWidthToImgUrl(
              photo.url,
              640
            )} 640w, ${addWidthToImgUrl(photo.url, 1280)} 1280w`}
            sizes={"(max-width: 650px) 100vw, (min-width: 651px) 640px, 640px"}
            alt="img"
          />
          <Carousel.Caption className="carousel-caption">
            <div
              className="card-form-gallery-slider-image-delete-btn"
              onClick={() => this.props.deleteGalleryImage(photo.id)}
            >
              <MdTrash color="white" fontSize="24px" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  render() {
    if (this.props.photos.length === 0) {
      return null;
    }

    return (
      <div className="card-form-gallery-slider-container">
        <Carousel style={{ height: "300px", width: "100%" }} interval={null}>
          {this.renderSliderImages()}
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.card.cardData.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteGalleryImage: (photoId) => dispatch(deleteGalleryImage(photoId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormGallerySlider);
