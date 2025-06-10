import React, { useEffect, useState } from 'react'
import './styles/mainPage.css'
import { useParams } from 'react-router-dom'
import { getOneTeam } from '../http/fireTeamAPI'

const FireTeamPage = () => {
    const [fireTeam, setFireTeam] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getOneTeam({id: id}).then(data => {
            setFireTeam(data)
        })
    }, [])

  return (
    <div>
        <h1>{fireTeam ? fireTeam.name : 'Waiting for data'}</h1>
    </div>
  );
}

export default FireTeamPage