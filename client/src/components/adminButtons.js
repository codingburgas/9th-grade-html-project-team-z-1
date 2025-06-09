import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { AddFireStation } from "./modals/addFireStation";

export const AdminButtons = observer(() => {
  const [fireStationVisible, setFireStationVisible] = useState(false)

    return (
        <div>
            <button 
            id="add-fire-station" 
            className="Secondary"
            onClick={() => setFireStationVisible(true)}
            >  
                Add a fire station
            </button>
      <AddFireStation show={fireStationVisible} onHide={() => setFireStationVisible(false)}/>
        </div>
    )
})