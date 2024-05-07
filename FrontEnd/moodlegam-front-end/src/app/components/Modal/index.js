import './style.css'
import PropTypes from 'prop-types';
import Button from "../Button/index";
import React, { useEffect, useState } from "react";
import Link from "next/link"

function Modal({ bodyText, buttonText, onConfirm, cancelOption, onCancel, linkProps, secondOption}) {
  
  return (
    <div className="modal-background">
      <div className="modal-container">

        <span>{bodyText}</span>

        <div className="modal-footer">

          {linkProps !== null ? 
            (
              <Link
              
                href={{
                  pathname: linkProps.path,
                  query: {
                    subjectId: linkProps.subjectId
                  }
                }}
              >
              
                <Button
                  text={buttonText}
                  type="button"
                />

              </Link>

              
            )

            :
            (
              <Button
                text={buttonText}
                onClick={onConfirm}
                type="button"
              />
            )
          
          }

          {secondOption !== null ? (
            <Link
          
              href={{
                pathname: secondOption.path,
                query: {
                  subjectId: secondOption.subjectId
                }
              }}
            >
          
            <Button
              text={secondOption.text}
              type="button"
            />

            </Link>

          ) : ''}
          
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



export default Modal;

