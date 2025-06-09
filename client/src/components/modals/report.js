import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import "../styles/report.css"
import { MapContainer, TileLayer, Marker, useMapEvents} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { createAccident, fetchTypes } from "../../http/accidentAPI";

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const getAddress = async(lat, lon) => {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        )
        const data = await response.json()
        return data.display_name || "Address not found"
}

const ClickHandler = ({onMapClick}) => {
    useMapEvents({
        click(e) {
            onMapClick(e.latlng)
        }
    })
    return null
}

export const Report = observer(()=> {
    const {accident} = useContext(Context)
    const [name, setName]=useState("")
    const [address, setAddress]=useState("")
    const [lat, setLat]=useState()
    const [lng, setLng]=useState()
    const [description, setDescription]=useState("")

    const [markerPosition, setPosition] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => accident.setTypes(data))
        accident.setSelectedType(1)
    }, [])

    const click = latlng => {
        const lat = latlng.lat
        const lng = latlng.lng

        setLat(lat)
        setLng(lng)
        getAddress(lat, lng).then((e) => {
            setAddress(e)
        })
        setPosition(latlng)

    }
    
    const clearInputs = () => {
        setName('')
        setDescription('')
        setPosition(null)
    }

    const submit = () => {
        const date = new Date
        const startDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        const endDate = startDate
        const startTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        const endTime = startTime

        const formData = new FormData()
        formData.append('name', name)
        formData.append('address', address)
        formData.append('latitude', lat)
        formData.append('longtitude', lng)
        formData.append('description', description)
        formData.append('startDate', startDate)
        formData.append('endDate', endDate)
        formData.append('startTime', startTime)
        formData.append('endTime', endTime)
        formData.append('typeId', accident.selectedType)

        createAccident(formData).then(() => clearInputs())
    }

    return (
        <div className="reportForm">
            <div className="container">
                <form onSubmit={e => e.preventDefault()}>
                    <h2 className="dark-text">Report a fire</h2>

                    <input type="text"
                    placeholder="Enter accident's name" 
                    value={name}
                    onChange={e => setName(e.target.value)}></input>

                    <input type="text"
                    placeholder="Enter accident's description" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}></input>
                    
                    <label style={{color: "black"}}>
                        Choose accident type
                    </label>

                    <select name="type"
                     style={{width: 100, color: "black"}}
                     onChange={e => accident.setSelectedType(e.target.value)}
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
                    </select>

                    <div className="map" id="min">

                        <MapContainer 
                        center={[42.45585612547671, 27.401508564127575]} 
                        zoom={17} 
                        className="mapContainer"
                        >
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            className="tileLayer"
                            />
                            <ClickHandler onMapClick={click}/>
                            {markerPosition && <Marker position={markerPosition} />}
                        </MapContainer>
                    </div>

                    <input className="submitButton" type ="submit" onClick={submit}></input>

                </form>
            </div>
        </div>
    )
})