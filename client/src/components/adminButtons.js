import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { AddFireStation } from "./modals/addFireStation";
import { AddFirefighter } from "./modals/addFirefighter";
import { AddFireEngine } from "./modals/addFireEngine";
import { AddFireTeam } from "./modals/addFireTeam";
import { AddAccidentType } from "./modals/addAccidentType";
import { AssignTeamToStation } from "./modals/assignTeamToStation";

export const AdminButtons = observer(() => {
  const [fireStationVisible, setFireStationVisible] = useState(false)
  const [firefighterVisible, setFirefighterVisible] = useState(false)
  const [fireEngineVisible, setFireEngineVisible] = useState(false)
  const [fireTypeVisible, setFireTypeVisible] = useState(false)
  const [fireTeamVisible, setFireTeamVisible] = useState(false)
  const [assignFireTeamVisible, setAssignFireTeamVisible] = useState(false)

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
            <button 
            id="add-fireType" 
            className="Secondary"
            onClick={() => setFireTypeVisible(true)}
            >  
                Add an accident type
            </button>
            <button 
            id="add-fireType" 
            className="Secondary"
            onClick={() => setFireTeamVisible(true)}
            >  
                Add a fire team
            </button>
            <button 
            id="add-fireType" 
            className="Secondary"
            onClick={() => setAssignFireTeamVisible(true)}
            >  
                Assign a fire team to station
            </button>
      <AddFireStation show={fireStationVisible} onHide={() => setFireStationVisible(false)}/>
      <AddFirefighter show={firefighterVisible} onHide={() => setFirefighterVisible(false)}/>
      <AddFireEngine show={fireEngineVisible} onHide={() => setFireEngineVisible(false)}/>
      <AddAccidentType show={fireTypeVisible} onHide={() => setFireTypeVisible(false)}/>
      <AddFireTeam show={fireTeamVisible} onHide={() => setFireTeamVisible(false)}/>
      <AssignTeamToStation show={assignFireTeamVisible} onHide={() => setAssignFireTeamVisible(false)}/>
        </div>
    )
})