import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeSocialMediaModal } from "../../../../../store/actions/modals/socialMediaModal";

import Modal from "react-modal";

import "../../../../../constants/colors.css";
import "./modals.css";

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
      <h3>Add Social Media</h3>
    </Modal>
  );
};

export default CardFormSocialMediaModal;
