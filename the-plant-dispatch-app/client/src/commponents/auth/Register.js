/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ImageUploadField } from '../ImageUploadField.js'

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
    profile_image: 'hfhhf',
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
      console.log(err.response.data)
      
      
    }
  }


  const handleImageUrl = url => {
    setFormData({ ... formData, profile_image: url })
  }

  return (
  
    <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
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
        <small id="emailHelp" className="form-text text-muted">Your email is secure with us.</small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1"
          placeholder="Enter Your Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
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
      </div>

      <div className="form-group">
        <ImageUploadField
          value={formData.profile_image}
          name="image"
          onChange={handleChange}
          handleImageUrl={handleImageUrl}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </form>

  )
}

export default Register
