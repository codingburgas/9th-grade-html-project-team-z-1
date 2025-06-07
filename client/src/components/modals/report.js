import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../../index";
import style from "../styles/report.css"
import { data, NavLink } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const getAddress = async(lat, lng) => {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lng=${lng}`
        )
        const data = await response.json()
        return data.display_name
}

const ClickHandler = () => {
    useMapEvents({
        click(e) {
            const {lat, lng} = e.latlng
            alert(lat, lng)
        }
    })
    return null
}

export const Report = observer(()=> {
    const {accident} = useContext(Context)
    const [name, setName]=useState("")
    const [address, setAddress]=useState("")
    const [lat, setLat]=useState("")
    const [lng, setLng]=useState("")
    const [description, setDescription]=useState("")
    const [startDate, setStartDate]=useState("")
    const [endDate, setEndDate]=useState("")
    const [startTime, setStartTime]=useState("")
    const [endTime, setEndTime]=useState("")

    const click = async() => {
        alert("Your accident is submitted succesfully!")
    }

    return (
        <div className="reportForm">
            <div className="container">
                <h2 className="dark-text">Report a fire</h2>
                <form>
                    <input type="text"
                    placeholder="Enter accident's name" 
                    value={name}
                    onChange={e => setName(e.target.value)}></input>

                    <input type="text"
                    placeholder="Enter your address" 
                    value={address}
                    onChange={e => setAddress(e.target.value)}></input>

                    <div className="map">
                        <MapContainer center={[51, 42]} zoom={13} className="mapContainer">
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <ClickHandler/>
                        </MapContainer>
                    </div>

                    <input type="text"
                    placeholder="Enter accident's description" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}></input>
                    <input type ="submit" onClick={click}></input>
                </form>
            </div>
        </div>
    )
})