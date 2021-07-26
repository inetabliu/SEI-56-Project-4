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

  const handleChange = () => {
    console.log('change is happenign')
  }
 
  return (
    <PlantForm
      formdata={formData}
      handleChange={handleChange}
    />
  )
}

export default PlantEdit