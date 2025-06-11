import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import '../styles/modal.css'
import {fetchAccidents} from '../../http/accidentAPI'
import {assignAccident} from '../../http/fireTeamAPI'
import { getTeams } from "../../http/fireTeamAPI";
import '../styles/modal.css'

export const AssignAccidentToTeam = observer(({show, onHide}) => {
    const [accidents, setAccidents] = useState([])
    const [fireTeams, setFireTeams] = useState([])
    const [accidentId, setAccidentId] = useState(1)
    const [fireTeamId, setFireTeamId] = useState(1)

    useEffect(() => {
        fetchAccidents().then(data => {
            setAccidents(data.rows)
            setAccidentId(data.rows[0].id)
        })
        getTeams().then(data => {
            setFireTeams(data)
            setFireTeamId(data[0].id)
        })
    }, [])

    const assign = () => {
        assignAccident({
            id: fireTeamId,
            accidentId: accidentId
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
                    <h1 id="title">Assign a team to accident</h1>
                    <div className="inputs">

                        <select 
                        name={accidentId}
                        onChange={e => setAccidentId(e.target.value)}
                        >
                            {
                                accidents.map(acc => {
                                    return <option
                                    key={acc.id}
                                    value={acc.id}
                                    >
                                        {acc.name}
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
                    <button onClick={assign}>Assign</button>
                    </div>
                </div>
            </div>
        </div>
    )
})