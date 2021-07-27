/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
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
      <Form onSubmit={handleSubmit}>
        <label>Pick a date</label>
        <input 
          name="carried_on"
          type="date" 
          value={formData.carried_on}
          onChange={handleChange}
        />
        <Form.Select name="plant" aria-label="Floating label select example" onChange={handleChange}>
          {plantData.map(plant =>
            <option key={plant.key} value={plant.id}>{plant.plant_name}</option>
          )}
        </Form.Select>

        <Form.Select name="task" aria-label="Floating label select example" onChange={handleChange}>
          {values.map(task =>
            <option key={task.key} value={formData.value}>{task}</option>
          )}
        </Form.Select>
        <Button type="submit">Add record</Button>
      </Form>
    </>
  )
}
  


export default Maintenance