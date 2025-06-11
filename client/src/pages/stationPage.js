import React, { useEffect, useState } from 'react'
import './styles/mainPage.css'
import { useParams } from 'react-router-dom'
import { getOneFireStation } from '../http/fireStationAPI'
import './styles/stationPage.css'
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const StationPage = () => {
    const [station, setStation] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getOneFireStation({id: id}).then(data => {
            setStation(data)
        })
    }, [])

  return (
    <div className='Primary content'>
        {
          station ?
          <div className='station-map'>
        <h2>Location:</h2>
        <MapContainer 
            center={[station.latitude, station.longtitude]} 
            zoom={17} 
            className="station-mapContainer"
            >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                className="station-tileLayer"
                />
                <Marker position={[station.latitude, station.longtitude]}>
                  <Popup>
                      <h5>{station.name}</h5>
                      <p>{station.address}</p>
                  </Popup>
                </Marker>
          </MapContainer>
              <h2>Information:</h2>
            <div id='info' className='Secondary'>
              <p>Station name: {station.name}</p>
              <p>Station address: {station.address}</p>
            </div>
            </div>
                :
                <h1>Loading</h1>
                }
    </div>
  );
}

export default StationPage