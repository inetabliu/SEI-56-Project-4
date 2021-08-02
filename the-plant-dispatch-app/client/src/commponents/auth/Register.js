/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ImageUploadField } from '../ImageUploadField.js'
import { Form } from 'react-bootstrap'


const Register = () => {

  const history = useHistory()
  const [formData, setFormData] = useState({
    username: '',
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  
  const handleChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    console.log('my form data', formData)
    setFormData({ ...formData, [event.target.name]: value })
    const newErrors = { ...errors, [event.target.name]: '' }
    setErrors(newErrors)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/register/', formData)
      console.log(response.data)
      window.alert('Registration sucessfull head to Login')
    } catch (err) {

      setErrors(err.response.data)
  
      
    }
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
    <>
      
      <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <div className="text-center">
          <h1>Register to catalogue your plant collection</h1>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="Enter username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
          {/* <small className="form-text text-muted">{errors.username[0]}</small>  */}
        </div>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text" 
            className="form-control" 
            id="fullName" 
            placeholder="Enter your full name"
            value={formData.full_name}
            name="full_name"
            onChange={handleChange}
          />
          {/* <small className="form-text text-muted">{errors.full_name[0]}</small>  */}
        </div>

        <div className="form-group">
          <label htmlFor="emailAddress">Email address</label>
          <input 
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* <small className="form-text text-muted"  >{errors.email[0]}</small>  */}
        </div>

        <div className="form-group">
          <label htmlFor="InputPassword1">Password</label>
          <input
            type="password" 
            className="form-control" 
            id="InputPassword"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {/* <small className="form-text text-muted">{errors.password[0]}</small>  */}
        </div>

        <div className="form-group">
          <label htmlFor="passwordCofnirmation">Password Confirmation</label>
          <input 
            type="password"
            className="form-control"
            id="passwordConfirmation"
            placeholder="Confirm Your Password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
          {/* <small className="form-text text-muted">{errors.password_confirmation[0]}</small>  */}
        </div>
        <button style={buttonStyle}type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </>
  )
}

export default Register
