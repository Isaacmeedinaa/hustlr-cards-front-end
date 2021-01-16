import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeBDImageCropperModal } from "../../../../../store/actions/modals/backdropImageCropperModal";
import { uploadBackdropImage } from "../../../../../store/actions/card";

import Modal from "react-modal";

import CardFormBackdropImageCropper from "../CardFormBackdropImageCropper";

import "../../../../../constants/colors.css";
import "../../../../pages/pages.css";

Modal.setAppElement("#root");

const CardFormBackdropImageCropperModal = (props) => {
  const [imgBlob, setImgBlob] = useState(null);

  const dispatch = useDispatch();

  const cardId = useSelector((state) => state.card.cardData.id);
  const backdropImageCropperModal = useSelector(
    (state) => state.backdropImageCropperModal
  );

  const onUploadBackdropImageClick = () => {
    dispatch(uploadBackdropImage(imgBlob, cardId));
    dispatch(closeBDImageCropperModal());
  };

  return (
    <Modal
      isOpen={backdropImageCropperModal}
      onRequestClose={() => dispatch(closeBDImageCropperModal())}
      contentLabel="Gallery Image Modal"
      className="primary-light-bg home-page-image-cropper-modal"
    >
      <CardFormBackdropImageCropper
        getBlob={(blob) => setImgBlob(blob)}
        inputImg={props.inputBackdropImg}
      />
      <label onClick={onUploadBackdropImageClick} className="card-form-button">
        <span className="card-form-button-text">Crop and Upload Image</span>
      </label>
      <button
        className="primary-color card-form-image-cropper-modal-button"
        onClick={() => dispatch(closeBDImageCropperModal())}
      >
        Close
      </button>
    </Modal>
  );
};

export default CardFormBackdropImageCropperModal;
