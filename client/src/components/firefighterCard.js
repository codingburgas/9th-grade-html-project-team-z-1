import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FIREFIGHTER_ROUTE } from "../utils/consts";
import './styles/firefighterCard.css'


export const FirefighterCard = observer(({data}) => {
    const navigate = useNavigate()
    return (
        <div className="Primary firefighter-card" style={{cursor: 'pointer'}} onClick={() => navigate(FIREFIGHTER_ROUTE + '/' + data.id)}>
            <div className="image"><img width={'200px'} src={process.env.REACT_APP_API_URL + '/' + data.image}></img></div>
            <div className="names">Names: {data.firstName} {data.lastName}</div>
        </div>
    )
})