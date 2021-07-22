/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'



const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    console.log(formData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit button works')
  }

  return (

    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          name="email"
          placeholder="Enter email" 
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
      Your email is save with us
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          name="password"
          type="password" 
          placeholder="Password" 
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCheckbox">
        <Form.Check type="checkbox" label="I agree to your terms and conditions" />
      </Form.Group>

      <Button 
        variant="primary" 
        type="submit">
      Submit</Button>
    </Form>
  )
}

export default Login