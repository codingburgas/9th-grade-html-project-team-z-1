import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { AddFireStation } from "./modals/addFireStation";
import { AddFirefighter } from "./modals/addFirefighter";
import { AddFireEngine } from "./modals/addFireEngine";
import { AddFireTeam } from "./modals/addFireTeam";
import { AddAccidentType } from "./modals/addAccidentType";
import { AssignTeamToStation } from "./modals/assignTeamToStation";
import { AssignFirefighterToTeam } from "./modals/assignFirefighterToTeam";
import { AssignFireEngineToTeam } from "./modals/assignFireEngineToTeam";
import './styles/adminButtons.css'

export const AdminButtons = observer(() => {
  const [fireStationVisible, setFireStationVisible] = useState(false)
  const [firefighterVisible, setFirefighterVisible] = useState(false)
  const [fireEngineVisible, setFireEngineVisible] = useState(false)
  const [fireTypeVisible, setFireTypeVisible] = useState(false)
  const [fireTeamVisible, setFireTeamVisible] = useState(false)
  const [assignFireTeamVisible, setAssignFireTeamVisible] = useState(false)
  const [assignFirefighterVisible, setAssignFirefighterVisible] = useState(false)
  const [assignFireEngineToTeamVisible, setAssignFireEngineToTeamVisible] = useState(false)

    return (
        <div>
            <button 
            id="add-fire-station" 
            className="Primary admin-button"
            onClick={() => setFireStationVisible(true)}
            >  
                Add a fire station
            </button>
            <button 
            id="add-firefighter" 
            className="Primary admin-button"
            onClick={() => setFirefighterVisible(true)}
            >  
                Add a firefighter
            </button>
            <button 
            id="add-fireEngine" 
            className="Primary admin-button"
            onClick={() => setFireEngineVisible(true)}
            >  
                Add a fire engine
            </button>
            <button 
            id="add-fireType" 
            className="Primary admin-button"
            onClick={() => setFireTypeVisible(true)}
            >  
                Add an accident type
            </button>
            <button 
            id="add-fireType" 
            className="Primary admin-button"
            onClick={() => setFireTeamVisible(true)}
            >  
                Add a fire team
            </button>
            <button 
            id="add-fireType" 
            className="Primary admin-button"
            onClick={() => setAssignFireTeamVisible(true)}
            >  
                Assign a fire team to station
            </button>
            <button 
            id="add-fireType" 
            className="Primary admin-button"
            onClick={() => setAssignFirefighterVisible(true)}
            >  
                Assign a firefighter to a fire team
            </button>
            <button 
            id="add-fireType" 
            className="Primary admin-button"
            onClick={() => setAssignFireEngineToTeamVisible(true)}
            >  
                Assign a fire engine to a fire team
            </button>
      <AddFireStation show={fireStationVisible} onHide={() => setFireStationVisible(false)}/>
      <AddFirefighter show={firefighterVisible} onHide={() => setFirefighterVisible(false)}/>
      <AddFireEngine show={fireEngineVisible} onHide={() => setFireEngineVisible(false)}/>
      <AddAccidentType show={fireTypeVisible} onHide={() => setFireTypeVisible(false)}/>
      <AddFireTeam show={fireTeamVisible} onHide={() => setFireTeamVisible(false)}/>
      <AssignTeamToStation show={assignFireTeamVisible} onHide={() => setAssignFireTeamVisible(false)}/>
      <AssignFirefighterToTeam show={assignFirefighterVisible} onHide={() => setAssignFirefighterVisible(false)}/>
      <AssignFireEngineToTeam show={assignFireEngineToTeamVisible} onHide={() => setAssignFireEngineToTeamVisible(false)}/>
        </div>
    )
})