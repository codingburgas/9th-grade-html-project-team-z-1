import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { AddFireStation } from "./modals/addFireStation";
import { AddFirefighter } from "./modals/addFirefighter";
import { AddFireEngine } from "./modals/addFireEngine";

export const AdminButtons = observer(() => {
  const [fireStationVisible, setFireStationVisible] = useState(false)
  const [firefighterVisible, setFirefighterVisible] = useState(false)
  const [FireEngineVisible, setFireEngineVisible] = useState(false)

    return (
        <div>
            <button 
            id="add-fire-station" 
            className="Secondary"
            onClick={() => setFireStationVisible(true)}
            >  
                Add a fire station
            </button>
            <button 
            id="add-firefighter" 
            className="Secondary"
            onClick={() => setFirefighterVisible(true)}
            >  
                Add a firefighter
            </button>
            <button 
            id="add-fireEngine" 
            className="Secondary"
            onClick={() => setFireEngineVisible(true)}
            >  
                Add a firefighter
            </button>
      <AddFireStation show={fireStationVisible} onHide={() => setFireStationVisible(false)}/>
      <AddFirefighter show={firefighterVisible} onHide={() => setFirefighterVisible(false)}/>
      <AddFireEngine show={FireEngineVisible} onHide={() => setFireEngineVisible(false)}/>
        </div>
    )
})