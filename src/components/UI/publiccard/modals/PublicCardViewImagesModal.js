import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  closeViewImagesModal,
  nextImage,
  previousImage,
} from "../../../../store/actions/modals/viewImagesModal";

import Modal from "react-modal";

import IosArrowForward from "react-ionicons/lib/IosArrowForward";
import IosArrowBack from "react-ionicons/lib/IosArrowBack";

import "../../../pages/pages.css";

Modal.setAppElement("#root");

const PublicCardViewImagesModal = () => {
  const dispatch = useDispatch();

  const viewImagesModal = useSelector((state) => state.viewImagesModal);

  return (
    <Modal
      isOpen={viewImagesModal.modalIsOpen}
      onRequestClose={() => dispatch(closeViewImagesModal())}
      contentLabel="Gallery Image Modal"
      className="primary-light-bg public-card-image-modal"
    >
      <img
        src={viewImagesModal.currentImgUrl}
        alt="gallery"
        className="public-card-gallery-image"
      />
      <span className="public-card-modal-images-count">
        {viewImagesModal.currentImgIndex + 1} / {viewImagesModal.images.length}
      </span>
      <div className="public-card-image-modal-buttons-container">
        <div className="public-card-prev-button-container">
          <button
            id="previousButton"
            onClick={() => dispatch(previousImage())}
            style={{
              display: viewImagesModal.currentImgIndex === 0 ? "none" : "block",
            }}
          >
            <IosArrowBack fontSize="24px" color="#2ecc71" />
          </button>
        </div>
        <div className="public-card-next-button-container">
          <button
            id="nextButton"
            onClick={() => dispatch(nextImage())}
            style={{
              display:
                viewImagesModal.images.length - 1 ===
                viewImagesModal.currentImgIndex
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
        onClick={() => dispatch(closeViewImagesModal())}
      >
        Close
      </button>
    </Modal>
  );
};

export default PublicCardViewImagesModal;
