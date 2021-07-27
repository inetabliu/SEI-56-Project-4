/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import PlantForm from './PlantForm.js'
import { getTokenFromLocalStorage } from '../helpers/auth.js'


const PlantCreateForm = () => {
  
  // REDIRECT TO PLANTS PAGE AFTER SUBMIT
  const history = useHistory()

  // FORM STATE
  const [formdata, setFormdata] = useState({
    plant_name: '',
    botanical_name: '',
    nickname: '',
    genus: '',
    nursery_pot: '',
    origin: '',
    description: '',
    image: '',
  })
  // HANDLE ERRORS 
  const [errors, setErrors] = useState({
    plant_name: '',
    botanical_name: '',
    nickname: '',
    genus: '',
    nursery_pot: '',
    origin: '',
    description: '',
    image: '',
  })

  // HANDLE INPUT CHANGE
  const handleChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormdata({ ...formdata, [event.target.name]: value })
    console.log(event.target.value)
    const newErrors = setErrors({ ... errors, [event.target.name]: '' })
    setErrors(newErrors)
    
  }
  
  // SUBMIT FORM TO BACKEND
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/plants/', formdata, 
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push('/allplants')
    } catch (err) {
      setErrors(err.response.data)
      console.log(err.response.data)
    }
  }

  // HANDLE IMAGE UPLOAD TO CLOUDINARY
  const handleImageUrl = url => {
    setFormdata({ ...formdata, image: url })
  }

  
  return (
    <>
      <div className="text-center">
        <h1>Got another plant again?</h1>
        <p>Add it to your collection</p>
      </div>
      <PlantForm
        formdata={formdata}
        handleChange={handleChange}
        handleImageUrl={handleImageUrl}
        handleSubmit={handleSubmit}/>
    </>


  )
}

export default PlantCreateForm