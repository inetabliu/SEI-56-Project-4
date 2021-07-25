import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'


const Navigation = () => {


  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">M</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="/maintenance">Maintenance</Nav.Link>
            <Nav.Link href="/allplants"eventKey={2}>
       My collection
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}

export default Navigation