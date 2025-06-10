import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FIRE_ENGINE_ROUTE } from "../utils/consts";
import './styles/fireEngineCard.css'


export const FireEngineCard = observer(({data}) => {
    const navigate = useNavigate()
    return (
        <div className="Primary fire-engine-card" style={{cursor: 'pointer'}} onClick={() => navigate(FIRE_ENGINE_ROUTE + '/' + data.id)}>
            <div className="image"><img width={'200px'} src={process.env.REACT_APP_API_URL + '/' + data.image}></img></div>
            <div className="names">Name: {data.name}</div>
        </div>
    )
})