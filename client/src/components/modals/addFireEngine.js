import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import '../styles/modal.css'
import '../styles/addFireEngine.css'
import {addFireEngine} from '../../http/fireEngineAPI'
export const AddFireEngine = observer(({show, onHide}) => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [imageName, setImageName] = useState()
    
    const create = ()=> {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('image', imageName)

        addFireEngine(formData)
    }

    if (show)
    return (
        <div id="background">
            <div 
            className="Primary"
            id="modal"
            >
                <div id="container">
                    <h1 id="title">Add Fire Engine</h1>
                    <div className="inputs">

                        <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter fire engine name"
                        ></input>

                        <input 
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Enter description"
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