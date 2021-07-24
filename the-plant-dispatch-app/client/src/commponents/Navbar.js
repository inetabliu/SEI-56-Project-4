import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Navigation = () => {


  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Text>My Collection<a href="/allplants">here</a></Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/maintenance">Maintenance</NavLink>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation