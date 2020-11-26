import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import {
  setCardOfferingTitle,
  setCardOfferingPrice,
  setCardOfferingDescription,
  deleteOffering,
  uploadOfferingImage,
  deleteOfferingImage
} from "../../../../store/actions/card";

import scrollToComponent from 'react-scroll-to-component';

import {
  hideOfferingCreatedNotification,
} from "../../../../store/actions/notifications/offeringNotifications";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

import Loader from "react-loader-spinner";
import AwesomeSlider from "react-awesome-slider";

import MdArrowDropup from "react-ionicons/lib/MdArrowDropup";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";
import MdTrash from "react-ionicons/lib/MdTrash";

class CardFormOfferingInputs extends Component {
  state = {
    showDeleteModal: false,
    showPhotos: false,
    title: this.props.offering.title,
    price: this.props.offering.price,
    description: this.props.offering.description,
    id: this.props.offering.id,
    offerings: this.props.offerings,
    photos: this.props.photos,
    showOffering: false
  };

   componentDidUpdate() {
    // this checks if this is a new offering that was added via the "Add Products/Services button"
    if (this.props.offeringAddedNotification.show 
      && this.props.offeringAddedNotification.success
      && this.props.offering.id === this.props.offerings[this.props.offerings.length - 1].id) {    
      
      this.props.hideOfferingCreatedNotification(); // need this, don't delete unless you know why you are deleting it 
      this.onNewOfferingAdded();
    }

    if ((this.props.openOfferingId !== this.state.id) && this.state.showOffering) {
      this.setState({showOffering: false});
    }
  }

  onCardTitleChangeHandler = async (event) => {
    await this.setState({
      title: event.target.value,
    });

    this.props.setCardOfferingTitle(this.props.index, this.state.title);
  };

  onCardPriceChangeHandler = async (event) => {
    await this.setState({
      price: event.target.value,
    });

    this.props.setCardOfferingPrice(this.props.index, this.state.price);
  };

  onOfferingDescriptionChangeHandler = async (event) => {
    await this.setState({
      description: event.target.value,
    });

    this.props.setCardOfferingDescription(
      this.props.index,
      this.state.description
    );
  };

  deleteOfferingInputsHandler = async () => {
    await this.props.deleteOffering(this.props.id);
    this.setState({
      showDeleteModal: false,
    });
  };

  onImageChangeHandler = (event) => {
    const reqImgData = event.target.files[0];
    const offeringId = this.state.id;

    let reader = new FileReader();
    if (reqImgData) {
      console.log(reqImgData);
      reader.readAsDataURL(reqImgData);
      this.props.uploadOfferingImage(reqImgData, offeringId);
    }
  };

  onNewOfferingAdded = async () => {
    if (!this.state.showOffering) {
     await this.props.openOfferingHandler(this.state.id);
    }
    this.setState({showOffering: !this.state.showOffering})
    scrollToComponent(this.ScrollTo, { offset: 0, align: 'middle', duration: 500, ease:'out-circ'});
  }

  openOfferingHandler = async () => {
    if (!this.state.showOffering) {
     await this.props.openOfferingHandler(this.state.id);
    }
    this.setState({showOffering: !this.state.showOffering})
  }

