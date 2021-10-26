import React from "react";
import { HiX } from "react-icons/hi";
import './modal.css'


const Modal = ({ showModal, setShowModal, user }) => {
  // const { email, first_name, last_name, avatar, id }= user;
// console.log(user)

const toggleModal = () => {
  setShowModal(!showModal)
}
  
  return <>{showModal ? 
  <div className="modal">
      <div className="modal-content">
        <header className="modal-header">
          <h2 className="modal-header-title">{user.first_name}</h2>
        </header>
        <main className="modal-body">{user.first_name}</main>
        <footer className="modal-footer">
          <button className="close" onClickCapture={toggleModal} value={user.id}>
          
            <HiX alt="close" />
          </button>
         
        </footer>
      </div>
    </div>
  
   : null}</>;
};

export default Modal;
