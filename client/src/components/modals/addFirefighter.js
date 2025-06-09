import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import '../styles/modal.css'
import '../styles/addFireStation.css'
import '../styles/addFirefighter.css'
import {addFirefighter} from '../../http/firefighterAPI'
export const AddFirefighter = observer(({show, onHide}) => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [imageName, setImageName] = useState()
    
    const create = ()=> {

        const formData = new FormData()
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('image', imageName)
            
        console.log(imageName)

        addFirefighter(formData)
    }

    if (show)
    return (
        <div id="background">
            <div 
            className="Primary"
            id="modal"
            >
                <div id="container">
                    <h1 id="title">Add Fire Station</h1>
                    <div className="inputs">

                        <input 
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="Enter firefighter first name:"
                        ></input>

                        <input 
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Enter firefighter second name:"
                        ></input>

                        <input 
                        type="file"
                        onChange={e => setImageName(e.target.files[0])}
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