import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { ImageUploadField } from '../ImageUploadField.js'


const PlantForm = ({ formdata, handleSubmit, handleChange, handleImageUrl }) => {

  return (
    <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <label className="label">Plant Name</label>
      <div className="control">
        <input
          className="input"
          name="plant_name"
          value={formdata.plant_name}
          onChange={handleChange}
        />
        <small></small>
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
      <Button type="submit">Submit New Plant!</Button>
    </Form>
  )
}

export default PlantForm