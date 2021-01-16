import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeImageCropperModal } from "../../../../../store/actions/modals/imageCropperModal";
import { uploadBusinessProfilePicture } from "../../../../../store/actions/card";

import Modal from "react-modal";

import CardFormImageCropper from "../CardFormImageCropper";

import "../../../../../constants/colors.css";
import "./modals.css";

Modal.setAppElement("#root");

const CardFormImageCropperModal = (props) => {
  const [imgBlob, setImgBlob] = useState(null);

  const dispatch = useDispatch();

  const cardId = useSelector((state) => state.card.cardData.id);
  const imageCropperModal = useSelector((state) => state.imageCropperModal);

  const onUploadImageClick = () => {
    dispatch(uploadBusinessProfilePicture(imgBlob, cardId));
    dispatch(closeImageCropperModal());
  };

  return (
    <Modal
      isOpen={imageCropperModal}
      onRequestClose={() => dispatch(closeImageCropperModal())}
      contentLabel="Image Cropper Modal"
      className="primary-light-bg card-form-image-cropper-modal"
    >
      <CardFormImageCropper
        getBlob={(blob) => setImgBlob(blob)}
        inputImg={props.inputImg}
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
