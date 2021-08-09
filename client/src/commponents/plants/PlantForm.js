import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { ImageUploadField } from '../ImageUploadField.js'


const PlantForm = ({ formdata, handleSubmit, handleChange, handleImageUrl, errors, buttonText = 'Submit', titleText = 'Got another plant?' , parText = 'Add it to your collection' }) => {

  const buttonStyle = {
    background: '#3F6844',
    borderColor: '#C4C4C4',
    boxShadow: '2px 2px #C4C4C4',
    borderRadius: '5px',
    color: '#FFF',
    textTransform: 'uppercase',
    marginBottom: '10%',
  }

  const smallFontStyle = {
    marginTop: '15%',
    marginBottom: '15%',
    color: '#FAF1CF',
  }

  console.log('errors',errors)
  return (
    <Container style={smallFontStyle}>
      <h1 className='text-center'>{titleText}</h1>
      <p className='text-center'>{parText}</p>
      <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <label className="label">Plant Name</label>
        <div className="control">
          <input
            className="input"
            name="plant_name"
            value={formdata.plant_name}
            onChange={handleChange}
          />
          {errors &&  <small className="form-text text-muted">{errors.plant_name  ? errors.plant_name[0] : ''}</small>}
        </div>
        <label className="label">Botanical Name</label>
        <div className="control">
          <input
            className="input"
            name="botanical_name"
            value={formdata.botanical_name}
            onChange={handleChange}
          />  
          {errors && <small className="form-text text-muted">{errors.botanical_name ? errors.botanical_name[0] !== undefined : ''}</small>} 
        </div>
        <label className="label">Nickname</label>
        <div className="control">
          <input
            className="input"
            name="nickname"
            value={formdata.nickname}
            onChange={handleChange}
          />
          { errors && <small className="form-text text-muted">{errors.nickname ? errors.nickname[0] : ''}</small>}
        </div>
        <label className="label">Genus</label>
        <div className="field">
          <input
            className="input"
            name="genus"
            value={formdata.genus}
            onChange={handleChange}
          />
          {errors && <small className="form-text text-muted">{errors.genus ? errors.genus[0] : ''}</small>}
        </div>
        <label className="label">Nursery Pot</label>
        <div className="field">
          <input
            className="input"
            name="nursery_pot"
            value={formdata.nursery_pot}
            onChange={handleChange}
          />
          {errors && <small className="form-text text-muted">{errors.nursery_pot ? errors.nursery_pot[0] : ''}</small>}
        </div>
        <label className="label">Origin</label>
        <div className="field">
          <input
            className="input"
            name="origin"
            value={formdata.origin}
            onChange={handleChange}
          />
          {errors && <small className="form-text text-muted">{errors.origin ? errors.origin[0] : ''}</small>}
        </div>
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            name="description"
            value={formdata.description}
            onChange={handleChange}
          />
          {errors && <small className="form-text text-muted">{errors.description ? errors.description[0] : ''}</small>}
        </div>
        <ImageUploadField
          value={formdata.image}
          name="image"
          handleImageUrl={handleImageUrl}
        />
        { errors && <small className="form-text text-muted">{errors.image ? errors.image[0] : ''}</small>}
        <Button style={buttonStyle}type="submit">{buttonText}</Button>
      </Form>
    </Container>
    
  )
}

export default PlantForm