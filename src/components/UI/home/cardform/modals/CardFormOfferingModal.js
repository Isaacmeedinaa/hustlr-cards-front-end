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

import "../../../../../constants/colors.css";
import "./modals.css";

Modal.setAppElement("#root");

const CardFormOfferingModal = (props) => {
  const dispatch = useDispatch();

  const offeringModal = useSelector((state) => state.offeringModal);
  const cardId = useSelector((state) => state.card.cardData.id);
  const offeringLoader = useSelector((state) => state.offeringLoader);
  const offeringImageLoader = useSelector((state) => state.offeringImageLoader);
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
  }, [offeringModal, title, price, description, dispatch]);

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
              <MdTrash color="#2ecc71" size={16} />
            </label>
          </div>
        </div>
      );
    });
  };

  const deleteOfferingInputsHandler = () => {
    dispatch(deleteOffering(offering.id));
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
        className="card-form-input-large"
        name="description"
        placeholder="Explain your product or service.."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="card-form-product-service-buttons-container">
        <label
          className="primary-color card-form-offering-button"
          htmlFor={`offeringPhotoImgSelector${offering.id}`}
        >
          {(offeringImageLoader.loading && offeringImageLoader.offeringId) ===
          offering.id ? (
            <Loader type="TailSpin" color="#2ecc71" width={23} height={23} />
          ) : (
            "Add Photo"
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
        {originalOffering.title !== title ||
        originalOffering.price !== price ||
        originalOffering.description !== description ? (
          <button
            className="primary-color card-form-offering-button"
            id="cardFormProductServiceDeleteBtn"
            onClick={() =>
              dispatch(
                updateOffering(
                  offering.id,
                  title,
                  price,
                  description,
                  cardId,
                  offeringModal.offeringIndex
                )
              )
            }
          >
            {offeringLoader.updatingLoader ? (
              <Loader type="TailSpin" color="#2ecc71" width={23} height={23} />
            ) : (
              "Save"
            )}
          </button>
        ) : null}
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
      </div>
      {offering.photos.length > 0 ? (
        <div className="card-form-gallery-slider-container">
          <AwesomeSlider bullets={false}>
            {renderOfferingSliderImages()}
          </AwesomeSlider>
        </div>
      ) : null}
      {showDeleteModal ? (
        <div className="primary-light-bg card-form-delete-offering-modal">
          <span className="card-form-delete-offering-modal-question">
            Are you sure?
          </span>
          <div className="card-form-delete-offering-modal-question">
            <button
              className="primary-color card-form-delete-offering-modal-button"
              onClick={deleteOfferingInputsHandler}
            >
              Yes
            </button>
            <button
              className="primary-color card-form-delete-offering-modal-button"
              onClick={() => setShowDeleteModal(false)}
            >
              No
            </button>
          </div>
        </div>
      ) : null}
    </Modal>
  );
};

export default CardFormOfferingModal;
