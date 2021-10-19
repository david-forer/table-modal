import React from 'react'

const ShowModal = () => {
  return (
<div className="modal">
  This is a Modal
</div>
  )
}

const Modal = ({showModal, setShowModal}) => {
  return (
    <>
    {showModal ? 
    
    <ShowModal /> : null}
      
    </>
  )
}

export default Modal
