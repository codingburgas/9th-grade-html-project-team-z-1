import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import style from "../styles/login.css"

export const Login = observer(()=> {
    const {user} = useContext(Context)
    return (
        <div className="loginForm">
            <div className="Primary">
                <h2>Log in</h2>
            <form>
                <input type="text" placeholder="Enter email"></input>
                <input type="text" placeholder="Enter password"></input><br></br>
                <input type="submit"></input>
            </form>
                <h4>Don't have an account? Register</h4>
            </div>
        </div>
    )
})