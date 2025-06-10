import React, { useEffect, useState } from 'react'
import './styles/mainPage.css'
import { useParams } from 'react-router-dom'
import { getOneFirefighter } from '../http/firefighterAPI'

const FirefighterPage = () => {
    const [firefighter, setfirefighter] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getOneFirefighter({id: id}).then(data => {
            setfirefighter(data)
        })
    }, [])

  return (
    <div>
        <h1>{firefighter ? firefighter.firstName + ' ' + firefighter.lastName : 'Waiting for data'}</h1>
    </div>
  );
}

export default FirefighterPage