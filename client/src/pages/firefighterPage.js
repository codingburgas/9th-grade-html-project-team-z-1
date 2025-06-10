import React, { useEffect, useState } from 'react'
import './styles/mainPage.css'
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
      <div className='Primary content'>
        <div className='station-map'>
          {
            fireStation ?
              <>
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
                      </Popup>
                    </Marker>
                </MapContainer>
                <p>{fireTeam.name}</p>
              </>
              :
              <h1>Loading</h1>
            }
        </div>
      </div>
    );
}

export default FirefighterPage