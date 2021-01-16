import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  closeImageCropperModal,
  setImageCropperModalImageBlob,
} from "../../../../../store/actions/modals/imageCropperModal";
import { uploadBusinessProfilePicture } from "../../../../../store/actions/card";

import Modal from "react-modal";

import CardFormImageCropper from "../CardFormImageCropper";

import "../../../../../constants/colors.css";
import "../../../../pages/pages.css";

Modal.setAppElement("#root");

const CardFormImageCropperModal = () => {
  const dispatch = useDispatch();

  const cardId = useSelector((state) => state.card.cardData.id);
  const imageCropperModal = useSelector((state) => state.imageCropperModal);

  const onUploadImageClick = () => {
    dispatch(uploadBusinessProfilePicture(imageCropperModal.imageBlob, cardId));
    dispatch(closeImageCropperModal());
  };

  return (
    <Modal
      isOpen={imageCropperModal.modalIsOpen}
      onRequestClose={() => dispatch(closeImageCropperModal())}
      contentLabel="Image Cropper Modal"
      className="primary-light-bg home-page-image-cropper-modal"
    >
      <CardFormImageCropper
        getBlob={(blob) => dispatch(setImageCropperModalImageBlob(blob))}
        inputImg={imageCropperModal.inputImg}
      />
      <label onClick={onUploadImageClick} className="card-form-button">
        <span className="card-form-button-text">Crop and Upload Image</span>
      </label>
      <button
        className="primary-color card-form-image-cropper-modal-button"
        onClick={() => dispatch(closeImageCropperModal())}
      >
        Close
      </button>
    </Modal>
  );
};

export default CardFormImageCropperModal;
