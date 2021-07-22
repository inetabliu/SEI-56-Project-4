/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'



const Login = () => {

  const history = useHistory()

  const [error, setError] = useState({
    email: '',
    password: '',
  })

  const [formData, setFormData] = useState(false)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    const newError = { ... error, [event.target.name]: event.target.response }
    setError(newError)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/auth/login/', formData)
      history.push('/allplants')
      
    } catch (e) {
      setError(e.response.data.detail)
      console.log(e.response.data.detail) 
    }
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