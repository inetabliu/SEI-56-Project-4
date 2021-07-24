/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import { ImageUploadField } from '../ImageUploadField'
import { useHistory } from 'react-router-dom'



const PlantCreateForm = () => {

  const history = useHistory()

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

  const handleChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormdata({ ...formdata, [event.target.name]: value })
    console.log(event.target.value)

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/plants/', formdata)
      history.push('/allplants')
    } catch (err) {
      console.log(err)
    }
  }

  const handleImageUrl = url => {
    setFormdata({ ...formdata, image: url })
  }

  
  return (
    <main className="section">
      <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <label className="label">Plant Name</label>
        <div className="control">
          <input
            className="input"
            name="plant_name"
            value={formdata.plant_name}
            onChange={handleChange}
          />
        </div>

        <label className="label">Botanical Name</label>
        <div className="control">
          <input
            className="input"
            name="botanical_name"
            value={formdata.botanical_name}
            onChange={handleChange}
          />
        </div>

        <label className="label">Nickname</label>
        <div className="control">
          <input
            className="input"
            name="nickname"
            value={formdata.nickname}
            onChange={handleChange}
          />
        </div>
       
        <label className="label">Genus</label>
        <div className="field">
          <input
            className="input"
            name="genus"
            value={formdata.genus}
            onChange={handleChange}
          />
        </div>
       
        <label className="label">Nursery Pot</label>
        <div className="field">
          <input
            className="input"
            name="nursery_pot"
            value={formdata.nursery_pot}
            onChange={handleChange}
          />
        </div>
    
        <label className="label">Origin</label>
        <div className="field">
          <input
            className="input"
            name="origin"
            value={formdata.origin}
            onChange={handleChange}
          />
        </div>
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            name="description"
            value={formdata.description}
            onChange={handleChange}
          />
        </div>
        

        <ImageUploadField
          value={formdata.image}
          name="image"
          handleImageUrl={handleImageUrl}
        />
        <button type="submit">Submit New Plant!</button>
      </form>
    </main>


  )
}

export default PlantCreateForm