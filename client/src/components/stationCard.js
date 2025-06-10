import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { STATION_ROUTE } from "../utils/consts";
import './styles/stationCard.css'


export const StationCard = observer(({data}) => {
    const navigate = useNavigate()
    return (
        <div className="Primary station-card" style={{cursor: 'pointer'}} onClick={() => navigate(STATION_ROUTE + '/' + data.id)}>
            <div className="station-name">Name: {data.name}</div>
            <div className="address">Address: {data.address}</div>
        </div>
    )
})