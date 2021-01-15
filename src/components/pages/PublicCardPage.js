import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchPublicCard } from "../../store/actions/publicCard";
import PrivateCard from "../UI/publiccard/PrivateCard";

import Loader from "react-loader-spinner";
import Modal from "react-modal";

import PublicCard from "../UI/publiccard/PublicCard";

import IosArrowForward from "react-ionicons/lib/IosArrowForward";
import IosArrowBack from "react-ionicons/lib/IosArrowBack";

import "./pages.css";

Modal.setAppElement("#root");

class PublicCardPage extends Component {
  state = {
    modalIsOpen: false,
    images: [],
    currentImgUrl: "",
    currentImgIndex: null,
  };

  componentDidMount() {
    const pathname = this.props.location.pathname.slice(1);
    const history = this.props.history;
    this.props.fetchPublicCard(pathname, history);
  }

  openModal = (images, currentImgUrl, currentImgIndex) => {
    this.setState({
      modalIsOpen: true,
      images: images,
      currentImgUrl: currentImgUrl,
      currentImgIndex: currentImgIndex,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      images: [],
      currentImgUrl: "",
      currentImgIndex: null,
    });
  };

  onNextButtonClick = () => {
    let currentImgIndex = this.state.currentImgIndex;

    const newCurrentImgItem = this.state.images[currentImgIndex + 1];

    this.setState({
      ...this.state,
      currentImgUrl: newCurrentImgItem.url,
      currentImgIndex: currentImgIndex + 1,
    });
  };

  onPreviousButtonClick = () => {
    let currentImgIndex = this.state.currentImgIndex;

    const newCurrentImgItem = this.state.images[currentImgIndex - 1];

    this.setState({
      ...this.state,
      currentImgUrl: newCurrentImgItem.url,
      currentImgIndex: currentImgIndex - 1,
    });
  };

  render() {
    if (!this.props.publicCard) {
      return (
        <div className="page-loader-container">
          <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
        </div>
      );
    }

    return (
      <Fragment>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Gallery Image Modal"
          className="primary-light-bg public-card-image-modal"
        >
          <img
            src={this.state.currentImgUrl}
            alt="gallery"
            className="public-card-gallery-image"
          />
          <span className="public-card-modal-images-count">
            {this.state.currentImgIndex + 1} / {this.state.images.length}
          </span>
          <div className="public-card-image-modal-buttons-container">
            <div className="public-card-prev-button-container">
              <button
                id="previousButton"
                onClick={this.onPreviousButtonClick}
                style={{
                  display: this.state.currentImgIndex === 0 ? "none" : "block",
                }}
              >
                <IosArrowBack fontSize="24px" color="#2ecc71" />
              </button>
            </div>
            <div className="public-card-next-button-container">
              <button
                ref={this.nextButton}
                id="nextButton"
                onClick={this.onNextButtonClick}
                style={{
                  display:
                    this.state.images.length - 1 === this.state.currentImgIndex
                      ? "none"
                      : "block",
                }}
              >
                <IosArrowForward fontSize="24px" color="#2ecc71" />
              </button>
            </div>
          </div>
          <button
            className="primary-color public-card-image-modal-button"
            onClick={this.closeModal}
          >
            Close
          </button>
        </Modal>
        {!this.props.publicCard.isPublic ? (
          <PrivateCard />
        ) : (
          <div
            className="public-card-page-wrapper"
            style={{ backgroundColor: this.props.publicCard.primaryColor }}
          >
            <PublicCard
              openModal={this.openModal}
              closeModal={this.closeModal}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    publicCardLoader: state.publicCardLoader,
    publicCard: state.publicCard,
    viewImageModal: state.viewImageModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPublicCard: (pathname, history) =>
      dispatch(fetchPublicCard(pathname, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicCardPage);
