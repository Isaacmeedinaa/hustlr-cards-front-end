import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeSocialMediaModal } from "../../../../../store/actions/modals/socialMediaModal";

import Modal from "react-modal";
import MdClose from "react-ionicons/lib/MdClose";

import "../../../../../constants/colors.css";
import "./modals.css";
import CardFormSocialMediaInputs from "../CardFormSocialMediaInputs";

Modal.setAppElement("#root");

const CardFormSocialMediaModal = () => {
  const dispatch = useDispatch();

  const socialMediaModal = useSelector((state) => state.socialMediaModal);

  return (
    <Modal
      isOpen={socialMediaModal}
      onRequestClose={() => dispatch(closeSocialMediaModal())}
      contentLabel="Social Media Modal"
      className="primary-light-bg card-form-social-media-modal"
    >
      <div className="card-form-modal-header">
        <h3 className="card-form-modal-title">
          Add Social Media
        </h3>
        <div
          className="card-form-modal-btn"
          onClick={() => dispatch(closeSocialMediaModal())}
        >
          <MdClose color="#2ecc71" size={16} />
        </div>
      </div>
      <CardFormSocialMediaInputs />
    </Modal>
  );
};

export default CardFormSocialMediaModal;
