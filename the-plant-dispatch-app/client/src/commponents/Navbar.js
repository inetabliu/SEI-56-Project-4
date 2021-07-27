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

 

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">M</Navbar.Brand>
        <span onClick={handleToggle} className={`navbar-burger ${isActive ? 'is-active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {userIsAuthenticated() &&
          <Nav>
            <Nav.Link href="/maintenance">Maintenance</Nav.Link>
            <Nav.Link href="/allplants"eventKey={2}> My collection
            </Nav.Link>
          </Nav>
          }
          {!userIsAuthenticated() ?
            <Nav className="me-auto">
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            :
            <Button onClick={handleLogout}>Log out</Button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}

export default Navigation