
import React from "react";
import './style.css'
import PropTypes from 'prop-types';
import Button from "../Button/index";

function Modal({ bodyText, buttonText, onConfirm, cancelOption, onCancel }) {
  return (
    <div className="modal-background">
      <div className="modal-container">

        <span>{bodyText}</span>

        <div className="modal-footer">

          <Button
            text={buttonText}
            onClick={onConfirm}
            type="button"
          />
          
          {cancelOption && (
            <Button
              text="Cancelar"
              onClick={onCancel}
              type="button"
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Modal.propTypes = {
//   setOpenModal: PropTypes.func,
//   title: PropTypes.string
// }
// Modal.propTypes = {
//   setOpenModal: PropTypes.func,
//   bodytext: PropTypes.string
// }
// Modal.propTypes = {
//   setOpenModal: PropTypes.func,
//   onConfirm: PropTypes.func
// }

export default Modal;

