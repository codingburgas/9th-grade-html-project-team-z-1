import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import '../styles/modal.css'
import '../styles/addFireTeam.css'
import {assignTeamToStation, getTeams} from  '../../http/fireTeamAPI'
import { getFireStations } from "../../http/fireStationAPI";


export const AssignTeamToStation = observer(({show, onHide}) => {
    const [teamId, setTeamId] = useState('1')
    const [stationId, setStationId] = useState('1')
    const [teams, setTeams] = useState()
    const [stations, setStations] = useState()
    
    useEffect(() => {
        getTeams().then(data => {
            setTeams(data)
        })

        getFireStations().then(data => {
            setStations(data.rows)
        })
    }, [])

    const assign = ()=> {

        assignTeamToStation({
            id: parseInt(teamId),
            fireStationId: parseInt(stationId)
        })
    }

    if (show)
    return (
        <div id="background">
            <div 
            className="Primary"
            id="modal"
            >
                <div id="container">
                    <h1 id="title">Assign Fire Team to station</h1>
                    <div className="inputs">
                        <select
                        name="teams"
                        onChange={e => setTeamId(e.target.value)}
                        style={{color: 'black'}}
                        >
                        {
                        teams.map(team => {
                            return <option
                                    key={team.id}
                                    value={team.id}
                                    style={{color:  'black'}}
                                    >
                                        {team.name}
                                    </option>
                        })
                        }
                        </select>

                        <select
                        name="stations"
                        onChange={e => setStationId(e.target.value)}
                        style={{color: 'black'}}
                        >
                        {
                        stations.map(station => {
                            return <option
                                    key={station.id}
                                    value={station.id}
                                    style={{color:  'black'}}
                                    >
                                        {station.name}
                                    </option>
                        })
                        }
                        </select>
                    </div>
                    <div id="buttons">
                    <button onClick={onHide}>Close</button>
                    <button onClick={assign}>Assign</button>
                    </div>
                </div>
            </div>
        </div>
    )
})