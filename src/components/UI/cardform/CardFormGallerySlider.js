import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";

import { connect } from "react-redux";
import { deleteGalleryImage } from "../../../store/actions/card";

import MdTrash from "react-ionicons/lib/MdTrash";

import "../../../constants/colors.css";
import "../UI.css";
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
    return this.state.photos.map((photo) => (
      <div
        key={photo.id}
        style={{
          backgroundImage: `url('${photo.url}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="card-form-gallery-slider-image-delete-btn"
          onClick={() => this.props.deleteGalleryImage(photo.id)}
        >
          <MdTrash color="#2ecc71" fontSize="24px" />
        </div>
      </div>
    ));
  };

  render() {
    if (this.props.photos.length === 0) {
      return null;
    }

    return (
      <div className="card-form-gallery-slider-container">
        <AwesomeSlider bullets={false}>
          {this.renderSliderImages()}
        </AwesomeSlider>
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