  renderOfferingSliderImages = () => {
    return this.props.photos.map(photo => {
      return (
        <div
        key={photo.id}
        style={{
          backgroundImage: `url('${photo.url}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="card-form-offering-image-slider-btns-container">
          <label
            className="primary-color card-form-backdrop-image-btn"
            onClick={() =>
              this.props.deleteOfferingImage(photo.id, this.state.id)
            }
          >
            <MdTrash color="#2ecc71" size={16} />
          </label>
        </div>
      </div>
      );
    })
  }

  render() {
    return (
      <Fragment>
        <div
            className="card-form-offerings-header-btn-container"
            onClick={this.openOfferingHandler}
        >
            <h6 className="card-form-offering-title-header">
              {this.state.showOffering ? 'Close' : (!this.state.title || this.state.title === '') ? <span className="card-form-empty-offering-title-placeholder">Click To Edit Offering</span>: this.state.title}
            </h6>
            <div className="card-form-accordion-icon-container">
              {this.state.showOffering ? (
                <MdArrowDropdown color="#2ecc71" />
              ) : (
                <MdArrowDropup color="#2ecc71" />
              )}
            </div>
        </div>
        {this.state.showOffering ? 
        <div className="card-form-products-services-container">
          <div className="card-form-product-service-inputs-container">
            <input
              className="card-form-product-service-title-input"
              name="offeringTitle"
              placeholder="Product or Service Title"
              value={this.state.title}
              onChange={this.onCardTitleChangeHandler}
              id={this.state.id?.toString()}
              ref={(section) => { this.ScrollTo = section; }}
            />
            <p className="primary-color card-form-product-service-text">$</p>
            <input
              className="card-form-product-service-price-input"
              name="offeringPrice"
              placeholder="0.00"
              value={this.state.price}
              onChange={this.onCardPriceChangeHandler}
            />
          </div>
          <textarea
            className="card-form-input-large"
            name="description"
            placeholder="Explain your product or service.."
            value={this.state.description}
            onChange={this.onOfferingDescriptionChangeHandler}
          />
          <div className="card-form-product-service-buttons-container">
            <label
                className="primary-color card-form-offering-button"
                htmlFor={`offeringPhotoImgSelector${this.state.id}`}
              >
               {(this.props.offeringImageLoader.loading && this.props.offeringImageLoader.offeringId) === this.state.id ?
               <Loader type="TailSpin" color="#2ecc71" width={23} height={23} /> : 'Add Photo'}
            </label>
            <input
              className="card-form-file-button"
              id={`offeringPhotoImgSelector${this.state.id}`}
              onChange={this.onImageChangeHandler}
              type="file"
              accept="image/x-png,image/jpeg"
            />
            <button
              className="primary-color card-form-offering-button"
              id="cardFormProductServiceDeleteBtn"
              onClick={() => this.setState({ showDeleteModal: true })}
            >
              Delete
            </button>
          </div>
          {this.props.offering.photos.length > 0 ?
            <div className="card-form-gallery-slider-container">
              <AwesomeSlider bullets={false}>
                {this.renderOfferingSliderImages()}
              </AwesomeSlider>
            </div>
            : null
          }
          {this.state.showDeleteModal ? (
            <div className="primary-light-bg card-form-delete-offering-modal">
              <span className="card-form-delete-offering-modal-question">
                Are you sure?
              </span>
              <div className="card-form-delete-offering-modal-question">
                <button
                  className="primary-color card-form-delete-offering-modal-button"
                  onClick={this.deleteOfferingInputsHandler}
                >
                  Yes
                </button>
                <button
                  className="primary-color card-form-delete-offering-modal-button"
                  onClick={() => this.setState({ showDeleteModal: false })}
                >
                  No
                </button>
              </div>
            </div>
          ) : null}
        </div>      
        : null}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    offeringAddedNotification: state.offeringNotifications.created,
    offeringImageLoader: state.offeringImageLoader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardOfferingTitle: (offeringIndex, offeringTitle) =>
      dispatch(setCardOfferingTitle(offeringIndex, offeringTitle)),
    setCardOfferingPrice: (offeringIndex, offeringPrice) =>
      dispatch(setCardOfferingPrice(offeringIndex, offeringPrice)),
    setCardOfferingDescription: (offeringIndex, offeringDescription) =>
      dispatch(setCardOfferingDescription(offeringIndex, offeringDescription)),
    deleteOffering: (id) => dispatch(deleteOffering(id)),
    hideOfferingCreatedNotification: () =>
      dispatch(hideOfferingCreatedNotification()),
    uploadOfferingImage: (reqImgData, offeringId) => dispatch(uploadOfferingImage(reqImgData, offeringId)),
    deleteOfferingImage: (photoId, offeringId) => dispatch(deleteOfferingImage(photoId, offeringId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardFormOfferingInputs);
