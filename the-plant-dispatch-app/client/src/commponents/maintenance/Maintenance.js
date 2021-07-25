/* eslint-disable no-unused-vars */
import React, { useState, Component } from 'react'
import Calendar, { YearView } from 'react-calendar'
import { Form } from 'react-bootstrap'
import Select from 'react-select'
import { Button } from 'react-bootstrap'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css'


const Maintenance = () => {
  const [value, onChange] = useState(new Date())
  console.log(value)
  const formatedDate = value.toISOString()
  console.log(formatedDate)
 
  const [formData, setFormData] = useState({
    task: '',
    carried_on: '',
  })
  const handleMultiChange = (selected, name) => {
    const values = selected ? selected.map(item => item.value) : []
    setFormData({ ...formData, [name]: [ ...values] })
    console.log(values)
  }
 
  
  const options = [
    { value: 'WATERED ON', label: 'Watered' },
    { value: 'FERTILIZED ON', label: 'Fertilized' },
    { value: 'REPOTTED ON', label: 'Repotted' }
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/maintenance/')
    } catch (err) {
      console.log(err.response)
    }
  }
  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    console.log('with date', newFormData)
  }
  
  
  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <h2>Maintenance calendar</h2>
          <div className="text-center">
            <Calendar
              onChange={onChange}
              value={value}
              minDetail='month'
            />
          </div>
          <input name="carried_on" value={formData.carried_on}onChange={handleChange}/>
          <Select  name="task" isMulti options={options} onChange={handleMultiChange}/>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  )
}

export default Maintenance