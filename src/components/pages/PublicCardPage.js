import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchPublicCard } from "../../store/actions/publicCard";

import Loader from "react-loader-spinner";
import Modal from "react-modal";

import PublicCard from "../UI/publiccard/PublicCard";

import "./pages.css";

Modal.setAppElement("#root");

class PublicCardPage extends Component {
  state = {
    modalIsOpen: false,
    imgUrl: "",
  };

  componentDidMount() {
    const pathname = this.props.location.pathname.slice(1);
    const history = this.props.history;
    this.props.fetchPublicCard(pathname, history);
  }

  openModal = (imgUrl) => {
    this.setState({
      modalIsOpen: true,
      imgUrl: imgUrl,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      imgUrl: "",
    });
  };

  render() {
    console.log(this.state);
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
            src={this.state.imgUrl}
            alt="gallery"
            className="public-card-gallery-image"
          />
          <buttom
            className="primary-color public-card-image-modal-button"
            onClick={this.closeModal}
          >
            Close
          </buttom>
        </Modal>
        <div
          className="public-card-page-wrapper"
          style={{ backgroundColor: this.props.publicCard.primaryColor }}
        >
          <PublicCard openModal={this.openModal} closeModal={this.closeModal} />
        </div>
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
