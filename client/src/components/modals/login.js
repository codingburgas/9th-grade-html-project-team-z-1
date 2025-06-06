import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../..";
import style from "../styles/login.css"
import {login} from "../../http/userAPI"

export const Login = observer(()=> {
    const {user} = useContext(Context)
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const click = async() => {
        try{
            let data
            data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
        }
        catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="loginForm">
            <div className="Primary">
                <h2>Log in</h2>
            <form>
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
                <h5>Don't have an account? Register</h5>
            </div>
        </div>
    )
})