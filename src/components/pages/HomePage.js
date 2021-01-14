import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { userAutoLogin } from "../../store/actions/user";
import { cardIsSaved, cardIsNotSaved } from "../../store/actions/cardSaved";
import { fetchIndustries } from "../../store/actions/industries";
import {
  uploadBusinessProfilePicture,
  uploadBackdropImage,
} from "../../store/actions/card";

import SideToolbar from "../UI/SideToolbar";
import TopToolbar from "../UI/home/TopToolbar";
import BottomToolbar from "../UI/BottomToolbar";
import CardForm from "../UI/home/cardform/CardForm";
import CardFormImageCropper from "../UI/home/cardform/CardFormImageCropper";
import CardFormBackdropImageCropper from "../UI/home/cardform/CardFormBackdropImageCropper";
import Card from "../UI/home/card/Card";

import Loader from "react-loader-spinner";
import Modal from "react-modal";

import "../../constants/colors.css";
import "./pages.css";
import "../UI/home/cardform/CardFormUI.css";

Modal.setAppElement("#root");

class HomeContainer extends Component {
  state = {
    imageCropperModalIsOpen: false,
    backdropImageCropperModalIsOpen: false,
    inputImg: "",
    imageBlob: null,
    backdropImageBlob: null,
    largeScreen: false,
  };

  componentDidMount() {
    if (this.props.industries.length === 0) {
      this.props.fetchIndustries();
    }

    if (window.innerWidth > 1100) {
      this.setState({
        ...this.state,
        largeScreen: true,
      });
    } else {
      this.setState({
        ...this.state,
        largeScreen: false,
      });
    }

    const mql = window.matchMedia("(max-width: 1100px)");
    mql.addEventListener("change", this.mediaQueryListener);
  }

  componentWillUnmount() {
    const mql = window.matchMedia("(max-width: 1100px)");
    mql.removeEventListener("change", this.mediaQueryListener);
  }

  mediaQueryListener = (event) => {
    if (!event.matches) {
      this.setState({
        ...this.state,
        largeScreen: true,
      });
    } else {
      this.setState({
        ...this.state,
        largeScreen: false,
      });
    }
  };

  componentDidUpdate() {
    const keysToCompare = [
      "title",
      "description",
      "city",
      "state",
      "email",
      "phoneNumber",
      "pathToCard",
      "isPublic",
      "facebookLink",
      "instagramLink",
      "snapchatLink",
      "twitterLink",
      "themeId",
      "industryId",
    ];
    const localStorageCard = JSON.parse(localStorage.getItem("card"));

    if (this.props.cardData.id === null) return;

    for (const key in localStorageCard) {
      if (localStorageCard.hasOwnProperty(key)) {
        if (
          Array.isArray(localStorageCard[key]) ||
          typeof localStorageCard[key] === "object"
        ) {
          if (key === "location") {
            if (
              localStorageCard[key]?.googlePlaceId !==
              this.props.cardData[key]?.googlePlaceId
            ) {
              this.props.cardIsNotSaved();
              return;
            }
          } else if (key === "industry") {
            if (localStorageCard[key]?.id !== this.props.cardData[key]?.id) {
              this.props.cardIsNotSaved();
              return;
            }
          } else if (key === "offerings") {
            for (let i = 0; i < localStorageCard.offerings.length; i++) {
              let foundChanges = false;
              this.props.cardData.offerings.forEach((offeringRedux) => {
                if (
                  offeringRedux.id === localStorageCard.offerings[i].id &&
                  (offeringRedux.title !==
                    localStorageCard.offerings[i].title ||
                    offeringRedux.price !==
                      localStorageCard.offerings[i].price ||
                    offeringRedux.description !==
                      localStorageCard.offerings[i].description)
                ) {
                  this.props.cardIsNotSaved();
                  foundChanges = true;
                  return; // this only breaks from forEach loop, that's why we need the boolean
                }
              });
              if (foundChanges) return;
            }
          } else {
            continue;
          }
        } else if (
          localStorageCard[key] !== this.props.cardData[key] &&
          keysToCompare.indexOf(key) > -1
        ) {
          this.props.cardIsNotSaved();
          return;
        }
      }
    }
    this.props.cardIsSaved();
  }

  openImageCropperModal = (inputImg) => {
    this.setState({
      imageCropperModalIsOpen: true,
      inputImg: inputImg,
    });
  };

  closeImageCropperModal = () => {
    this.setState({
      imageCropperModalIsOpen: false,
      inputImg: "",
    });
  };

  openBackdropImageCropperModal = (inputImg) => {
    this.setState({
      backdropImageCropperModalIsOpen: true,
      inputImg: inputImg,
    });
  };

