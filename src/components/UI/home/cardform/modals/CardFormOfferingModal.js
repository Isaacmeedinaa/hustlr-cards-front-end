import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeOfferingModal } from "../../../../../store/actions/modals/offeringModal";
import {
  setCardOfferingTitle,
  setCardOfferingPrice,
  setCardOfferingDescription,
  updateOffering,
  deleteOffering,
  uploadOfferingImages,
  deleteOfferingImage,
} from "../../../../../store/actions/card";

import Modal from "react-modal";
import Loader from "react-loader-spinner";
import AwesomeSlider from "react-awesome-slider";

import MdTrash from "react-ionicons/lib/MdTrash";
import MdClose from "react-ionicons/lib/MdClose";

import CardFormDeleteOfferingModal from "./CardFormDeleteOfferingModal";

import "../../../../../constants/colors.css";
import "./modals.css";

Modal.setAppElement("#root");

const CardFormOfferingModal = (props) => {
  const dispatch = useDispatch();

  const offeringModal = useSelector((state) => state.offeringModal);
  const cardId = useSelector((state) => state.card.cardData.id);
  const offeringLoader = useSelector((state) => state.offeringLoader);
  const offeringImageLoader = useSelector((state) => state.offeringImageLoader);
  const offeringLocalStorage = useSelector(
    (state) => state.offeringLocalStorage
  );
  const offeringImagesProgress = useSelector(
    (state) => state.offeringImagesProgress
  );
  const offering = offeringModal.offering;

  const [title, setTitle] = useState(offering.title);
  const [price, setPrice] = useState(offering.price);
  const [description, setDescription] = useState(offering.description);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [originalOffering, setOriginalOffering] = useState({});

  useEffect(() => {
    const cardString = localStorage.getItem("card");
    const cardObj = JSON.parse(cardString);
    setOriginalOffering(cardObj.offerings[offeringModal.offeringIndex]);

    dispatch(setCardOfferingTitle(offeringModal.offeringIndex, title));
    dispatch(setCardOfferingPrice(offeringModal.offeringIndex, price));
    dispatch(
      setCardOfferingDescription(offeringModal.offeringIndex, description)
    );
  }, [
    offeringModal,
    title,
    price,
    description,
    dispatch,
    offeringLocalStorage,
  ]);

  const onImageChangeHandler = (event) => {
    const images = event.target.files;

    dispatch(uploadOfferingImages(images, offering.id));

    event.target.value = null;
  };

  const renderOfferingSliderImages = () => {
    return offering.photos.map((photo) => {
      return (
        <div
          key={photo.id}
          style={{
            backgroundImage: `url('${photo.url}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="card-form-offering-image-slider-btns-container">
            <label
              className="primary-color card-form-backdrop-image-btn"
              onClick={() =>
                dispatch(deleteOfferingImage(photo.id, offering.id))
              }
            >
              <MdTrash color="#2ecc71" size={12} />
            </label>
          </div>
        </div>
      );
    });
  };

  const onSaveOfferingClick = () => {
    if (description.length > 250) return;

    dispatch(
      updateOffering(
        offering.id,
        title,
        price,
        description,
        cardId,
        offeringModal.offeringIndex
      )
    );
  };

  const deleteOfferingInputsHandler = () => {
    dispatch(deleteOffering(offering.id));
    setShowDeleteModal(false);
  };

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  if (!offering) {
    return null;
  }

  return (
    <Modal
      isOpen={offeringModal.modalIsOpen}
      onRequestClose={() => dispatch(closeOfferingModal())}
      contentLabel="Offering Modal"
      className="primary-light-bg card-form-offering-modal"
    >
      <div className="card-form-modal-header">
        <h3 className="card-form-modal-title">Edit Product or Service</h3>
        <div
          className="card-form-modal-btn"
          onClick={() => dispatch(closeOfferingModal())}
        >
          <MdClose color="#2ecc71" size={16} />
        </div>
      </div>
      <div className="card-form-product-service-inputs-container">
        <input
          className="card-form-product-service-title-input"
          name="offeringTitle"
          placeholder="Product or Service Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <p className="primary-color card-form-product-service-text">$</p>
        <input
          className="card-form-product-service-price-input"
          name="offeringPrice"
          placeholder="0.00"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <textarea
        className="card-form-product-service-description-input "
        name="description"
        placeholder="Explain your product or service.."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <p
        className="card-form-product-service-description-count"
        style={{ color: description.length > 250 ? "red" : null }}
      >
        {description.length > 250
          ? `${250 - description.length}`
          : description.length}{" "}
        / 250
      </p>
      <div className="card-form-product-service-buttons-container">
        <button
          className="primary-color card-form-offering-button"
          id="cardFormProductServiceDeleteBtn"
          onClick={() => setShowDeleteModal(true)}
        >
          {offeringLoader.deletingLoader ? (
            <Loader type="TailSpin" color="#2ecc71" width={23} height={23} />
          ) : (
            "Delete"
          )}
        </button>
        <div className="card-form-offerings-modal-left-buttons-container">
          <label
            className="primary-color card-form-offering-button"
            htmlFor={`offeringPhotoImgSelector${offering.id}`}
          >
            {(offeringImageLoader.loading && offeringImageLoader.offeringId) ===
            offering.id ? (
              <Loader type="TailSpin" color="#2ecc71" width={23} height={23} />
            ) : (
              `Add Photo`
            )}
          </label>
          <input
            className="card-form-file-button"
            id={`offeringPhotoImgSelector${offering.id}`}
            onChange={onImageChangeHandler}
            type="file"
            accept="image/x-png,image/jpeg"
            multiple={true}
          />
          {description.length > 250 ? null : originalOffering.title !== title ||
            originalOffering.price !== price ||
            originalOffering.description !== description ? (
            <button
              className="card-form-offering-modal-save-button"
              onClick={onSaveOfferingClick}
            >
              {offeringLoader.updatingLoader ? (
                <Loader type="TailSpin" color="#fff" width={23} height={23} />
              ) : (
                "Save"
              )}
            </button>
          ) : null}
        </div>
      </div>
      {showDeleteModal ? (
        <CardFormDeleteOfferingModal
          deleteOfferingInputsHandler={deleteOfferingInputsHandler}
          hideDeleteModal={hideDeleteModal}
        />
      ) : null}
      {offeringImagesProgress.progressing ? (
        <p className="card-form-offering-modal-image-count">
          Image {offeringImagesProgress.currentOfferingImgCount} out of{" "}
          {offeringImagesProgress.totalOfferingImgCount} uploaded
        </p>
      ) : null}
      {offering.photos.length > 0 ? (
        <div
          className="card-form-gallery-slider-container"
          style={{ marginTop: offeringImagesProgress.progressing ? 15 : 30 }}
        >
          <AwesomeSlider bullets={false}>
            {renderOfferingSliderImages()}
          </AwesomeSlider>
        </div>
      ) : null}
    </Modal>
  );
};

export default CardFormOfferingModal;
