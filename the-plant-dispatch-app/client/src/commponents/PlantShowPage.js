/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const PlantShowPage = () => {

  const [plants, setPlantShow] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/plants/')
      setPlantShow(data)
      console.log('my plants',data)
    }
    getData()
  }, [])

  return (
    <div>
      {plants.map( plant =>
        <div key={plant.id}> 
          <h1>{plant.plant_name}</h1>
          <img src={plant.image}/>
        </div>
      )}
    </div>

  )
}

export default PlantShowPage