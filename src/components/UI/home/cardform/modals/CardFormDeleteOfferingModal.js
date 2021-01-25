import React, { useRef } from "react";
import useOutsideComponentAlerter from "../../../../../hooks/useOutsideComponentAlerter";

const CardFormDeleteOfferingModal = (props) => {
  const deleteOfferingModal = useRef(null);
  useOutsideComponentAlerter(deleteOfferingModal, props.hideDeleteModal);

  return (
    <div
      className="primary-light-bg card-form-delete-offering-modal"
      ref={deleteOfferingModal}
    >
      <span className="card-form-delete-offering-modal-question">
        Are you sure?
      </span>
      <div className="card-form-delete-offering-modal-question">
        <button
          className="primary-color card-form-delete-offering-modal-button"
          onClick={() => props.deleteOfferingInputsHandler()}
        >
          Yes
        </button>
        <button
          className="primary-color card-form-delete-offering-modal-button"
          onClick={() => props.hideDeleteModal()}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default CardFormDeleteOfferingModal;
