import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { observer } from "mobx-react-lite";
import './styles/map.css'
import { fetchAccidents, fetchTypes } from "../http/accidentAPI";
import { Context } from "..";
import dayJs from 'dayjs'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const Map = observer(() => {
    const {accident} = useContext(Context)

    const [accidents, setAccidents] = useState([])
    const [selectedType, setSelectedType] = useState(1)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [accidentsCount, setAccidentsCount] = useState()

    useEffect(() => {
        fetchTypes().then(data => accident.setTypes(data))
    }, [])

    useEffect(() => {
        let isCancelled = false

        fetchAccidents({type: selectedType, startDate: startDate, endDate: endDate})
        .then(data => {
            if (!isCancelled) {
                setAccidents(data.rows)
                setAccidentsCount(data.count)
            }
        })
        return () => isCancelled = true

    }, [selectedType, startDate, endDate])

    return (
        <div>
            <div className="fullscreen-map">
                <MapContainer 
                center={[42.45585612547671, 27.401508564127575]} 
                zoom={17} 
                className="fullscreen-mapContainer"
                >
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    className="fullscreen-tileLayer"
                    />
                    {
                    accidents.map(acc => (
                        <Marker key={acc.id} position={[acc.latitude, acc.longtitude]}>
                            <Popup>
                                <h5 style={{color: 'black'}}>{acc.name}</h5>
                                <p style={{color: 'black'}}>address: {acc.address}</p>
                                <p style={{color: 'black'}}>description: {acc.description}</p>
                                <p style={{color: 'black'}}>start date & time: {dayJs(acc.startDate).format("DD.MM.YYYY HH:mm")}</p>
                            </Popup>
                        </Marker>
                    ))
                }
                </MapContainer>
            </div>

            <div className="accent" id="mapText">
                <h2 className="title">Filters</h2>
                <form>
                    <label for = "type"> Enter fire's type</label>
                    <select name = "type"
                    onChange={e => setSelectedType(e.target.value)}
                    style={{color: 'black'}}
                    >
                        {accident.types.map(type => {
                            return <option 
                                        key={type.id} 
                                        value={type.id}
                                        style={{color: "black"}}
                                        >
                                            {type.name}
                                    </option>
                        })}
                    </select><br></br>
                    <label for = "startDate"> Enter starting date</label>
                    <input name = "startDate"
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}></input>
                   <br></br>
                        <label for = "endDate"> Enter ending date</label>
                    <input name = "endDate"
                    type="date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}></input>
                  
                     <br></br>
                </form>
                <p id="count">Accidents found: {accidentsCount}</p>
                
            </div>
        </div>
    )
})