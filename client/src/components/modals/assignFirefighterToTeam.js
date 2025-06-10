import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import '../styles/modal.css'
import { assignFirefighter, assignFirefighterToStation, getFirefighters } from "../../http/firefighterAPI";
import { getTeams } from "../../http/fireTeamAPI";
import { getOneFireStation } from "../../http/fireStationAPI";

export const AssignFirefighterToTeam = observer(({show, onHide}) => {
    const [firefighters, setFirefighters] = useState([])
    const [fireTeams, setFireTeams] = useState([])
    const [firefighterId, setFirefighterId] = useState(1)
    const [fireTeamId, setFireTeamId] = useState(1)

    useEffect(() => {
        getFirefighters().then(data => {
            setFirefighters(data.rows)
            setFirefighterId(data.rows[0].id)
        })
        getTeams().then(data => {
            setFireTeams(data)
            setFireTeamId(data[0].id)
        })
    }, [])

    const assign = () => {
        assignFirefighter({id: firefighterId, fireTeamId})
    }

    if (show)
    return (
        <div id="background">
            <div 
            className="Primary"
            id="modal"
            >
                <div id="container">
                    <h1 id="title">Add a firefighter</h1>
                    <div className="inputs">

                        <select 
                        name={firefighterId}
                        onChange={e => setFirefighterId(e.target.value)}
                        >
                            {
                                firefighters.map(firefighter => {
                                    return <option
                                    key={firefighter.id}
                                    value={firefighter.id}
                                    >
                                        {firefighter.firstName} {firefighter.lastName} 
                                    </option>
                                })
                            }
                        </select>
                        <select 
                        name={fireTeamId}
                        onChange={e => setFireTeamId(e.target.value)}
                        >
                            {
                                fireTeams.map(fireTeam => {
                                    return <option
                                    key={fireTeam.id}
                                    value={fireTeam.id}
                                    >
                                        {fireTeam.name}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div id="buttons">
                    <button onClick={onHide}>Close</button>
                    <button onClick={assign}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
})