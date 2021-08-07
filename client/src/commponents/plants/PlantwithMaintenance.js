/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory, Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import { Modal, Card } from 'react-bootstrap'
import DeleteModal from '../Popups/DeleteModal.js'
import { getTokenFromLocalStorage, getPayload } from '../helpers/auth.js'


const PlantMaintenance = () => {
  const [maintenance, setMaintenance] = useState([])
  const [plant, setPlant] = useState([])
  const { id }  = useParams()
  const history = useHistory()
  console.log('plant id', id)
  
  
  // GET ALL PLANT DATA
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/plants/maintenance/${id}/`, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      setPlant(data)
      setMaintenance(data.maintenance)
    }
    getData()
  },[id] )

  // DELETE PLANT
  const handleDelete = async () => {
    try {
      const { data } =  await axios.delete(`/api/plants/${id}/`, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      setPlant(data)
      history.push('/allplants')
    } catch (err) {
      console.log(err)
    }
  }

  const cantStyle = {
    marginTop: '5%',
    marginBottom: '10%',
  }

  const cardStyle = {
    background: '#FAD0C9',
    width: '50rem',
    borderRadius: '5%',
  }

  const mainCardStle = {
    background: '#006B38',
    width: '25rem',
    color: '#FAD0C9',
    textAlign: 'center',
  }
  const buttonStyle = {
    marginBottom: '5%',
    background: '#FAF1CF',
    textDecoration: 'none',
    color: '#006B38',
    borderColor: '#006B38',
  }

  const imgStyle = {
    borderRadius: '5%',
    width: '50%',
    alignSelf: 'center',
    marginTop: '5%',
  }

  const parStyle = {
    color: '#006B38',
    textAlign: 'center',
  }

  const titleStyle = {
    textTransform: 'uppercase',
    textShadow: '2px 2px #FAF1CF',
    color: '#006B38',
    textAlign: 'center',
    marginTop: '5%',
    fontSize: '4rem',
  }
  
  return (
    <Container style={cantStyle} className='d-flex'>
      <Card style={cardStyle} key={plant.plant_name}>
        <Card.Img  style={imgStyle} height="auto"  width="400px" src={plant.image} className="img-fluid float-start" alt="plant-image"variant="top"/>
        <Card.Body>
          <Card.Title style={titleStyle}>{plant.plant_name}</Card.Title>
          <Card.Text style={parStyle}>
            <p>Botanical name: {plant.botanical_name}</p>
            <p>Nickname: {plant.nickname}</p>
            <p>Origin: <strong>{plant.origin}</strong></p>
            <p>Genus: <strong>{plant.genus}</strong></p>
            <p>Nursery pot: <strong>{plant.nursery_pot}</strong><span>cm</span></p>
            <p>Info: {plant.description}</p>
          </Card.Text>
          <Button style={{ color: '#fff', marginRight: '5%' }} variant="success"><Link style={{ color: '#fff' }}to={`/plantedit/${plant.id}`}>Edit</Link></Button> 
          <DeleteModal handleDelete={handleDelete}/>
        </Card.Body>
      </Card>

      <Card key={id}style={mainCardStle}>
        <Card.Body>
          <Card.Title>Maintenance Records</Card.Title>
          <Card.Text>
            {maintenance.map(el => 
              <>
                <p>{el.plant_name}</p>
                <p key={el.id}>{el.task} - {el.carried_on}</p>
              </>
            )}
          </Card.Text>
          <Button href="/maintenance" style={buttonStyle} variant="success"><i className="fas fa-plus-circle"></i></Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PlantMaintenance