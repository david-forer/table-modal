import React from "react";
import { HiX } from "react-icons/hi";
import './modal.css'


const Modal = ({ showModal, setShowModal, users }) => {
  console.log(users)
  return <>{showModal ? 
  <div className="modalContainer">
      <div className="modal">
        <header className="modal_header">
          <h2 className="modal_header-title">Modal for person </h2>
        </header>
        <main className="modal_content">This is Modal Content</main>
        <footer className="modal_footer">
          <button className="close"  onClick={() => window.close()}>
            <HiX alt="close" />
          </button>
        </footer>
      </div>
    </div>
  
   : null}</>;
};

export default Modal;
