/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { Link, useParams } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { getTokenFromLocalStorage } from '../helpers/auth.js'



const PlantShowPage = () => {

  const [plants, setPlantShow] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/plants/', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      setPlantShow(data)
      console.log(data)
    }
    getData()
  },[] )


  const fontStyle = {
    color: '#FAF1CF',
    textShadow: '2px 2px #006B38',
    textAlign: 'center',
    textTransform: 'uppercase',
  }

  const smallFontStyle = {
    marginTop: '5%',
    color: '#FAF1CF',
    textAlign: 'center',
  }


  return ( 
    <>
      <Container className="row row-cols-1 row-cols-md-3 g-4">
        {plants.length === 0 ? 
          <div className="container"><h1>No plants in your collection add one now</h1></div>
          
          :
          plants.map(plant => 
            <Row key={plant.id} xs={1} md={2} className="g-4">
              <Card border="success" className="bg-success bg-gradient h-100" style={{ width: '18rem' }}>
                <Card.Title style={fontStyle}>{plant.plant_name}</Card.Title>
                <Card.Body>
                  <Card.Img variant="top" src={plant.image}/>
                  <Card.Text style={smallFontStyle}>
              Genus: {plant.genus}
                  </Card.Text>
                  <Card.Text style={smallFontStyle}>
              Origin: {plant.origin}
                  </Card.Text>
                </Card.Body>
                <Button variant="warning"><Link to={`/maintenance/${plant.id}`}>Full view</Link></Button> 
              </Card>
            </Row>
          )
        }
      </Container>
      <div className="d-grid gap-2" style={{ 'margin-top': '5%' }}>
        <Button href="/newplant" variant="success" size="lg" >
    Add new Plant
        </Button>
      </div> 
    </> 
  )

}

export default PlantShowPage