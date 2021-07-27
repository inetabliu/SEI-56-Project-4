/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
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




  return ( 
    <>
      <div className="d-flex justify-content-around flex-wrap container">
        {plants.map(plant => 
          <Row key={plant.id} xs={1} md={2} className="g-4">
            <Card border="success" className="bg-success bg-gradient" style={{ width: '18rem' }}>
              <Link >
                <Card.Title>{plant.plant_name}</Card.Title>
              </Link>
          
              <Card.Body>
                <Card.Img variant="top" src={plant.image}/>
                <Card.Text>
              Genus: {plant.genus}
                </Card.Text>
                <Card.Text>
              Origin: {plant.origin}
                </Card.Text>
              </Card.Body>
              <Button variant="warning"><Link to={`/maintenance/${plant.id}`}>Full view</Link></Button> 
            </Card>
          </Row>
        )}
      </div>
      <div className="d-grid gap-2">
        <Button href="/newplant" variant="success" size="lg" className="fixed-bottom">
    Add new Plant
        </Button>
      </div> 
    </> 
  )

}

export default PlantShowPage