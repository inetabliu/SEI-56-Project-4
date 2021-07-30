/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ImageUploadField } from '../ImageUploadField.js'
import { Form } from 'react-bootstrap'
import RegisterCanvas from '../Popups/RegisterCanvas.js'

const Register = () => {

  const history = useHistory()
  const [formData, setFormData] = useState({
    username: '',
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
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
      history.push('/login')
      console.log(response.data)
    } catch (err) {

      setErrors(err.response.data)
      console.log(err.response.data.email[0])
      
    }
  }


  const handleImageUrl = url => {
    setFormData({ ... formData, profile_image: url })
  }

  return (
    <>
      
      <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <div className="text-center">
          <h1>Register to catalogue your plant collection</h1>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Form.Input 
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="Enter username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
          <small className="form-text text-muted">{errors.username[0]}</small> 
        </div>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <Form.Input 
            type="text" 
            className="form-control" 
            id="fullName" 
            placeholder="Enter your full name"
            value={formData.full_name}
            name="full_name"
            onChange={handleChange}
          />
          <small className="form-text text-muted">{errors.full_name[0]}</small> 
        </div>

        <div className="form-group">
          <label htmlFor="emailAddress">Email address</label>
          <Form.Input 
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
   
          <small className="form-text text-muted"  >{errors.email[0]}</small> 
        </div>

        <div className="form-group">
          <label htmlFor="InputPassword1">Password</label>
          <Form.Input 
            type="password" 
            className="form-control" 
            id="InputPassword"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <small className="form-text text-muted">{errors.password[0]}</small> 
        </div>

        <div className="form-group">
          <label htmlFor="passwordCofnirmation">Password Confirmation</label>
          <Form.Input 
            type="password"
            className="form-control"
            id="passwordConfirmation"
            placeholder="Confirm Your Password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
          <small className="form-text text-muted">{errors.password_confirmation[0]}</small> 
        </div>

        <div className="form-group">
          <ImageUploadField
            value={formData.profile_image}
            name="image"
            onChange={handleChange}
            handleImageUrl={handleImageUrl}
          />
          <small className="form-text text-muted">{errors.profile_image[0]}</small> 
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </Form>
     
    </>
  )
}

export default Register
