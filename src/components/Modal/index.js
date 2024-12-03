import React, { useState } from 'react';
import "./Modal.css"

const Modal = ({ mensaje }) => {
    return (
           <div className="modal">
                <div className="modal-content">
                    <p>{mensaje}</p>
                </div>
        </div>
    );
  };
  
  export default Modal;