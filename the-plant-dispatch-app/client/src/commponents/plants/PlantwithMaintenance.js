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
  }
  return (
    <Container style={cantStyle} className='d-flex'>
      <Card style={cardStyle} key={plant.plant_name}>
        <Card.Img  style={imgStyle} height="auto"  width="400px" src={plant.image} className="img-fluid float-start" alt="plant-image"variant="top"/>
        <Card.Body>
          <Card.Title>{plant.plant_name}</Card.Title>
          <Card.Text>
            <p>{plant.botanical_name}</p>
            <p>{plant.nickname}</p>
            <p>{plant.origin}</p>
            <p>{plant.genus}</p>
            <p>{plant.nursery_pot}<span>cm</span></p>
            <p>{plant.description}</p>
          </Card.Text>
          <Button variant="success"><Link to={`/plantedit/${plant.id}`}>Edit</Link></Button> 
          <DeleteModal handleDelete={handleDelete}/>
        </Card.Body>
       
      </Card>

      <Card key={id}style={mainCardStle}>
        <Card.Body>
          <Card.Title>Maintenance</Card.Title>
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