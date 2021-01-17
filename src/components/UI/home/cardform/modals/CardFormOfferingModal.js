import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeOfferingModal } from "../../../../../store/actions/modals/offeringModal";
import { deleteOffering } from "../../../../../store/actions/card";

import Modal from "react-modal";

import "../../../../../constants/colors.css";
import "./modals.css";

Modal.setAppElement("#root");

const CardFormOfferingModal = (props) => {
  const dispatch = useDispatch();

  const offeringModal = useSelector((state) => state.offeringModal);
  const offering = offeringModal.offering;

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
      <h3>Offering {offering.id}</h3>
      <button onClick={() => dispatch(deleteOffering(offering.id))}>
        Delete
      </button>
    </Modal>
  );
};

export default CardFormOfferingModal;
