import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import Register from '../auth/Register.js'


const RegisterCanvas = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  
  const buttonStyle = {
    background: '#3F6844',
    borderColor: '#C4C4C4',
    boxShadow: '2px 2px #C4C4C4',
    marginLeft: '2.5%',
    borderRadius: '5px',
    color: '#FFF',
  }

  const canvasStyle = {
    background: 'url(https://i.pinimg.com/originals/52/9b/d5/529bd5d687bfc9db57e5223fe96c7ed8.png) no-repeat',
    color: '#FAD0C9',
    textShadow: '2px 2px #006B38',
  }

  return (
    <>
      <Button style={buttonStyle} variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Offcanvas style={canvasStyle} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Register />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default RegisterCanvas