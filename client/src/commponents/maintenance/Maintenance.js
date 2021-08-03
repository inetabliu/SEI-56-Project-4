/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button, Container } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth.js'

  
const Maintenance = () => {
  const [formData, setFormData] = useState({
    task: '',
    carried_on: '',
    plant: '',
  })

  const history = useHistory()
  const { id } = useParams()
  const [plantData, setPlantData] = useState([])
  const values = ['Select a task', 'WATERED ON', 'REPOTTED ON', 'FERTILIZED ON', 'PEST TREATMENT']

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/plants/', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      setPlantData(data)
      console.log(data)
    }
    getData()
  },[])

  const handleChange = (event) => {
    const updatedForm = { ...formData, [event.target.name]: event.target.value }
    setFormData(updatedForm)
    console.log(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/maintenance/', formData)
      history.push('/allplants')
    } catch (err) {
      console.log(err)
    }
  }

  const buttonStyle = {
    background: '#3F6844',
    borderColor: '#C4C4C4',
    boxShadow: '2px 2px #C4C4C4',
    borderRadius: '5px',
    color: '#FFF',
    textTransform: 'uppercase',
    marginBottom: '5%',
  }

  const formStyle = {
    width: '50%',
    marginTop: '15%',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    color: '#006B38',
    textAlign: 'center',
    background: '#FAD0C9',
    borderRadius: '5%',
    fontWeight: 'bold',
  }
  
  return (
    <>
      <Container style={formStyle}>
        <Form onSubmit={handleSubmit}>
          
          <Form.Group className="row g-3 align-items-center">
            <Form.Label>Plant Maintenance Form</Form.Label>
            <Form.Label>My plants</Form.Label>
            <Form.Select style={{ width: '50%', marginLeft: '25%' }} name="plant" aria-label="Floating label select example" onChange={handleChange}>
              <option>Select a plant</option>
              {plantData.map(plant =>
                <option key={plant.key} value={plant.id}>{plant.plant_name}</option>
              )}
            </Form.Select>

            <Form.Select style={{ width: '50%', marginLeft: '25%' }} name="task" aria-label="Floating label select example" onChange={handleChange}>
              {values.map(task =>
                <option key={task.key} value={formData.value}>{task}</option>
              )}
            </Form.Select>
            <Form.Group className="row g-3 align-items-center">
              <Form.Label className="form-label">Pick a date</Form.Label>
              <Form.Control 
                name="carried_on"
                type="date" 
                value={formData.carried_on}
                onChange={handleChange}
                style={{ width: '50%', marginLeft: '25%' }}
              />
            </Form.Group>
            <Button style={buttonStyle} type="submit">Add record</Button>
          </Form.Group>
        </Form>
      </Container>
      
    </>
  )
}
  


export default Maintenance