/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const PlantShowPage = () => {

  const [plantShow, setPlantShow] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/plants/')
      setPlantShow(data)
      console.log('my plants',data)
    }
    getData()
  }, [])

  return (
    <p>Page where my plants live</p>
  )
}

export default PlantShowPage