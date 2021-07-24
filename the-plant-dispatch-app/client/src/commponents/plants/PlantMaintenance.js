/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PlantMaintenance = () => {
  const [maintenance, setMaintenance] = useState([])
  const { id }  = useParams()
  
  
  

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/plants/maintenance/2/')
      console.log(data.maintenance)
      setMaintenance(data.maintenance)
      
    }
    getData()
  },[id] )


  return (
    <div key={id}>
      {maintenance.map(el => 
        <>
          <h1>{el.plant_name}</h1>
          <p key={el.id}>{el.task} - {el.carried_on}</p>
        </>
      )}
    </div>
  )
}

export default PlantMaintenance