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
  const values = ['WATERRED ON', 'REPOTTED ON', 'FERTILIZED ON', 'PEST TREATMENT']

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

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} className="col g-3">
          <Form.Group className="row g-3 align-items-center">
            <Form.Label className="form-label">Pick a date</Form.Label>
            <Form.Control 
              name="carried_on"
              type="date" 
              value={formData.carried_on}
              onChange={handleChange}
              style={{ width: '20%' }}
            />
          </Form.Group>
          <Form.Group className="row g-3 align-items-center">
            <Form.Label>Pick a plant</Form.Label>
            <Form.Select name="plant" aria-label="Floating label select example" onChange={handleChange}>
              <option>Select a plant</option>
              {plantData.map(plant =>
                <option key={plant.key} value={plant.id}>{plant.plant_name}</option>
              )}
            </Form.Select>

            <Form.Select name="task" aria-label="Floating label select example" onChange={handleChange}>
              {values.map(task =>
                <option key={task.key} value={formData.value}>{(task).toLowerCase()}</option>
              )}
            </Form.Select>
            <Button type="submit">Add record</Button>
          </Form.Group>
       
         
        </Form>
      </Container>
      
    </>
  )
}
  


export default Maintenance