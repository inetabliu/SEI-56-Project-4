/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PlantMaintenance = () => {
  const [maintenance, setMaintenance] = useState([])
  const [plant, setPlant] = useState([])
  const { id }  = useParams()

  
  

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/plants/maintenance/${id}/`)
      console.log(data)
      setPlant(data)
      setMaintenance(data.maintenance) 
    }
    getData()
  },[id] )


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
    </>
  )
}

export default PlantMaintenance