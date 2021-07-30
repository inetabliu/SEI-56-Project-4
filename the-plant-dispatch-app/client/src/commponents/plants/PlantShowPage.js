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
    marginTop: '10px',
    color: '#FAF1CF',
    textAlign: 'center',

  }

  const buttonStyle = {
    marginBottom: '5%',
    background: '#FAF1CF',
    textDecoration: 'none',
    color: '#006B38',
    borderColor: '#006B38',
  }

  const linkStyle = {
    textDecoration: 'none',
    color: '#006B38',
  }

  const plantCardStyle = {
    width: '18rem',
    whiteSapce: 'nowwrap',
    
  }

  const imgStyle = {
    borderRadius: '5%',
    width: '100%',
    height: '20vw',
    objectFit: 'cover',
    boxShadow: '2px 2px #006B38',
  }

  const titleStyle = {
    textTransform: 'uppercase',
    textDecoration: 'underline dotted',
    color: '#006B38',
    textAlign: 'center',
    marginTop: '5%',
  }

  return ( 
    <>
      <Container className="row row-cols-1 row-cols-md-3 g-4">
        {plants.length === 0 ? 
          <div className="container"><h1>No plants in your collection add one now</h1></div>
          
          :
          plants.map(plant => 
            <Row key={plant.id} xs={1} md={2} className="g-4">
              <Card border="success" className="bg-success bg-gradient" style={plantCardStyle}>
               
                <Card.Body>
                  <Card.Title className="mt-2" style={fontStyle}>{plant.plant_name}</Card.Title>
                  <Card.Img className="img-fluid"style={imgStyle}  variant="top" src={plant.image}/>
                  <Card.Text style={titleStyle}>
                    Genus
                  </Card.Text>
                  <Card.Text style={smallFontStyle}>
                    {plant.genus}
                  </Card.Text>
                </Card.Body>
                <Button style={buttonStyle}><Link style={linkStyle} to={`/maintenance/${plant.id}`}>More</Link></Button> 
              </Card>
            </Row>
          )
        }
      </Container>
      <div className="d-grid gap-2" style={{ 'margin-top': '5%' }}>
      
      </div> 
    </> 
  )

}

export default PlantShowPage