import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeViewImagesModal } from "../../../../store/actions/modals/viewImagesModal";

import Modal from "react-modal";

import IosArrowForward from "react-ionicons/lib/IosArrowForward";
import IosArrowBack from "react-ionicons/lib/IosArrowBack";

import "./modals.css";

Modal.setAppElement("#root");

const PublicCardViewImagesModal = (props) => {
  const dispatch = useDispatch();

  const viewImagesModal = useSelector((state) => state.viewImagesModal);

  const onCloseModalClick = () => {
    props.clearImagesData();
    dispatch(closeViewImagesModal());
  };

  return (
    <Modal
      isOpen={viewImagesModal}
      onRequestClose={() => onCloseModalClick()}
      contentLabel="Gallery Image Modal"
      className="primary-light-bg public-card-image-modal"
    >
      <img
        src={props.currentImgUrl}
        alt="gallery"
        className="public-card-gallery-image"
      />
      <span className="public-card-modal-images-count">
        {props.currentImgIndex + 1} / {props.images.length}
      </span>
      <div className="public-card-image-modal-buttons-container">
        <div className="public-card-prev-button-container">
          <button
            id="previousButton"
            onClick={() => props.onPreviousButtonClick()}
            style={{
              display: props.currentImgIndex === 0 ? "none" : "block",
            }}
          >
            <IosArrowBack fontSize="24px" color="#2ecc71" />
          </button>
        </div>
        <div className="public-card-next-button-container">
          <button
            id="nextButton"
            onClick={() => props.onNextButtonClick()}
            style={{
              display:
                props.images.length - 1 === props.currentImgIndex
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
        onClick={() => onCloseModalClick()}
      >
        Close
      </button>
    </Modal>
  );
};

export default PublicCardViewImagesModal;
