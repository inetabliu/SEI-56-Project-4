/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { ImageUploadField } from './ImageUploadField'
import { useHistory } from 'react-router-dom'

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
      console.log(err.response.data.username)
      
      
    }
  }


  const handleImageUrl = url => {
    setFormData({ ... formData, profile_image: url })
  }

  return (
  
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          className="form-control" 
          id="username" 
          placeholder="Enter your username"
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
          placeholder="Enter your first name and surname"
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
        <input  name="profile_image"
          value={formData.profile_image}
          onChange={handleChange}
        />
        {/* <ImageUploadField
          value={formData.profile_image}
          name="profile_image"
          onChange={handleChange}
        /> */}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </form>

  )
}

export default Register
