/* eslint-disable no-unused-vars */
import PlantForm from './PlantForm.js'
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth.js'


const PlantEdit = ( { handleImageUrl }) => {

  const { id } = useParams()
  const history = useHistory()
  const [formData, setFormData] = useState( {
    plant_name: '',
    botanical_name: '',
    nickname: '',
    genus: '',
    nursery_pot: '',
    origin: '',
    description: '',
    image: '',
  })

  const [errors, setErrors] = useState( {
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
      const { data } = await axios.get(`/api/plants/${id}/`, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      console.log(data)
      setFormData(data)
      
    }
    getData()
  }, [id])

  const handleChange = (event) => {
    const updatedFormData = { ... formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, formData, [event.target.name]: '' }
    setFormData(updatedFormData)
    console.log(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`/api/plants/${id}/`, formData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      
      })
      history.push(`/maintenance/${id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <>
      <PlantForm
        style={{ marginTop: '5%', marginBottom: '5%' }}
        formdata={formData}
        handleChange={handleChange}
        buttonText="Submit changes"
        handleSubmit={handleSubmit}
        handleImageUrl={handleImageUrl}
      
      />
    </>
  )
}

export default PlantEdit