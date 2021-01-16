import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchPublicCard } from "../../store/actions/publicCard";

import Loader from "react-loader-spinner";
import Modal from "react-modal";

import PublicCard from "../UI/publiccard/PublicCard";
import PrivateCard from "../UI/publiccard/PrivateCard";
import PublicCardViewImagesModal from "../UI/publiccard/modals/PublicCardViewImagesModal";

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
        <PublicCardViewImagesModal />
        {!this.props.publicCard.isPublic ? (
          <PrivateCard />
        ) : (
          <div
            className="public-card-page-wrapper"
            style={{ backgroundColor: this.props.publicCard.primaryColor }}
          >
            <PublicCard />
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
