import React from 'react'

const Modal = ({showModal, setShowModal}) => {
  return (
    <>
    {showModal ? <div className="modal">Modal</div> : null}
      
    </>
  )
}

export default Modal
