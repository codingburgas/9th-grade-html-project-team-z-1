import { observer } from "mobx-react-lite";
import './styles/info.css'
import React, { useEffect, useState } from "react";
import { getFireStations } from "../http/fireStationAPI";
import { getFirefighters } from "../http/firefighterAPI";
import { getFireEngines } from "../http/fireEngineAPI";
import { StationCard } from "./stationCard";
import { FirefighterCard } from "./firefighterCard";
import { FireEngineCard } from "./fireEngineCard";

export const Info = observer(() => {

    const [category, setCategory] = useState('')
    const [stations, setStations] = useState([])
    const [firefighters, setFirefighters] = useState([])
    const [engines, setEngines] = useState([])

    useEffect(() => {
        getFireStations().then(data => {
            setStations(data.rows)
        })
        getFirefighters().then(data => {
            setFirefighters(data.rows)
        })
        getFireEngines().then(data => {
            setEngines(data.rows)
        })
    }, [])

    const Content = observer(() => {
        if (category == 'stations')
            return (
                <div>
                    <h1>Stations</h1>
                    <div className="elements">
                        {
                            stations.map(station => {
                                return <StationCard key={station.id} data={station} />
                            })
                        }
                    </div>
                </div>
            )
        if (category == 'firefighters')
            return (
                <div>
                    <h1>Firefighters</h1>
                    <div className="elements">
                        {
                            firefighters.map(firefighter => {
                                return <FirefighterCard key={firefighter.id} data={firefighter} />
                            })
                        }
                    </div>
                </div>
            )
        if (category == 'engines')
            return (
            <div>
                <h1>Engines</h1>
                <div className="elements">
                    {
                        engines.map(engine => {
                            return <FireEngineCard key={engine.id} data={engine} />
                        })
                    }
                </div>
            </div>
            )
    })

    return (
        <div>
            <div className="accent aside">
                <ul>
                    <li><button 
                    onClick={() => setCategory('stations')}
                    >
                        Stations
                    </button></li>
                    <li><button
                        onClick={() => setCategory('firefighters')}
                    >
                        Firefighters
                    </button></li>
                    <li><button
                    onClick={() => setCategory('engines')}
                    >
                        Fire engines
                    </button></li>
                </ul>
            </div>

            <div className="Secondary main">
                <Content />
            </div>
        </div>
    )
})