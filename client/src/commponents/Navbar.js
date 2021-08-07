/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav, Button } from 'react-bootstrap'
import { getPayload } from './helpers/auth.js'
import { useHistory, useLocation } from 'react-router-dom'
import InfoToolTip from './Popups/InfoToolTip.js'
import InfoPlantToolTip from './Popups/InfoPlantTooltip.js'
import RegisterCanvas from './Popups/RegisterCanvas.js'
import LoginCanvas from './Popups/LoginCanvas.js'


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
    display: 'flex',
  }
  

  return (
    <Navbar fixed='top' collapseOnSelect expand="lg"  variant="light" style={navStyle}>
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
            <Nav.Link href="/maintenance"><InfoToolTip/></Nav.Link>
            <Nav.Link href="/allplants"eventKey={2}> <InfoPlantToolTip/>
            </Nav.Link>
          </Nav>
          }
          {!userIsAuthenticated() ?
            <Nav className="ms-auto">
              <LoginCanvas/>
              <RegisterCanvas/>
            </Nav>
            :
            <Nav>
              <Nav.Link variant="secondary"style={buttonStyle}href="/newplant">
                <i className="fas fa-plus"></i> Plant
              </Nav.Link>
              <Button style={buttonStyle}onClick={handleLogout}>Log out</Button>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}

export default Navigation