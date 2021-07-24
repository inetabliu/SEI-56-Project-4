/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'



const PlantShowPage = () => {

  const [plants, setPlantShow] = useState([])
  const [plantModalShow, setPlantModalShow] = useState(false)
  
  

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/plants/')
      setPlantShow(data)
    }
    getData()
  },[] )



  return (
    <>
      <div>
        <Link to="/newplant">Add New Plant</Link>
      </div>
      
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
              <Card.Text>
            Maintenance goes here
              </Card.Text>
            </Card.Body>
            <Button onClick={() => setPlantModalShow(true)}>View More</Button>
            <Button><Link to="/editplant">Edit me</Link></Button> 
          </Card>
        )}
      </div>
    
      {/* Plant Show Modal */}
      <Modal
        size="lg"
        show={plantModalShow}
        onHide={() => setPlantModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      information about the plant goes here
        </Modal.Body>
      </Modal>
    
    </>
  
  )

}

export default PlantShowPage