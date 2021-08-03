import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const LoginModal = () => {

  //Login
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Would you liek to login?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you would like to delete this plant from your collection?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No, thanks!
          </Button>
          <Button variant="primary">
            Head to Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal