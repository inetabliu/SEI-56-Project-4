/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PlantMaintenance = () => {
  const [maintenance, setMaintenance] = useState([])
  const { id }  = useParams()
  console.log(id)
  
  

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/plants/maintenance/${id}/`)
      setMaintenance(data.maintenance)
    }
    getData()
  },[id] )


  return (
    <div>
      {maintenance.map(el => 
        <>
          <p key={el.id}>{el.task} - {el.carried_on}</p>
        </>
      )}
    </div>
  )
}

export default PlantMaintenance