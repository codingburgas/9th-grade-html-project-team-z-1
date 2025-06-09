import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../..";
import "../styles/register.css"
import {registration} from "../../http/userAPI"
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from "../../utils/consts";

export const Registration = observer(()=> {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [fName, setFName]=useState("")
    const [lName, setLName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const click = async() => {
        try{
            let data
            data = await registration(fName, lName, email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate("/")
        }
        catch(e) {
            alert(e.response.data.message)
        }
        
    }

    return (
        <div className="registrationForm">
            <div className="Primary">
                <h2>Register</h2>
            <form>
                <input type="text"
                placeholder="Enter your first name" 
                value={fName}
                onChange={e => setFName(e.target.value)}></input>
                
                <input type="text"
                placeholder="Enter your last name" 
                value={lName}
                onChange={e => setLName(e.target.value)}></input>

                <input type="text"
                placeholder="Enter email" 
                value={email}
                onChange={e => setEmail(e.target.value)}></input>
                
                <input type="text" 
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}></input><br></br>
                <input type ="submit" onClick={click}></input>
            </form>
                <h5>Already have an account? <NavLink to={LOGIN_PAGE}>Log in</NavLink></h5>
            </div>
        </div>
    )
})