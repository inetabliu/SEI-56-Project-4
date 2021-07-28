/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav, Button } from 'react-bootstrap'
import { getPayload } from './helpers/auth.js'
import { useHistory, useLocation } from 'react-router-dom'


const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const { pathname } = useLocation()
  const history = useHistory()

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    setIsActive(false)
  }, [pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  const navStyle = {
    background: '#FAF1CF',
  }

  const buttonStyle = {
    background: '#3F6844',
    borderColor: '#C4C4C4',
    boxShadow: '2px 2px #C4C4C4',
    marginLeft: '2.5%',
    borderRadius: '5px',
    color: '#FFF',
  }
  

  return (
    <Navbar collapseOnSelect expand="lg"  variant="light" style={navStyle}>
      <Container>
        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/inetab/image/upload/c_scale,w_100/v1627490166/SEI_Project_4/n2cogipagzmjmiv9ddqv.png"/></Navbar.Brand>
        <span onClick={handleToggle} className={`navbar-burger ${isActive ? 'is-active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {userIsAuthenticated() &&
          <Nav className="me-auto">
            <Nav.Link href="/maintenance">Maintenace</Nav.Link>
            <Nav.Link href="/allplants"eventKey={2}> <i className="fas fa-seedling"></i>
            </Nav.Link>
          </Nav>
          }
          {!userIsAuthenticated() ?
            <Nav className="ms-auto">
              <Nav.Link  style={buttonStyle} href="/register">Register</Nav.Link>
              <Nav.Link style={buttonStyle} href="/login">Login</Nav.Link>
            </Nav>
            :
            <Button style={buttonStyle}onClick={handleLogout}>Log out</Button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}

export default Navigation