import React from "react";
import ReactModal from "react-modal";
import { BsArrowLeft } from "react-icons/bs";
import classes from "./Modal.module.css";

const Modal = ({ showModal, closeModal, message }) => {
  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Error message"
      className={classes.modal}
    >
      <div className={classes["modal-content"]}>
        <button className="button button__modal" onClick={closeModal}>
          <BsArrowLeft /> &nbsp; Go back
        </button>
        <p>{message}</p>
      </div>
    </ReactModal>
  );
};
export default Modal;
