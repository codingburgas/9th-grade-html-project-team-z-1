import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import '../styles/modal.css'
import '../styles/addFireTeam.css'
import {addTeam} from  '../../http/fireTeamAPI'
export const AddFireTeam = observer(({show, onHide}) => {
    const [name, setName] = useState()
    
    const create = ()=> {

        const formData = new FormData()
        formData.append('name', name)

        addTeam(formData)
    }

    if (show)
    return (
        <div id="background">
            <div 
            className="Primary"
            id="modal"
            >
                <div id="container">
                    <h1 id="title">Add Fire Team</h1>
                    <div className="inputs">

                        <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter team name"
                        ></input>
                        
                    </div>
                    <div id="buttons">
                    <button onClick={onHide}>Close</button>
                    <button onClick={create}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
})