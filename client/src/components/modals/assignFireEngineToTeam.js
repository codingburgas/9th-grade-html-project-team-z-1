import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import '../styles/modal.css'
import { getFireEngines, assignEngineToTeam } from "../../http/fireEngineAPI";
import { getTeams } from "../../http/fireTeamAPI";
import '../styles/assignFireEngineToTeam.css'
import '../styles/modal.css'

export const AssignFireEngineToTeam = observer(({show, onHide}) => {
    const [fireEngines, setFireEngines] = useState([])
    const [fireTeams, setFireTeams] = useState([])
    const [fireEngineId, setFireEngineId] = useState(1)
    const [fireTeamId, setFireTeamId] = useState(1)

    useEffect(() => {
        getFireEngines().then(data => {
            setFireEngines(data.rows)
            setFireEngineId(data.rows[0].id)
        })
        getTeams().then(data => {
            setFireTeams(data)
            setFireTeamId(data[0].id)
        })
    }, [])

    const assign = () => {
        assignEngineToTeam({id: fireEngineId, fireTeamId})
    }

    if (show)
    return (
        <div id="background">
            <div 
            className="Primary"
            id="modal"
            >
                <div id="container">
                    <h1 id="title">Assign a fire engine</h1>
                    <div className="inputs">

                        <select 
                        name={fireEngineId}
                        onChange={e => setFireEngineId(e.target.value)}
                        >
                            {
                                fireEngines.map(engine => {
                                    return <option
                                    key={engine.id}
                                    value={engine.id}
                                    >
                                        {engine.name}
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