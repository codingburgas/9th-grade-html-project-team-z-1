import React, { useEffect, useState } from 'react'
import './styles/mainPage.css'
import { useParams } from 'react-router-dom'
import { getOneFireStation } from '../http/fireStationAPI'

const StationPage = () => {
    const [station, setStation] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getOneFireStation({id: id}).then(data => {
            setStation(data)
        })
    }, [])

  return (
    <div>
        <h1>{station ? station.name : 'Waiting for data'}</h1>
    </div>
  );
}

export default StationPage