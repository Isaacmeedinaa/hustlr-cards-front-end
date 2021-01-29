import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closePaymentMethodsModal } from "../../../../../store/actions/modals/paymentMethodsModal";

import CardFormPaymentInputs from "../CardFormPaymentInputs";

import Modal from "react-modal";

import MdClose from "react-ionicons/lib/MdClose";

import "../../../../../constants/colors.css";
import "./modals.css";

Modal.setAppElement("#root");

const CardFormPaymentMethodsModal = () => {
  const dispatch = useDispatch();

  const paymentMethodsModal = useSelector((state) => state.paymentMethodsModal);

  return (
    <Modal
      isOpen={paymentMethodsModal}
      onRequestClose={() => dispatch(closePaymentMethodsModal())}
      contentLabel="Payment Methods Modal"
      className="primary-light-bg card-form-modal"
    >
      <div className="card-form-modal-header">
        <h3 className="card-form-modal-title">Payment Methods</h3>
        <div
          className="card-form-modal-btn"
          onClick={() => dispatch(closePaymentMethodsModal())}
        >
          <MdClose color="#2ecc71" size={16} />
        </div>
      </div>
      <CardFormPaymentInputs></CardFormPaymentInputs>
    </Modal>
  );
};

export default CardFormPaymentMethodsModal;
