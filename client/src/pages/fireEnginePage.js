import React, { useEffect, useState } from 'react'
import './styles/mainPage.css'
import { useParams } from 'react-router-dom'
import { getOneFireEngine } from '../http/fireEngineAPI'

const FireEnginePage = () => {
    const [fireEngine, setFireEngine] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getOneFireEngine({id: id}).then(data => {
            setFireEngine(data)
        })
    }, [])

  return (
    <div>
        <h1>{fireEngine ? fireEngine.name : 'Waiting for data'}</h1>
    </div>
  );
}

export default FireEnginePage