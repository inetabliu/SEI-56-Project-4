import React from 'react'
import {  Navbar, Nav } from 'react-bootstrap'


const Footer = () => {
  const navStyle = {
    background: '#FAF1CF',
  }

  const fontStyle = {
    textAlign: 'center',
    color: '#006B38',
    justifyContent: 'center',
  }
  return (

    <Navbar fixed="bottom" style={navStyle}>
      <Nav.Link style={fontStyle} href="https://github.com/inetabliu/SEI-56-Project-4">Created by Ineta</Nav.Link>
    </Navbar>

  )
 
}

export default Footer