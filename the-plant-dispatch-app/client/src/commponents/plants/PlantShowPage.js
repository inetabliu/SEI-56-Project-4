/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'


const PlantShowPage = () => {

  const [plants, setPlantShow] = useState([])
  
  

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/plants/')
      setPlantShow(data)
    }
    getData()
  },[] )



  return (
    <>
      <a href="/newplant">Add New Plant</a>
      <div className="d-flex justify-content-around flex-wrap">
        {plants.map(plant => 
          <Card border="primary" className="bg-success bg-gradient" key={plant.id} style={{ width: '18rem' }}>
            <Card.Title>{plant.plant_name}</Card.Title>
            <Card.Body>
              <Card.Img variant="top" src={plant.image} />
              <Card.Text>
              Genus: {plant.genus}
              </Card.Text>
              <Card.Text>
              Origin: {plant.origin}
              </Card.Text>
              <Accordion >
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="">Care</Accordion.Header>
                
                  <Accordion.Body>
            Here
                  </Accordion.Body>
        
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        )}
      </div>
    </>

  )
}

export default PlantShowPage