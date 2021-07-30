import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ImageUploadField } from '../ImageUploadField.js'
import { Form } from 'react-bootstrap'
import { Button, Offcanvas } from 'react-bootstrap'


const RegisterCanvas = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
      handleClose()
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

  const buttonStyle = {
    background: '#3F6844',
    borderColor: '#C4C4C4',
    boxShadow: '2px 2px #C4C4C4',
    marginLeft: '2.5%',
    borderRadius: '5px',
    color: '#FFF',
  }

  const canvasStyle = {
    background: 'url(https://i.pinimg.com/originals/52/9b/d5/529bd5d687bfc9db57e5223fe96c7ed8.png) no-repeat',
    color: '#FAD0C9',
    textShadow: '2px 2px #006B38',
  }

  return (
    <>
      <Button style={buttonStyle} variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Offcanvas style={canvasStyle} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
              {/* <small className="form-text text-muted">{errors.username[0]}</small>  */}
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
              {/* <small className="form-text text-muted">{errors.full_name[0]}</small>  */}
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
              {/* <small className="form-text text-muted"  >{errors.email[0]}</small>  */}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <Form.Input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {/* <small className="form-text text-muted">{errors.password[0]}</small>  */}
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
              {/* <small className="form-text text-muted">{errors.password_confirmation[0]}</small>  */}
            </div>

            <div className="form-group">
              <ImageUploadField
                value={formData.profile_image}
                name="image"
                onChange={handleChange}
                handleImageUrl={handleImageUrl}
              />
              {/* <small className="form-text text-muted">{errors.profile_image[0]}</small>  */}
            </div>

            <button type="submit" style={buttonStyle} className="btn btn-success">Submit</button>

          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default RegisterCanvas