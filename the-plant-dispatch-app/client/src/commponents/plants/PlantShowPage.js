/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



const PlantShowPage = () => {

  const [plants, setPlantShow] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/plants/')
      setPlantShow(data)
      console.log(data)
    }
    getData()
  },[] )



  return (
    <>
      <div>
        <Link to="/newplant">Add New Plant</Link>
      </div>
      
      <div className="d-flex justify-content-around flex-wrap container">
        {plants.map(plant => 
          <Card border="success" className="bg-success bg-gradient" key={plant.id} style={{ width: '18rem' }}>
            <Link to={`/maintenance/${plant.id}`}>
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
            <Button><Link to="/editplant">Edit me</Link></Button> 
          </Card>
        )}
      </div>
    </>
  
  )

}

export default PlantShowPage