  closeBackdropImageCropperModal = () => {
    this.setState({
      backdropImageCropperModalIsOpen: false,
      inputImg: "",
    });
  };

  getImageBlob = (blob) => {
    this.setState({ imageBlob: blob });
  };

  getBackdropImageBlob = (blob) => {
    this.setState({ backdropImageBlob: blob });
  };

  onUploadImageClick = () => {
    const cardId = this.props.cardId;
    this.props.uploadBusinessProfilePicture(this.state.imageBlob, cardId);
    this.closeImageCropperModal();
  };

  onUploadBackdropImageClick = () => {
    const cardId = this.props.cardId;
    this.props.uploadBackdropImage(this.state.backdropImageBlob, cardId);
    this.closeBackdropImageCropperModal();
  };

  render() {
    if (this.props.cardLoader || this.props.industriesLoader) {
      return (
        <div className="page-loader-container">
          <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
        </div>
      );
    }

    return (
      <Fragment>
        {/* Modals Start */}
        <Modal
          isOpen={this.state.imageCropperModalIsOpen}
          onRequestClose={this.closeImageCropperModal}
          contentLabel="Image Cropper Modal"
          className="primary-light-bg home-page-image-cropper-modal"
        >
          <CardFormImageCropper
            getBlob={this.getImageBlob}
            inputImg={this.state.inputImg}
          />
          <label onClick={this.onUploadImageClick} className="card-form-button">
            <span className="card-form-button-text">Crop and Upload Image</span>
          </label>
          <buttom
            className="primary-color card-form-image-cropper-modal-button"
            onClick={this.closeImageCropperModal}
          >
            Close
          </buttom>
        </Modal>
        <Modal
          isOpen={this.state.backdropImageCropperModalIsOpen}
          onRequestClose={this.closeBackdropImageCropperModal}
          contentLabel="Gallery Image Modal"
          className="primary-light-bg home-page-image-cropper-modal"
        >
          <CardFormBackdropImageCropper
            getBlob={this.getBackdropImageBlob}
            inputImg={this.state.inputImg}
          />
          <label
            onClick={this.onUploadBackdropImageClick}
            className="card-form-button"
          >
            <span className="card-form-button-text">Crop and Upload Image</span>
          </label>
          <button
            className="primary-color card-form-image-cropper-modal-button"
            onClick={this.closeBackdropImageCropperModal}
          >
            Close
          </button>
        </Modal>
        <TopToolbar />
        <div className="grid-container-home">
          <SideToolbar
            pathname={this.props.location.pathname}
            history={this.props.history}
          />

          <Fragment>
            <div
              className="secondary-light-bg card-form-col-wrapper"
              style={{
                display: this.state.largeScreen
                  ? "block"
                  : this.props.tabs !== "EDIT"
                  ? "none"
                  : "block",
              }}
            >
              <div className="card-form-col-container">
                <CardForm
                  openImageCropperModal={this.openImageCropperModal}
                  closeImageCropperModal={this.closeImageCropperModal}
                  openBackdropImageCropperModal={
                    this.openBackdropImageCropperModal
                  }
                  closeBackdropImageCropperModal={
                    this.closeBackdropImageCropperModal
                  }
                />
              </div>
            </div>
            <div
              className="secondary-light-bg card-show-col-wrapper"
              style={{
                display: this.state.largeScreen
                  ? "block"
                  : this.props.tabs !== "PREVIEW"
                  ? "none"
                  : "block",
              }}
            >
              <div className="card-show-col-container">
                <Card />
              </div>
            </div>
          </Fragment>
        </div>
        <BottomToolbar
          pathname={this.props.location.pathname}
          history={this.props.history}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cardData: state.card.cardData,
    cardId: state.card.cardData.id,
    cardLoader: state.cardLoader,
    industries: state.industries.dropdownIndustries,
    industriesLoader: state.industriesLoader,
    imageCropperModal: state.imageCropperModal,
    backdropImageCropperModal: state.backdropImageCropperModal,
    tabs: state.tabs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAutoLogin: (history) => dispatch(userAutoLogin(history)),
    cardIsSaved: () => dispatch(cardIsSaved()),
    cardIsNotSaved: () => dispatch(cardIsNotSaved()),
    fetchIndustries: () => dispatch(fetchIndustries()),
    uploadBusinessProfilePicture: (reqImgData, cardId) =>
      dispatch(uploadBusinessProfilePicture(reqImgData, cardId)),
    uploadBackdropImage: (reqImgData, cardId) =>
      dispatch(uploadBackdropImage(reqImgData, cardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
