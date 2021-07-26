/* eslint-disable no-unused-vars */
import PlantForm from './PlantForm.js'
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const PlantEdit = () => {
  const { id } = useParams()
  const history = useHistory()
  const [formData, SetFormData] = useState( {
    plant_name: '',
    botanical_name: '',
    nickname: '',
    genus: '',
    nursery_pot: '',
    origin: '',
    description: '',
    image: '',
  })

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/plants/${id}`)
      console.log(data)
      SetFormData(data)
    }
    getData()
  }, [id])

  const handleChange = (event) => {
    const updatedFormData = { ... formData, [event.target.name]: event.target.value }
    SetFormData(updatedFormData)
    console.log(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`/api/plants/${id}/`, formData)
      history.push(`/maintenance/${id}`)
    } catch (err) {
      console.log(err)
    }
  }
 
  return (
    <PlantForm
      formdata={formData}
      handleChange={handleChange}
      buttonText="Submit changes"
      handleSubmit={handleSubmit}
    />
  )
}

export default PlantEdit