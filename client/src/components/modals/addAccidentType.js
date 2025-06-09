import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import '../styles/modal.css'
import '../styles/addAccidentType.css'
import {createType} from  '../../http/accidentAPI'
export const AddAccidentType = observer(({show, onHide}) => {
    const [name, setName] = useState()
    
    const create = ()=> {

        const formData = new FormData()
        formData.append('name', name)

        createType(formData)
    }

    if (show)
    return (
        <div id="background">
            <div 
            className="Primary"
            id="modal"
            >
                <div id="container">
                    <h1 id="title">Add Accident Type</h1>
                    <div className="inputs">

                        <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter accident type name"
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