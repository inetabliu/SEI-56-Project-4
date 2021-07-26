/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Col, Row } from 'react-bootstrap'

const Maintenance = () => {
  const [ formData, setFormData] = useState({
    task: '',
    carried_on: '',
  })

  const handleChange = (event) => {
    console.log('its changing')
  }
  
  return (
   
  )
}

export default Maintenance