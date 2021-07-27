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

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)

  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      history.push('/allplants')
      
    } catch (e) {
      setError(e.response.data.detail)
      console.log(e.response.data.detail) 
    }
  }


  return (

    <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <div className="text-center">
        <h1>Login to view your collection</h1>
      </div>
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
          size="sm"
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