import React, { useEffect, useState } from 'react'
import './styles/firefighterPage.css'
import { useParams } from 'react-router-dom'
import { getOneFirefighter } from '../http/firefighterAPI'
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { getOneTeam } from '../http/fireTeamAPI'
import { getOneFireStation } from '../http/fireStationAPI'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const FirefighterPage = () => {
    const [firefighter, setfirefighter] = useState(null)
    const [fireTeam, setFireTeam] = useState(null)
    const [fireStation, setFireStation] = useState(null)
    const {id} = useParams()

    useEffect(() => {
      async function fetchData() {
        const firefighterData = await getOneFirefighter({ id });
        setfirefighter(firefighterData);
        console.log(firefighter)

        const teamData = await getOneTeam({ id: firefighterData.fireTeamId});
        setFireTeam(teamData);

        const stationData = await getOneFireStation({ id: teamData.fireStationId })
        setFireStation(stationData);
      }
      fetchData()
    }, [])

    return (
      <div className='Primary' id='content'>
          {
            fireStation ?
              <div>
                <h2>Location:</h2>
                <div className='station-map'>
                <MapContainer 
                center={[fireStation.latitude, fireStation.longtitude]}
                zoom={17} 
                className="station-mapContainer"
                >
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    className="station-tileLayer"
                    />
                    <Marker position={[fireStation.latitude, fireStation.longtitude]}>
                      <Popup>
                          <h5>{firefighter.firstName} {firefighter.lastName}</h5>
                          <p>State: {firefighter.state}</p>
                      </Popup>
                    </Marker>
                </MapContainer>
                <h2>Information: </h2>
                    <div className='Secondary' id='info'>
                      <img width={150} src={process.env.REACT_APP_API_URL + '/' + firefighter.image}></img>
                      <div id='info-text'>
                        <p>Names: {firefighter.firstName} {firefighter.lastName}</p>
                        <p>Team: {fireTeam.name}</p>
                        <p>Station: {fireStation.name}</p>
                        <p>Station address: {fireStation.address}</p>
                        <p>State: {firefighter.state}</p>
                      </div>
                    </div>
                </div>
              </div>
              :
              <h1>Loading</h1>
            }
      </div>
    );
}

export default FirefighterPage