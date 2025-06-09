import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../../index";
import "../styles/login.css"
import {login} from "../../http/userAPI"
import { NavLink, useNavigate } from "react-router-dom";
import { REGISTRATION } from "../../utils/consts";

export const Login = observer(()=> {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const click = async() => {
        try{
            let data
            data = await login(email, password)
            user.setUser(data)
            user.setIsAuth(true)
            navigate("/")
        }
        catch(e) {
            alert(e.message)
        }
    }

    return (
        <div className="loginForm">
            <div className="Primary">
                <h2>Log in</h2>
            <form onSubmit={(e) => e.preventDefault()}>
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
                <h5>Don't have an account? <NavLink to={REGISTRATION}>Register</NavLink></h5>
            </div>
        </div>
    )
})