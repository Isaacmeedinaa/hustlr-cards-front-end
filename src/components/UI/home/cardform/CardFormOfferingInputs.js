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

import MdArrowDropup from "react-ionicons/lib/MdArrowDropup";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";

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
    if (this.props.offeringAddedNotification.show 
      && this.props.offeringAddedNotification.success
      && this.props.offering.id === this.props.offerings[this.props.offerings.length - 1].id) {
        
      scrollToComponent(this.ScrollTo, { offset: 0, align: 'middle', duration: 500, ease:'out-circ'});
      this.props.hideOfferingCreatedNotification();
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

  onDeleteImageHandler = (event) => {
    const photoId = +event.target.id;

    this.props.deleteOfferingImage(photoId, this.state.id);
  }

  renderOfferingImages = () => {
    return this.props.photos.map(photo => {
      return (
        <img className="ui rounded image card-form-offering-image" 
          src={photo?.url}
          alt="" 
          key={photo?.id}
          id={photo?.id}
          onClick={(event) => this.onDeleteImageHandler(event)}/>
      );
    })
  }

  render() {
    return (
      <Fragment>
        <div
            className="card-form-offerings-header-btn-container"
            onClick={() => {this.setState({showOffering: !this.state.showOffering})}}
        >
            <h6 className="offering-title-header">{this.state.title}</h6>
            <div className="settings-accordion-icon-container">
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
          {this.state.showPhotos ?
            <div className="ui tiny images card-form-offering-image-container">
              {this.renderOfferingImages()}
            </div>
            : null
          }
          <div className="card-form-product-service-buttons-container">
            <label
              className="primary-color card-form-offering-button"
              htmlFor={`offeringPhotoImgSelector${this.state.id}`}
            >
              {(this.props.offeringImageLoader.loading && this.props.offeringImageLoader.offeringId === this.state.id) ? (
                <Loader type="TailSpin" color="#2ecc71" width={22} height={22} style={{}}/>
              ) : (
                <span>
                  + Add Photo
                </span>
              )}
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
