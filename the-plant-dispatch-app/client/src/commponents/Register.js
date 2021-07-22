/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { ImageUploadField } from './ImageUploadField'

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    profileImage: '',
  })
  
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    console.log(formData)
  }

  return (
  
    <form>

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
          value={formData.fullName}
          name="fullName"
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
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <ImageUploadField
          name="profileImage"
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </form>

  )
}

export default Register
