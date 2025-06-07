import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../../index";
import style from "../styles/report.css"
import { data, NavLink } from "react-router-dom";

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