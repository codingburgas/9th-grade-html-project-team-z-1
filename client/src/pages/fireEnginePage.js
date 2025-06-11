import React, { useEffect, useState } from 'react'
import './styles/mainPage.css'
import './styles/fireEnginePage.css'
import { useParams } from 'react-router-dom'
import { getOneFireEngine } from '../http/fireEngineAPI'
import { getOneTeam } from '../http/fireTeamAPI'
import { getOneFireStation } from '../http/fireStationAPI'

const FireEnginePage = () => {
    const [fireEngine, setFireEngine] = useState(null)
    const [fireTeam, setFireTeam] = useState(null)
    const [fireStation, setFireStation] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        async function fetchData() {
                const fireEngineData = await getOneFireEngine({ id });
                setFireEngine(fireEngineData);
        
                const teamData = await getOneTeam({ id: fireEngineData.fireTeamId});
                setFireTeam(teamData);
        
                const stationData = await getOneFireStation   ({ id: teamData.fireStationId })
                setFireStation(stationData);
              }
              fetchData()
    }, [])

  return (
    <div className='Primary' id='content'>
          {
            fireStation ?
              <div>
                <h2>Information: </h2>
                    <div className='Secondary' id='info'>
                      <img width={450} src={process.env.REACT_APP_API_URL + '/' + fireEngine.image}></img>
                        <div id='info-text'>
                        <p>Name: {fireEngine.name}</p>
                        <p>Description: {fireEngine.description}</p>
                        <p>Fire Team: {fireTeam.name}</p>
                        <p>Fire Station: {fireStation.name}</p>
                        <p>Fire address: {fireStation.address}</p>
                        <p>State: {fireEngine.state}</p>
                      </div>
                    </div>
                </div>
              :
              <h1>Loading</h1>
            }
      </div>
  );
}

export default FireEnginePage