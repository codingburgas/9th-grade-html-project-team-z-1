import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import '../styles/modal.css'
import '../styles/addFireStation.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, useMapEvents} from "react-leaflet"
import L from "leaflet"
import {Context} from '../../index'
import {addFireStation} from '../../http/fireStationAPI'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ClickHandler = ({onMapClick}) => {
    useMapEvents({
        click(e) {
            onMapClick(e.latlng)
        }
    })
    return null
}

export const AddFireStation = observer(({show, onHide}) => {
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [markerCoords, setMarkerCoords] = useState()

    // Returns full address of a point (latitude and longitude)
    const getAddress = async (lat, lon) => {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        )
        const data = await response.json()
        return data.display_name || "Address not found"
    }
    const click = latlng => {
        const lat = latlng.lat
        const lng = latlng.lng
        
        setLatitude(lat)
        setLongitude(lng)
        getAddress(latitude, longitude).then((e) => {
            setAddress(e)
            })
        setMarkerCoords(latlng)
    }

    const create = () => {
    
        const formData = new FormData()
        formData.append('name', name)
        formData.append('address', address)
        formData.append('latitude', latitude)
        formData.append('longtitude', longitude)
    
        addFireStation(formData)
    }
    
    if (show)

    return (
        <div id="background">
            <div 
            className="Primary"
            id="modal"
            >
                <div id="container">
                    <h1 id="title">Add Fire Station</h1>
                    <div className="fire-station-map">
                        <MapContainer 
                        center={[42.45585612547671, 27.401508564127575]} 
                        zoom={17} 
                        className="fire-station-mapContainer"
                        >
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            className="fire-station-tileLayer"
                            />
                            <ClickHandler onMapClick={click} />
                            {markerCoords && <Marker position={markerCoords} />}
                        </MapContainer>
                    </div>
                    <input 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter fire station name:"
                    ></input>
                    <div id="buttons">
                    <button onClick={onHide}>Close</button>
                    <button onClick={create}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
})