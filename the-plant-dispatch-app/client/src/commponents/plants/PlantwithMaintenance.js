/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const PlantMaintenance = () => {
  const [maintenance, setMaintenance] = useState([])
  const [plant, setPlant] = useState([])
  const { id }  = useParams()
  const history = useHistory()
  console.log('plant id', id)
  
  
  // GET ALL PLANT DATA
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/plants/maintenance/${id}/`)
      setPlant(data)
      
    }
    getData()
  },[id] )

  // DELETE PLANT

  const handleDelete = async () => {
    try {
      const { data } =  await axios.delete(`/api/plants/${id}/`)
      window.confirm('You sure You want to delete the plant?')
      setPlant(data)
      history.push('/allplants')
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <div key={plant.plant_name}>
        <h2>{plant.plant_name}</h2>
        <img src={plant.image} className="img-thumbnail figure-img img-fluid rounded float-start" alt="..."/>
        <p>{plant.botanical_name}</p>
        <p>{plant.nickname}</p>
        <p>{plant.origin}</p>
        <p>{plant.genus}</p>
        <p>{plant.nursery_pot}<span>cm</span></p>
        <p>{plant.description}</p>
      </div>
      <div key={id}>
        <p>Maintenance Records</p>
        {maintenance.map(el => 
          <>
            <p>{el.plant_name}</p>
            <p key={el.id}>{el.task} - {el.carried_on}</p>
          </>
        )}
      </div>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  )
}

export default PlantMaintenance