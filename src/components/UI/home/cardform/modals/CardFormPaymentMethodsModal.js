import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closePaymentMethodsModal } from "../../../../../store/actions/modals/paymentMethodsModal";

import Modal from "react-modal";

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
      className="primary-light-bg card-form-payment-methods-modal"
    >
      <h3>Add Payment Methods</h3>
    </Modal>
  );
};

export default CardFormPaymentMethodsModal;
