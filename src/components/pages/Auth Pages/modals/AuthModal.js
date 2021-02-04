import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "../../../../store/actions/modals/authModal";

import Modal from "react-modal";

import MdClose from "react-ionicons/lib/MdClose";

import LoginModalForm from "./LoginModalForm";
import RegisterModalForm from "./RegisterModalForm";

import "./modals.css";

Modal.setAppElement("#root");

const AuthModal = () => {
  const dispatch = useDispatch();

  const authModal = useSelector((state) => state.authModal);

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const onAuthModalClose = () => {
    setShowRegisterForm(false);
    dispatch(closeAuthModal());
  };

  return (
    <Modal
      isOpen={authModal}
      onRequestClose={() => onAuthModalClose()}
      contentLabel="Auth Modal"
      className="primary-light-bg auth-modal"
    >
      <div className="auth-modal-header">
        <h3 className="auth-modal-title">
          Please {!showRegisterForm ? "Login" : "Register"} to Continue
        </h3>
        <div className="auth-modal-btn" onClick={() => onAuthModalClose()}>
          <MdClose color="#2ecc71" size={16} />
        </div>
      </div>
      {!showRegisterForm ? (
        <LoginModalForm setShowRegisterForm={setShowRegisterForm} />
      ) : (
        <RegisterModalForm setShowRegisterForm={setShowRegisterForm} />
      )}
    </Modal>
  );
};

export default AuthModal;
