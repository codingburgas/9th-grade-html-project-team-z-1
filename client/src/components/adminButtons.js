import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { AddFireStation } from "./modals/addFireStation";
import { AddFirefighter } from "./modals/addFirefighter";

export const AdminButtons = observer(() => {
  const [fireStationVisible, setFireStationVisible] = useState(false)
  const [firefighterVisible, setFirefighterVisible] = useState(false)

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
            id="add-firefightern" 
            className="Secondary"
            onClick={() => setFirefighterVisible(true)}
            >  
                Add a firefighter
            </button>
      <AddFireStation show={fireStationVisible} onHide={() => setFireStationVisible(false)}/>
      <AddFirefighter show={firefighterVisible} onHide={() => setFirefighterVisible(false)}/>
        </div>
    )
})